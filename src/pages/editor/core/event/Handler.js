export default class Handler {

    /**@private handler对象池*/
    static _pool = [];
    /**@private */
    static _gid = 1;

    /** 执行域(this)。*/
    caller;
    /** 处理方法。*/
    method;
    /** 参数。*/
    args;
    /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
    once = false;

    /**@private */
    _id = 0;

    /**
     * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
     * @param	caller 执行域。
     * @param	method 处理函数。
     * @param	args 函数参数。
     * @param	once 是否只执行一次。
     */
    constructor(caller = null, method = null, args = null, once = false) {
        this.setTo(caller, method, args, once);
    }

    /**
     * 设置此对象的指定属性值。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
     * @return  返回 handler 本身。
     */
    setTo(caller, method, args, once = false) {
        this._id = Handler._gid++;
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
        return this;
    }

    /**
     * 执行处理器。
     */
    run() {
        if (this.method == null) return null;
        var id = this._id;
        var result = this.method.apply(this.caller, this.args);
        this._id === id && this.once && this.recover();
        return result;
    }

    /**
     * 执行处理器，并携带额外数据。
     * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
     */
    runWith(data) {
        if (this.method == null) return null;
        var id = this._id;
        if (data == null)
            var result = this.method.apply(this.caller, this.args);
        else if (!this.args && !data.unshift) result = this.method.call(this.caller, data);
        else if (this.args) result = this.method.apply(this.caller, this.args.concat(data));
        else result = this.method.apply(this.caller, data);
        this._id === id && this.once && this.recover();
        return result;
    }

    /**
     * 清理对象引用。
     */
    clear() {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
    }

    /**
     * 清理并回收到 Handler 对象池内。
     */
    recover() {
        if (this._id > 0) {
            this._id = 0;
            Handler._pool.push(this.clear());
        }
    }

    /**
     * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
     * @return  返回创建的handler实例。
     */
    static create(caller, method, args = null, once = true) {
        if (Handler._pool.length)
            return (Handler._pool.pop()).setTo(caller, method, args, once);
        return new Handler(caller, method, args, once);
    }
}

