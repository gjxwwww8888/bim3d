import { CallLater } from "./CallLater";
import { Utils } from "./Utils";

export class Timer {


    static gSysTimer = null;


    static _pool = [];

    static _mid = 1;

    constructor(autoActive = true) {

 

        /** 时针缩放。*/
        this.scale = 1;
       
      
        /** 当前的帧数。*/
        this.currFrame = 0;
        /** 两帧之间的时间间隔,单位毫秒。*/
        this._delta = 0;


        this._map = {};

        this._handlers = [];

        this._temp = [];

        this._count = 0;

        autoActive && Timer.gSysTimer && Timer.gSysTimer.frameLoop(1, this, this._update);
        /** 当前帧开始的时间。*/
       this.currTimer = this._getNowData();
       this._lastTimer = this._getNowData();
    }


    /**两帧之间的时间间隔,单位毫秒。*/
    get delta() {
        return this._delta;
    }


    /**
     * @internal
     * 帧循环处理函数。
     */
    _update() {
        if (this.scale <= 0) {
            this._lastTimer = this._getNowData();
            this._delta = 0;
            return;
        }
        let frame = this.currFrame = this.currFrame + this.scale;
        let now = this._getNowData();
        let awake = (now - this._lastTimer) > 30000;
        this._delta = (now - this._lastTimer) * this.scale;
        let timer = this.currTimer = this.currTimer + this._delta;
        this._lastTimer = now;

        //处理handler
        let handlers = this._handlers;
        this._count = 0;
        for (let i = 0, n = handlers.length; i < n; i++) {
            let handler = handlers[i];
            if (handler.method !== null) {
                let t = handler.userFrame ? frame : timer;
                if (t >= handler.exeTime) {
                    if (handler.repeat) {
                        if (!handler.jumpFrame || awake) {
                            handler.exeTime += handler.delay;
                            handler.run(false);
                            if (t > handler.exeTime) {
                                //如果执行一次后还能再执行，做跳出处理，如果想用多次执行，需要设置jumpFrame=true
                                handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
                            }
                        } else {
                            while (t >= handler.exeTime) {
                                handler.exeTime += handler.delay;
                                handler.run(false);
                            }
                        }
                    } else {
                        handler.run(true);
                    }
                }
            } else {
                this._count++;
            }
        }

        if (this._count > 30 || frame % 200 === 0) this._clearHandlers();
    }

    /** */
    _clearHandlers() {
        let handlers = this._handlers;
        for (let i = 0, n = handlers.length; i < n; i++) {
            let handler = handlers[i];
            if (handler.method !== null) this._temp.push(handler);
            else this._recoverHandler(handler);
        }
        this._handlers = this._temp;
        handlers.length = 0;
        this._temp = handlers;
    }

    /** */
    _recoverHandler(handler) {
        if (this._map[handler.key] == handler) delete this._map[handler.key];
        handler.clear();
        Timer._pool.push(handler);
    }

    /**
     * @
     * get now time data
     * @returns 
     */
    _getNowData() {
        return Date.now();
    }

    /** @internal */
    _create(useFrame, repeat, delay, caller, method, args, coverBefore) {
        //如果延迟为0，则立即执行
        if (!delay) {
            method.apply(caller, args);
            return null;
        }
        let handler;
        //先覆盖相同函数的计时
        if (coverBefore) {
            handler = this._getHandler(caller, method);
            if (handler) {
                handler.repeat = repeat;
                handler.userFrame = useFrame;
                handler.delay = delay;
                handler.caller = caller;
                handler.method = method;
                handler.args = args;
                handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + this._getNowData() - this._lastTimer);
                return handler;
            }
        }

