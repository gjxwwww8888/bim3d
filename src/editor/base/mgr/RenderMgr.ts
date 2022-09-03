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