import BIM from "@/editor/BIM";

export default class RenderMgr implements IMgr {

    startUp(): void {
        console.log('render mgr start up')    
    }

    dispose(): void {

    }

    render(): void {
        let scenemgr = BIM.MGR.scene;

        let render3d = scenemgr.main.render;
        let renderCss2d = scenemgr.main.css2dRender;
        let perCamera = scenemgr.main.camera;
        let scene3d = scenemgr.main.scene;

        if (render3d) render3d.render(scene3d, perCamera);

        if (renderCss2d) renderCss2d.render(scene3d, perCamera);

        if(scenemgr.example.render){
            scenemgr.example.render.render(scenemgr.example.scene,scenemgr.example.camera );
        }

        scenemgr.update();

    }
}