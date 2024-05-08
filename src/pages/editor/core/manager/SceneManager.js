import BIM from "../BIM";
import EditorScene from "../scene/EditorScene";

export default class SceneManager {

    constructor(){
        this.scene = new EditorScene();
         
    }

    dispose() {
        if(this.scene){
            this.scene.dispose();
            this.scene = null;
        }
    }

    mountedMainScene() {
        console.log("mounted editor scene.")
        BIM.container.appendChild(this.scene._render.domElement);
        BIM.container.appendChild(this.scene._css2dReder.domElement);
    }

    unmountedMainScene() {
        BIM.container.removeChild(this.scene._render.domElement);
        BIM.container.removeChild(this.scene._css2dReder.domElement);
    }

    onResize(){
        this.scene.onResize();
    }

}