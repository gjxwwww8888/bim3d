import { Timer } from "./Timer";
import { Utils } from "./Utils";

export class CallLater {
   

    constructor() {
        this.I = new CallLater();
        this._pool = [];
        this._map = {};
        this._laters = [];
    }

    /**
     * @internal
     * 帧循环处理函数。
     */
    _update() {
        let laters = this._laters;
        let len = laters.length;
        if (len > 0) {
            for (let i = 0, n = len - 1; i <= n; i++) {
                let handler = laters[i];
                this._map[handler.key] = null;
                if (handler.method !== null) {
                    handler.run();
                    handler.clear();
                }
                this._pool.push(handler);
                i === n && (n = laters.length - 1);
            }
            laters.length = 0;
        }
    }

    /** @ */
     _getHandler(caller, method) {
        var cid = caller ? caller.$_GID || (caller.$_GID = Utils.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = (Timer._mid++));
        return this._map[cid + '.' + mid]
    }

    /**
     * 延迟执行。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     * @param	args 回调参数。
     */
    callLater(caller, method, args = null) {
        if (this._getHandler(caller, method) == null) {
            let handler;
            if (this._pool.length)
                handler = this._pool.pop();
            else
                handler = new LaterHandler();
            //设置属性
            handler.caller = caller;
            handler.method = method;
            handler.args = args;
            //索引handler
            var cid = caller ? caller.$_GID : 0;
            var mid = method["$_TID"];
            handler.key = cid + '.' + mid;
            this._map[handler.key] = handler
            //插入队列
            this._laters.push(handler);
        }
    }

    /**
     * 立即执行 callLater 。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    runCallLater(caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run();
            handler.clear();
        }
    }

    clear(caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler) {
            this._map[handler.key] = null;
            handler.key = "";
            handler.clear();
            return true;
        }
        return false;
    }

    clearAll(caller) {
        if (!caller) return;
        for (var i = 0, n = this._laters.length; i < n; i++) {
            var handler = this._laters[i];
            if (handler.caller === caller) {
                this._map[handler.key] = null;
                handler.key = "";
                handler.clear();
            }
        }
    }
}


class LaterHandler {
    
    clear() {
        this.caller = null;
        this.method = null;
        this.args = null;
    }

    run() {
        var caller = this.caller;
        if (caller && caller.destroyed) return this.clear();
        var method = this.method;
        var args = this.args;
        if (method == null) return;
        args ? method.apply(caller, args) : method.call(caller);
    }
}
