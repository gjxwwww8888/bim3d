import BIM from "@/editor/BIM";
import ExampleScne from "../scene/example";
import MainScene from "../scene/main";


export default class SceneMgr implements IMgr{


    private _main:MainScene;

    private _example:ExampleScne;

    get main() {
        return this._main;
    }

    get example() {
        return this._example;
    }

    startUp(): void {
        console.log('scene mgr start up')    
        this._main = new MainScene();
        this._example = new ExampleScne();
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

    update():void {
        if(this._example)this._example.update();
    }
}