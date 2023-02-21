import ServiceBase from "@/editor/base/server/ServiceBase";
import CadCtrl from "@/editor/plugin/cad/CadCtrl";

/**
 * @description cad底图服务
 * @author songmy
 */
export default class CadService extends ServiceBase implements ICadService {
    
    private _ctrl: CadCtrl;
    
    constructor() {
        super(service.CAD_SERVICE);
        this._ctrl = new CadCtrl();
    }

    protected onDispose(): void {
        this._ctrl.dispose();
    }

    protected onInit(): void {
        this.notifyServiceInited();
    }

    testCad(): void {
        this._ctrl.drawCad();
    }
   
}