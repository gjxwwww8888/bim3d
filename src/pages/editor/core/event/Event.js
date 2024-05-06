/**
 * Event是事件类型的集合。一般当发生事件时，Event对象将作为参数传递给事件侦听器。
 */
export class Event {

    /** 一个空的 Event 对象。用于事件派发中转使用。*/
    static EMPTY = new Event();
    /** 定义 mousedown 事件对象的 type 属性值。*/
    static MOUSE_DOWN = "mousedown";
    /** 定义 mouseup 事件对象的 type 属性值。*/
    static MOUSE_UP = "mouseup";
    /** 定义 click 事件对象的 type 属性值。*/
    static CLICK = "click";
    /** 定义 rightmousedown 事件对象的 type 属性值。*/
    static RIGHT_MOUSE_DOWN = "rightmousedown";
    /** 定义 rightmouseup 事件对象的 type 属性值。*/
    static RIGHT_MOUSE_UP = "rightmouseup";
    /** 定义 rightclick 事件对象的 type 属性值。*/
    static RIGHT_CLICK = "rightclick";
    /** 定义 mousemove 事件对象的 type 属性值。*/
    static MOUSE_MOVE = "mousemove";
    /** 定义 mouseover 事件对象的 type 属性值。*/
    static MOUSE_OVER = "mouseover";
    /** 定义 mouseout 事件对象的 type 属性值。*/
    static MOUSE_OUT = "mouseout";
    /** 定义 mousewheel 事件对象的 type 属性值。*/
    static MOUSE_WHEEL = "mousewheel";
    /** 定义 mouseover 事件对象的 type 属性值。*/
    static ROLL_OVER = "mouseover";
    /** 定义 mouseout 事件对象的 type 属性值。*/
    static ROLL_OUT = "mouseout";
    /** 定义 doubleclick 事件对象的 type 属性值。*/
    static DOUBLE_CLICK = "doubleclick";
    /** 定义 change 事件对象的 type 属性值。*/
    static CHANGE = "change";
    /** 定义 changed 事件对象的 type 属性值。*/
    static CHANGED = "changed";
    /** 定义 resize 事件对象的 type 属性值。*/
    static RESIZE = "resize";
    /** 定义 added 事件对象的 type 属性值。*/
    static ADDED = "added";
    /** 定义 removed 事件对象的 type 属性值。*/
    static REMOVED = "removed";
    /** 定义 display 事件对象的 type 属性值。*/
    static DISPLAY = "display";
    /** 定义 undisplay 事件对象的 type 属性值。*/
    static UNDISPLAY = "undisplay";
    /** 定义 error 事件对象的 type 属性值。*/
    static ERROR = "error";
    /** 定义 complete 事件对象的 type 属性值。*/
    static COMPLETE = "complete";
    /** 定义 loaded 事件对象的 type 属性值。*/
    static LOADED = "loaded";
    /** 定义 loaded 事件对象的 type 属性值。*/
    static READY = "ready";
    /** 定义 progress 事件对象的 type 属性值。*/
    static PROGRESS = "progress";
    /** 定义 input 事件对象的 type 属性值。*/
    static INPUT = "input";
    /** 定义 render 事件对象的 type 属性值。*/
    static RENDER = "render";
    /** 定义 open 事件对象的 type 属性值。*/
    static OPEN = "open";
    /** 定义 message 事件对象的 type 属性值。*/
    static MESSAGE = "message";
    /** 定义 close 事件对象的 type 属性值。*/
    static CLOSE = "close";
    /** 定义 keydown 事件对象的 type 属性值。*/
    static KEY_DOWN = "keydown";
    /** 定义 keypress 事件对象的 type 属性值。*/
    static KEY_PRESS = "keypress";
    /** 定义 keyup 事件对象的 type 属性值。*/
    static KEY_UP = "keyup";
    /** 定义 frame 事件对象的 type 属性值。*/
    static FRAME = "enterframe";
    /** 定义 dragstart 事件对象的 type 属性值。*/
    static DRAG_START = "dragstart";
    /** 定义 dragmove 事件对象的 type 属性值。*/
    static DRAG_MOVE = "dragmove";
    /** 定义 dragend 事件对象的 type 属性值。*/
    static DRAG_END = "dragend";
    /** 定义 enter 事件对象的 type 属性值。*/
    static ENTER = "enter";
    /** 定义 select 事件对象的 type 属性值。*/
    static SELECT = "select";
    /** 定义 blur 事件对象的 type 属性值。*/
    static BLUR = "blur";
    /** 定义 focus 事件对象的 type 属性值。*/
    static FOCUS = "focus";
    /** 定义 visibilitychange 事件对象的 type 属性值。*/
    static VISIBILITY_CHANGE = "visibilitychange";
    /** 定义 focuschange 事件对象的 type 属性值。*/
    static FOCUS_CHANGE = "focuschange";
    /** 定义 played 事件对象的 type 属性值。*/
    static PLAYED = "played";
    /** 定义 paused 事件对象的 type 属性值。*/
    static PAUSED = "paused";
    /** 定义 stopped 事件对象的 type 属性值。*/
    static STOPPED = "stopped";
    /** 定义 start 事件对象的 type 属性值。*/
    static START = "start";
    /** 定义 end 事件对象的 type 属性值。*/
    static END = "end";
    /** 定义 componentadded 事件对象的 type 属性值。*/
    static COMPONENT_ADDED = "componentadded";
    /** 定义 componentremoved 事件对象的 type 属性值。*/
    static COMPONENT_REMOVED = "componentremoved";
    /** 定义 released 事件对象的 type 属性值。*/
    static RELEASED = "released";
    /** 定义 link 事件对象的 type 属性值。*/
    static LINK = "link";
    /** 定义 label 事件对象的 type 属性值。*/
    static LABEL = "label";
    /**浏览器全屏更改时触发*/
    static FULL_SCREEN_CHANGE = "fullscreenchange";
    /**显卡设备丢失时触发*/
    static DEVICE_LOST = "devicelost";
    /**世界矩阵更新时触发。*/
    static TRANSFORM_CHANGED = "transformchanged";
    /**更换动作时触发。*/
    static ANIMATION_CHANGED = "animationchanged";
    /**拖尾渲染节点改变时触发。*/
    static TRAIL_FILTER_CHANGE = "trailfilterchange";
    /**物理碰撞开始*/
    static TRIGGER_ENTER = "triggerenter";
    /**物理碰撞持续*/
    static TRIGGER_STAY = "triggerstay";
    /**物理碰撞结束*/
    static TRIGGER_EXIT = "triggerexit";

