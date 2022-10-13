
/**
 * @description cad底图解析
 * @author songmy
 */
export default class CadMgr implements IDispose {

    private _layers: Map<string, any>;

    private _datas: any;

    public block:any[];

    get layers(): Map<string, any> {
        return this._layers;
    }

    set layers(val: any) {
        this._layers = val;
    }

    get datas(): any {
        return this._datas;
    }

    set datas(val: any) {
        this._datas = val;
    }

    resetLayers(): void {
        if (this._layers) {
            this._layers.clear();
            this._layers = null;
        }
        this.block = [];
    }

    dispose(): void {
        this.resetLayers();
        this.datas = null;
    }
}