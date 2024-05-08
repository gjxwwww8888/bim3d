import BIM from "../BIM";

export default class RenderManager {

    constructor() {
        console.log('render mgr start up')
        BIM.timer.loop(1, this, this.render);
    }

    dispose() {
        BIM.timer.clear(this, this.render);
    }

    render() {
        this.renderScene();
    }

     renderScene() {
        const scenemgr = BIM.MGR.sceneMgr;
        const editorRender = scenemgr.scene._render;
        const controls = scenemgr.scene.trackCtrl;

        // 渲染编辑器
        if (editorRender) {
            editorRender.render(scenemgr.scene.scene, scenemgr.scene.pcamera);
        }
        if (scenemgr.scene._css2dReder) {
            scenemgr.scene._css2dReder.render(scenemgr.scene.scene, scenemgr.scene.pcamera);
        }

        if (controls) {
            controls.update();
        }
    
    }




}