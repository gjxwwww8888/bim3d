import BIM from "@/editor/BIM";

export default class RenderMgr implements IMgr {

    startUp(): void {
        console.log('render mgr start up')    
    }

    dispose(): void {

    }

    render(): void {

        const scenemgr = BIM.MGR.scene;
        // 渲染编辑器
        if(scenemgr.main.render){
            scenemgr.main.render.render(scenemgr.main.scene,scenemgr.main.camera );
            if(scenemgr.idc){
                scenemgr.idc.changeFace();
                scenemgr.idc.camera.position.copy(scenemgr.main.camera.position.clone().sub(scenemgr.main.controls.target));
                scenemgr.idc.camera.updateProjectionMatrix();
                scenemgr.idc.camera.lookAt(scenemgr.main.scene.position);

                scenemgr.idc.render.render(scenemgr.idc.scene, scenemgr.idc.camera);
            }
            
        }
        if(scenemgr.main.css2dRender){
            scenemgr.main.css2dRender.render(scenemgr.main.scene,scenemgr.main.camera );
        }
        // 渲染示例
        if(scenemgr.example.render){
            scenemgr.example.render.render(scenemgr.example.scene,scenemgr.example.camera );
        }
        // 更新
        scenemgr.update();

    }
}