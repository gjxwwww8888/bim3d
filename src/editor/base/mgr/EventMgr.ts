import BIM from "@/editor/BIM";
import { Event } from "@/editor/framework/event/Event";
import { Keyboard } from "@/editor/framework/event/Keyboard";
import { KeyBoardManager } from "@/editor/framework/event/KeyBoardManager";

/**
 * @description 全局事件管理类
 * @author songmy
 * 
 */
export default class EventMgr implements IMgr {
    
    startUp(): void {
        console.log('event mgr start up') 
        this.addEvent();   
    }

    dispose(): void {
        this.removeEvent();
    }

    private addEvent():void {
        BIM.ED.on(BIMEvent.LEFT_MENU_ITEM_CLICK, this, this.leftMenuClick);
        BIM.ED.on(Event.KEY_DOWN, this, this.onkeydown);
    }

    private removeEvent():void {
        BIM.ED.off(BIMEvent.LEFT_MENU_ITEM_CLICK, this, this.leftMenuClick);
        BIM.ED.off(Event.KEY_DOWN, this, this.onkeydown);
    }

    private leftMenuClick(data:string):void {
        console.log('left menu click :', data);
        switch(data){
            case '画墙':
                
                break;
        }
    }

    private onkeydown(e: Event): void {
        let isCtrl: boolean = KeyBoardManager.hasKeyDown(Keyboard.CONTROL);
      
        switch (e.keyCode) {
            case Keyboard.ESCAPE:
                this.dealEscapeEvent();
                break;
        }
    }

    private dealEscapeEvent(): void {
    
    }
}