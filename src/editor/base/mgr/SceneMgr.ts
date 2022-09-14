import BIM from "@/editor/BIM";
import { BIMEvent } from "@/libs/const/event";
import ExampleScene from "../scene/example";
import IdcScene from "../scene/indicator";
import MainScene from "../scene/main";


export default class SceneMgr implements IMgr{


    private _main:MainScene;

    private _example:ExampleScene;

    private _idc:IdcScene;

    get main() {
        return this._main;
    }

    get example() {
        return this._example;
    }

    get idc() {
        return this._idc;
    }

    startUp(): void {
        console.log('scene mgr start up')    
        this._main = new MainScene();
        this._example = new ExampleScene();
        this._idc = new IdcScene();
        BIM.ED.on(BIMEvent.IDC_POINTER_DOWN, this, this.onIdcPointerDwon)
    }

    dispose(): void {
        
    }

    onResize():void {
        if(this._main)this._main.onResize();
    }

    mountedMainScene():void {
        BIM.container.appendChild(this._main.render.domElement);
        BIM.container.appendChild(this._main.css2dRender.domElement);
    }

    mountedExampleScene():void {
        BIM.example.appendChild(this._example.render.domElement);
    }

    mountedIdcScene():void {
        BIM.idc.appendChild(this._idc.render.domElement);
        this._idc.addEvent();
    }

    update():void {
        if(this._example)this._example.update();
    }

    private onIdcPointerDwon(index:number):void {
        console.log("点击了面：", index);
    }
}