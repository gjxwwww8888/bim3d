import ModelMesh from "@/editor/domain/model/ModelMesh";
import KY3D from "@/editor/KY3D";
import Const from "@/libs/const/const";
import { CurMode, DrawType, MColor, SceneEvent } from "@/libs/const/enum";
import { Raycaster, Vector2, Vector3 } from "three";

export default class DrawBeam implements IPlugin {


    private _raycaster: Raycaster;

    private _curBeam: ModelMesh;

    private _pointer: Vector2;

    private _startPoint: Vector3;

    private _state: number = 0;

    startUp(): void {
        console.log('enter draw beam');
        // 进入绘制模式
        KY3D.MGR.scene.changeViewMode(CurMode.DRAW);
        this.initData();
        this.addEvent();
    }

    exit(): void {
        console.log('exit draw beam');
        
        this.removeCurMesh();
        this.removeEvent();
        this.dispose();
        KY3D.draw = -1;
        KY3D.MGR.scene.changeViewMode(CurMode.SPECT);
       
    }

    dispose(): void {
        this._raycaster = null;
        this._pointer = null;
        this._curBeam = null;
        this._startPoint = null;
        this._state = -1;
    }


    private initData(): void {
        this._raycaster = new Raycaster();
        this._pointer = new Vector2();
        this._startPoint = new Vector3();
        this._state = -1;
    }

    private addEvent(): void {
        KY3D.ED.on(SceneEvent.HUD_POINTE_DOWN, this, this.onPointerDown);
        KY3D.ED.on(SceneEvent.HUD_POINTE_MOVE, this, this.onPointerMove);
    }

    private removeEvent(): void {
        KY3D.ED.off(SceneEvent.HUD_POINTE_DOWN, this, this.onPointerDown);
        KY3D.ED.off(SceneEvent.HUD_POINTE_MOVE, this, this.onPointerMove);
    }

    private removeCurMesh():void {
        if(this._curBeam) {
            KY3D.MGR.mesh.removeModelMesh(this._curBeam.uuid);
            this._curBeam = null;
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

    private getWallData(start: Vector3, end: Vector3): void {

        let dir = end.clone().sub(start).normalize();
        let wdir: Vector3 = dir.clone().cross(Const.normalY).normalize();
        let length: number = end.distanceTo(start);

        let wallData = {
            L: length,
            W: 0.2,
            H: 0.4,
            ldir: [dir.x, dir.y, dir.z],
            hdir: [0, -1, 0],
            wdir: [wdir.x, wdir.y, wdir.z]
        };

        if (!this._curBeam) {
            this._curBeam = KY3D.MGR.mesh.getModelMeshByType(DrawType.beam, wallData, '', MColor.BEAM_COLOR);
            this._curBeam.position.set(start.x, start.y, start.z);
            KY3D.MGR.mesh.addModelMesh([this._curBeam]);
        }
        else {
            this._curBeam = KY3D.MGR.mesh.getModelMeshByType(DrawType.beam, wallData, this._curBeam.uuid, MColor.BEAM_COLOR);
        }
    }

    private onPointerDown(evt: PointerEvent): void {

        let interset = this.getIntersects(evt.offsetX, evt.offsetY);
        if (!interset) return;
        let point: Vector3 = interset.point;
        
        // 有起始点，说明point是终点
        if (this._state === 0) {
            point.y = 2.9
            this.getWallData(this._startPoint, point);
            this._curBeam = null;
            this._state = -1;
            return;
        }

        // 重置为起始点
        this._startPoint.set(point.x, 2.9, point.z);
        // 0 有起始点
        this._state = 0;
    }

    private onPointerMove(evt: PointerEvent): void {

        if (this._state !== 0) return;

        let interset = this.getIntersects(evt.offsetX, evt.offsetY);
        if (!interset) return;

        let point: Vector3 = interset.point;
        point.y = 2.9;

        this.getWallData(this._startPoint, point);
    }

}