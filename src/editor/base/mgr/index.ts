import TestModule from "@/editor/plugin/test/TestModule";
import EventMgr from "./EventMgr";
import MeshMgr from "./MeshMgr";
import RenderMgr from "./RenderMgr";
import SceneMgr from "./SceneMgr";

export default class Imgr implements IMgr{

    scene:SceneMgr = new SceneMgr();

    render:RenderMgr = new RenderMgr();

    mesh:MeshMgr = new MeshMgr();

    event:EventMgr = new EventMgr();

    test:TestModule = new TestModule();

   
    startUp(): void{
        this.mesh.startUp();
        this.scene.startUp();
        this.render.startUp();
        this.event.startUp();
        this.test.startUp();
    }

    dispose(): void {
        if(this.test){
            this.test.dispose();
            this.test = null;
        }
        if(this.event){
            this.event.dispose();
            this.event = null;
        }

        if(this.mesh){
            this.mesh.dispose();
            this.mesh = null;
        }
        if(this.scene){
            this.scene.dispose();
            this.scene = null;
        }
        if(this.render){
            this.render.dispose();
            this.render = null;
        }
    }

}