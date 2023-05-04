import ModelMesh from "@/editor/domain/model/ModelMesh";
import KY3D from "@/editor/KY3D";
import { CurMode, DrawType, MColor, SceneEvent } from "@/libs/const/enum";
import { Raycaster, Vector2, Vector3 } from "three";

export default class DrawPillar implements IPlugin {


    private _raycaster: Raycaster;

    private _curPillar: ModelMesh;

    private _pointer: Vector2;


    startUp(): void {
        console.log('enter draw pillar');
        // 进入绘制模式
        KY3D.MGR.scene.changeViewMode(CurMode.DRAW);
        this.initData();
        this.addEvent();
    }

    exit(): void {
        console.log('exit draw pillar');

        this.removeCurMesh();
        this.removeEvent();
        this.dispose();
        KY3D.draw = -1;
        KY3D.MGR.scene.changeViewMode(CurMode.SPECT);

    }

    dispose(): void {
        this._raycaster = null;
        this._pointer = null;
        this._curPillar = null;
    }


    private initData(): void {
        this._raycaster = new Raycaster();
        this._pointer = new Vector2();
    }

    private addEvent(): void {
        KY3D.ED.on(SceneEvent.HUD_POINTE_DOWN, this, this.onPointerDown);
        KY3D.ED.on(SceneEvent.HUD_POINTE_MOVE, this, this.onPointerMove);
    }

    private removeEvent(): void {
        KY3D.ED.off(SceneEvent.HUD_POINTE_DOWN, this, this.onPointerDown);
        KY3D.ED.off(SceneEvent.HUD_POINTE_MOVE, this, this.onPointerMove);
    }

    private removeCurMesh(): void {
        if (this._curPillar) {
            KY3D.MGR.mesh.removeModelMesh(this._curPillar.uuid);
            this._curPillar = null;
        }
    }

    private getIntersects(offsetx: number, offsety: number) {
        let hudScene = KY3D.MGR.scene.hud;
        let mainScene = KY3D.MGR.scene.main;
        this._pointer.x = (offsetx / hudScene.viewWidth) * 2 - 1;
        this._pointer.y = -(offsety / hudScene.viewHeight) * 2 + 1;

        this._raycaster.setFromCamera(this._pointer, hudScene.camera);

        let intersets = this._raycaster.intersectObject(mainScene.plane, true);

        if (intersets && intersets.length > 0) {
            return intersets[0];
        }

        return null;
    }

    private getWallData(pos: Vector3): void {

        let wallData = {
            L: 0.3,
            W: 0.3,
            H: 2.9,
            ldir: [1, 0, 0],
            hdir: [0, 1, 0],
            wdir: [0, 0, 1]
        };

        if (!this._curPillar) {
            this._curPillar = KY3D.MGR.mesh.getModelMeshByType(DrawType.pillar, wallData, '', MColor.PILLAR_COLOR);
            this._curPillar.position.set(pos.x, 0, pos.z);
            KY3D.MGR.mesh.addModelMesh([this._curPillar]);
        }
        else {
            this._curPillar = KY3D.MGR.mesh.getModelMeshByType(DrawType.pillar, wallData, this._curPillar.uuid, MColor.PILLAR_COLOR);
            this._curPillar.position.set(pos.x, 0, pos.z);
        }
    }

    private onPointerDown(evt: PointerEvent): void {

        let interset = this.getIntersects(evt.offsetX, evt.offsetY);
        if (!interset) return;
        let point: Vector3 = interset.point;

        // 有起始点，说明point是终点
        this.getWallData( point);
        this._curPillar = null;
    }

    private onPointerMove(evt: PointerEvent): void {

        let interset = this.getIntersects(evt.offsetX, evt.offsetY);
        if (!interset) return;

        let point: Vector3 = interset.point;
        point.y = 0;

        this.getWallData(point);
    }

}