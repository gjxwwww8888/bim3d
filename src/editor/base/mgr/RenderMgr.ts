import BIM from "@/editor/BIM";
import { update } from "@tweenjs/tween.js";

export default class RenderMgr implements IMgr {

    startUp(): void {
        console.log('render mgr start up')
    }

    dispose(): void {

    }

    render(): void {

        const scenemgr = BIM.MGR.scene;
        // 渲染编辑器
        if ( scenemgr.editor.render) {
             scenemgr.editor.render.render( scenemgr.editor.scene,  scenemgr.editor.camera);
            if (scenemgr.idc) {
                scenemgr.idc.changeFace();
                scenemgr.idc.camera.position.copy( scenemgr.editor.camera.position.clone().sub( scenemgr.editor.controls.target));
                scenemgr.idc.camera.updateProjectionMatrix();
                scenemgr.idc.camera.lookAt( scenemgr.editor.scene.position);

                scenemgr.idc.render.render(scenemgr.idc.scene, scenemgr.idc.camera);
            }

        }
        if ( scenemgr.editor.css2dRender) {
             scenemgr.editor.css2dRender.render( scenemgr.editor.scene,  scenemgr.editor.camera);
        }
        // 渲染示例
        if (scenemgr.example.render) {
            scenemgr.example.render.render(scenemgr.example.scene, scenemgr.example.camera);
        }
        // 更新
        scenemgr.update();

        // 防止 TWEEN.js未加载完成导致报错
        try {
            update(undefined);
        }
        catch (error) {
            console.log("Tween.js update error!")
        }

    }
}