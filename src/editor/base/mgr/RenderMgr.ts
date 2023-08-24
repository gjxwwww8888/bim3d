import BIM from "@/editor/BIM";
import State from "@/editor/framework/state/State";
import { update } from "@tweenjs/tween.js";

export default class RenderMgr implements IMgr {

    private _state:State;

    startUp(): void {
        console.log('render mgr start up')

        this._state = new State();
    }

    dispose(): void {

    }

    render(): void {
        this.renderScene();
        this.updateTween();
        this.updateState();
    }

    private renderScene():void {
        const scenemgr = BIM.MGR.scene;
        const editorRender = scenemgr.editor.render;
        // 渲染编辑器
        if (editorRender) {
            editorRender.render(scenemgr.editor.scene, scenemgr.editor.camera);
            if (scenemgr.idc) {
                scenemgr.idc.changeFace();
                scenemgr.idc.camera.position.copy(scenemgr.editor.camera.position.clone().sub(scenemgr.editor.controls.target));
                scenemgr.idc.camera.updateProjectionMatrix();
                scenemgr.idc.camera.lookAt(scenemgr.editor.scene.position);

                scenemgr.idc.render.render(scenemgr.idc.scene, scenemgr.idc.camera);
            }

        }
        if (scenemgr.editor.css2dRender) {
            scenemgr.editor.css2dRender.render(scenemgr.editor.scene, scenemgr.editor.camera);
        }
        // 渲染示例
        if (scenemgr.example.render) {
            scenemgr.example.render.render(scenemgr.example.scene, scenemgr.example.camera);
        }
        // 更新
        scenemgr.update();
    }


    private updateTween(): void {
        // 防止 TWEEN.js未加载完成导致报错
        try {
            update(undefined);
        }
        catch (error) {
            console.log("Tween.js update error!")
        }
    }

    private updateState():void {
        let render3d = BIM.MGR.scene.editor.render;
        if (render3d) {
            let stateData = this._state.update();
            let data = {
                geometries: render3d.info.memory.geometries,
                textures: render3d.info.memory.textures,
                triangles: render3d.info.render.triangles,
                points: render3d.info.render.points,
                lines: render3d.info.render.lines,
                fps: stateData[1],
                ms: stateData[0],
                mb: stateData[2]
            }

            BIM.ED.event(BIMEvent.RENDER_UPDATE, [data])
        }
    }
}