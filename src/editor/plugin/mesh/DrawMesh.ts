
import BIM from "@/editor/BIM";
import { DrawType } from "@/libs/const";
import DrawBeam from "./beam/DrawBeam";
import DrawFloor from "./floor/DrawFloor";
import DrawPillar from "./pillar/DrawPillar";
import DrawWall from "./wall/DrawWall";

/**
 * 绘制模型
 * @author songmy
 */
export default class DrawMesh {

    private _drawMap: Map<number, IPlugin>;

    constructor() {
        this._drawMap = new Map();
        // TODO: 这几个沙雕类之后要优化-> 抽同样的方法出来。ps:之后再做优化，前期先保证框架结构+功能稳定。
        this.registerDraw(DrawType.wall, new DrawWall);
        this.registerDraw(DrawType.beam, new DrawBeam);
        this.registerDraw(DrawType.pillar, new DrawPillar);
        this.registerDraw(DrawType.floor, new DrawFloor);
    }

    private registerDraw(mode: number, draw: IPlugin): void {
        
        this._drawMap.set(mode, draw);
    }

    dispose(): void {
        if (this._drawMap) {
            this._drawMap.clear();
            this._drawMap = null;
        }
    }

    drawMeshByType(mode: number): void {
        // 退两次
        if(BIM.draw !== -1 && BIM.draw !== mode){
            this.exitDrawMesh(BIM.draw);
            if(BIM.draw !== -1){
                this.exitDrawMesh(BIM.draw);
            }
        }
        BIM.draw = mode;
        this._drawMap.get(mode)?.startUp();
    }

    exitDrawMesh(mode: number): void {
        this._drawMap.get(mode)?.exit();
    }
}