import ServiceBase from "@/editor/base/server/ServiceBase";
import BIM from "@/editor/BIM";

/**
 * @description 场景服务
 * @author songmy
 */
export default class SceneService extends ServiceBase implements ISceneSrevice {
    
    constructor() {
        super(service.SCENE_SERVICE);
        
    }

    protected onDispose(): void {
       
    }

    protected onInit(): void {
        this.notifyServiceInited();
    }

    mountedMainScene(): void {
        BIM.MGR.scene.mountedMainScene();
    }
   
    mountedPanel(): void {
        
    }

    mountedExampleScene(): void {
        BIM.MGR.scene.mountedExampleScene();
    }

    mountedIdcScene(): void {
        BIM.MGR.scene.mountedIdcScene();
    }

    grideShow(visible: boolean): void {
        BIM.MGR.scene.editor.grideShow(visible);
    }
}