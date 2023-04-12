import ServiceBase from "@/editor/base/server/ServiceBase";
import BIM from "@/editor/BIM";
import DrawMesh from "@/editor/plugin/mesh/DrawMesh";
import { service } from "@/libs/const";

/**
 * @description 模型服务
 * @author songmy
 */
export default class MeshService extends ServiceBase implements IMeshService {

    private _drawMesh: DrawMesh;

    constructor() {
        super(service.MESH_SERVICE);
        this._drawMesh = new DrawMesh();
    }

    protected onDispose(): void {
        if (this._drawMesh) {
            this._drawMesh.dispose();
            this._drawMesh = null;
        }
    }

    protected onInit(): void {
        this.notifyServiceInited();
    }

    drawMeshByType(mode: any): void {
        this._drawMesh.drawMeshByType(mode);
    }

    exitDrawMesh(mode:any):void {
        this._drawMesh.exitDrawMesh(mode);
    }
    
    getMeshFormId(uuid: string) {
        // return BIM.MGR.mesh.getMeshFormId(uuid);
    }

}