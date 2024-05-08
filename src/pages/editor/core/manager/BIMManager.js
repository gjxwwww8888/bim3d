import RenderManager from "./RenderManager";
import SceneManager from "./SceneManager";

export default class BIMManager {

    init() {
        console.log("init golabel manager.")

        this.sceneMgr = new SceneManager(); 
        this.renderMgr = new RenderManager();

    }

    dispose() {
        if(this.sceneMgr){
            this.sceneMgr.dispose();
            this.sceneMgr = null;
        }
       
        if(this.renderMgr){
            this.renderMgr.dispose();
            this.renderMgr = null;
        }
    }
}