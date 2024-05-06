
import BIM from "../BIM";
import { Event } from "./Event";


export class KeyBoardManager {
    static _pressKeys = {};

    /**是否开启键盘事件，默认为true*/
    static enabled = true;
    /**@internal */
    static _event = new Event();

    /**@internal */
    static init() {
        KeyBoardManager._addEvent("keydown");
        KeyBoardManager._addEvent("keypress");
        KeyBoardManager._addEvent("keyup");
    }

    static _addEvent(type) {
        window.document.addEventListener(type, function (e) {
            KeyBoardManager.preventDefault(e);
            KeyBoardManager._dispatch(e, type);
        }, false);
    }

    static _dispatch(e, type) {
        if (!KeyBoardManager.enabled) return;
        KeyBoardManager._event._stoped = false;
        KeyBoardManager._event.nativeEvent = e;
        KeyBoardManager._event.keyCode = e.keyCode || e.which || e.charCode;
        //判断同时按下的键
        if (type === "keydown") KeyBoardManager._pressKeys[KeyBoardManager._event.keyCode] = true;
        else if (type === "keyup") KeyBoardManager._pressKeys[KeyBoardManager._event.keyCode] = null;

        BIM.ED.event(type, e);
    }

    /**
     * 返回指定键是否被按下。
     * @param	key 键值。
     * @return 是否被按下。
     */
    static hasKeyDown(key) {
        return KeyBoardManager._pressKeys[key];
    }


    /**
     * 禁止原生的ctrl+z快捷键事件
     * @param e 
     */
    static preventDefault(e) {
        let ctrl = e.ctrlKey;
        let key = e.key;
        if (ctrl) {
            if (key == 's' || key == 'z') {
                e.preventDefault();
            }
        }
    }

}

