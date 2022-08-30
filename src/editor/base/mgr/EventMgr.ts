import BIM from "@/editor/BIM";
import { UIEvent } from "@/libs/const/enum";

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
        BIM.ED.on(UIEvent.LEFT_MENU_ITEM_CLICK, this, this.leftMenuClick);
    }

    private removeEvent():void {
        BIM.ED.off(UIEvent.LEFT_MENU_ITEM_CLICK, this, this.leftMenuClick);
    }

    private leftMenuClick(data:string):void {
        console.log('left menu click :', data);
        switch(data){
            case '画墙':
                
                break;
        }
    }
}