        //找到一个空闲的timerHandler
        handler = Timer._pool.length > 0 ? Timer._pool.pop() : new TimerHandler();
        handler.repeat = repeat;
        handler.userFrame = useFrame;
        handler.delay = delay;
        handler.caller = caller;
        handler.method = method;
        handler.args = args;
        handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + this._getNowData() - this._lastTimer);

        //索引handler
        this._indexHandler(handler);

        //插入数组
        this._handlers.push(handler);

        return handler;
    }

    /** */
    _indexHandler(handler) {
        let caller = handler.caller;
        let method = handler.method;
        let cid = caller ? caller.$_GID || (caller.$_GID = Utils.getGID()) : 0;
        let mid = method.$_TID || (method.$_TID = Timer._mid++);
        handler.key = cid + "_" + mid;
        this._map[handler.key] = handler;
    }

    /**
     * 定时执行一次。
     * @param	delay	延迟时间(单位为毫秒)。
     * @param	caller	执行域(this)。
     * @param	method	定时器回调函数。
     * @param	args	回调参数。
     * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
     */
    once(delay, caller, method, args = null, coverBefore = true) {
        this._create(false, false, delay, caller, method, args, coverBefore);
    }

    /**
     * 定时重复执行。
     * @param	delay	间隔时间(单位毫秒)。
     * @param	caller	执行域(this)。
     * @param	method	定时器回调函数。
     * @param	args	回调参数。
     * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
     * @param	jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
     */
    loop(delay, caller, method, args = null, coverBefore = true, jumpFrame = false) {
        let handler = this._create(false, true, delay, caller, method, args, coverBefore);
        if (handler) handler.jumpFrame = jumpFrame;
    }

    /**
     * 定时执行一次(基于帧率)。
     * @param	delay	延迟几帧(单位为帧)。
     * @param	caller	执行域(this)。
     * @param	method	定时器回调函数。
     * @param	args	回调参数。
     * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
     */
    frameOnce(delay, caller, method, args = null, coverBefore = true) {
        this._create(true, false, delay, caller, method, args, coverBefore);
    }

    /**
     * 定时重复执行(基于帧率)。
     * @param	delay	间隔几帧(单位为帧)。
     * @param	caller	执行域(this)。
     * @param	method	定时器回调函数。
     * @param	args	回调参数。
     * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
     */
    frameLoop(delay, caller, method, args = null, coverBefore = true) {
        this._create(true, true, delay, caller, method, args, coverBefore);
    }

    /** 返回统计信息。*/
    toString() {
        return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
    }

    /**
     * 清理定时器。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    clear(caller, method) {
        let handler = this._getHandler(caller, method);
        if (handler) {
            handler.clear();
        }
    }

    /**
     * 清理对象身上的所有定时器。
     * @param	caller 执行域(this)。
     */
    clearAll(caller) {
        if (!caller) return;
        for (let i = 0, n = this._handlers.length; i < n; i++) {
            let handler = this._handlers[i];
            if (handler.caller === caller) {
                handler.clear();
            }
        }
    }

    /** */
    _getHandler(caller, method) {
        let cid = caller ? caller.$_GID || (caller.$_GID = Utils.getGID()) : 0;
        let mid = method.$_TID || (method.$_TID = Timer._mid++);
        let key = cid + "_" + mid;
        return this._map[key];
    }

    /**
     * 延迟执行。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     * @param	args 回调参数。
     */
    callLater(caller, method, args = null) {
        CallLater.I.callLater(caller, method, args);
    }

    /**
     * 立即执行 callLater 。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    runCallLater(caller, method) {
        CallLater.I.runCallLater(caller, method);
    }

    /**
     * 取消执行 callLater 。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    clearCallLater(caller, method) {
        CallLater.I.clear(caller, method);
    }

    /**
     * 立即提前执行定时器，执行之后从队列中删除
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    runTimer(caller, method) {
        let handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run(true);
        }
    }

    /**
     * 暂停时钟
     */
    pause() {
        this.scale = 0;
    }

    /**
     * 恢复时钟
     */
    resume() {
        this.scale = 1;
    }


    destroy() {
        for (let i = 0, n = this._handlers.length; i < n; i++) {
            let handler = this._handlers[i];
            handler.clear();
        }
        this._handlers.length = 0;
        this._map = {};
        this._temp.length = 0;
    }
}



/** */
class TimerHandler {

    clear() {
        this.caller = null;
        this.method = null;
        this.args = null;
    }

    run(withClear) {
        let caller = this.caller;
        if (caller && caller.destroyed) return this.clear();
        let method = this.method;
        let args = this.args;
        withClear && this.clear();
        if (method == null) return;
        args ? method.apply(caller, args) : method.call(caller);
    }
}