    /** 事件类型。*/
    type;
    /** 原生浏览器事件。*/
    nativeEvent;
    /** 事件目标触发对象。*/
    target;
    /** 事件当前冒泡对象。*/
    currentTarget;
    /** @internal */
    _stoped;
    /** 分配给触摸点的唯一标识号（作为 int）。*/
    touchId;
    /**键盘值*/
    keyCode;
    /**滚轮滑动增量*/
    delta;

    /**
     * 设置事件数据。
     * @param	type 事件类型。
     * @param	currentTarget 事件目标触发对象。
     * @param	target 事件当前冒泡对象。
     * @return 返回当前 Event 对象。
     */
    setTo(type, currentTarget, target) {
        this.type = type;
        this.currentTarget = currentTarget;
        this.target = target;
        return this;
    }

    /**
     * 阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget) 中的任何事件侦听器。
     */
    stopPropagation() {
        this._stoped = true;
    }

  
    /**
     * 表示 Alt 键是处于活动状态 (true) 还是非活动状态 (false)。
     */
    get altKey() {
        return this.nativeEvent.altKey;
    }

    /**
     * 表示 Ctrl 键是处于活动状态 (true) 还是非活动状态 (false)。
     */
    get ctrlKey() {
        return this.nativeEvent.ctrlKey;
    }

    /**
     * 表示 Shift 键是处于活动状态 (true) 还是非活动状态 (false)。
     */
    get shiftKey() {
        return this.nativeEvent.shiftKey;
    }

    /**
     * 包含按下或释放的键的字符代码值。字符代码值为英文键盘值。
     */
    get charCode() {
        return this.nativeEvent.charCode;
    }

    /**
     * 表示键在键盘上的位置。这对于区分在键盘上多次出现的键非常有用。<br>
     * 例如，您可以根据此属性的值来区分左 Shift 键和右 Shift 键：左 Shift 键的值为 KeyLocation.LEFT，右 Shift 键的值为 KeyLocation.RIGHT。另一个示例是区分标准键盘 (KeyLocation.STANDARD) 与数字键盘 (KeyLocation.NUM_PAD) 上按下的数字键。
     */
    get keyLocation() {
        return this.nativeEvent.location || this.nativeEvent.keyLocation;
    }

    
}

