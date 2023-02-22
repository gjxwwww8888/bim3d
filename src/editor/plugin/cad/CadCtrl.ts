import BIM from "@/editor/BIM";
import MathUtils from "@/editor/framework/math/MathUtils";
import MeshUtils from "@/editor/framework/utils/MeshUtils";

import { Color, Group, Vector3 } from "three";
import caddata from '../../../assets/json/basemap.json';
import { CADColors, CADTypes } from "./CadConst";
import CadMgr from "./CadMgr";

export default class CadCtrl implements IDispose{

    private _mgr: CadMgr;

    private _cadWH:number[]

    constructor() {
        this._mgr = new CadMgr();
        this._cadWH = [];
    }

    get cadWH() {
        return this._cadWH;
    }

    set cadWH(val:number[]) {
        this._cadWH = val;
    }

    dispose(): void {
        
    }

    drawCad():void {
        
        this.drawCadMap(caddata);
        // BIM.SC.scene.grideShow(false);
    }

    private drawCadMap(data: any): void {

        this._mgr.datas = data;
        this._mgr.layers = new Map();
        this._mgr.block = [];


        let extr: number[] = [];
        let infinitys: number[] = [Infinity, -Infinity, Infinity, -Infinity];

        let entities = data.entities;
        this.decodeEntity(entities, extr, infinitys);

       
        this.cadWH = [Math.abs(infinitys[1] - infinitys[0]), Math.abs(infinitys[3] - infinitys[2])];

        let center = new Vector3((infinitys[0] + (infinitys[1] - infinitys[0]) / 2), 100, infinitys[2] + (infinitys[3] - infinitys[2]) / 2);
        this.changeCamePos(center);
    }

    private changeCamePos(center: Vector3): void {
       
        let layerData = [];
        for (let [key, value] of this._mgr.layers) {

            BIM.MGR.scene.editor.scene.add(value[1]);
            layerData.push({ name: key, color: value[0] });
        }
        BIM.MGR.scene.center = center;
        BIM.MGR.scene.editor.controls.target = center.clone();
        BIM.MGR.scene.onIdcPointerDwon(IdcDef.TOP);
      
      
    }

 

    private sliceMiltText(text: string, linec: number, strAry: string[]): void {
        let tag: number = 0;
        let zhong: RegExp = /[^/u4e00/-/u9fa5]/;
        let estr: string = '';
        for (let i = 0; i < text.length; i++) {


            if (zhong.test(text[i])) {
                tag++;
            }
            else {
                tag += 0.5;
            }

            if (tag >= linec || i >= text.length - 1) {
                estr += text[i];
                strAry.push(estr);

                tag = 0;
                estr = '';
            }
            else {
                estr += text[i];
            }
        }
    }

    private decodeEntity(entities: any, extr: number[], infinitys: number[], scale = 1000): void {

        for (let i = 0; i < entities.length; i++) {
            let obj = entities[i];

            let value = this._mgr.layers.get(obj.layer);
            if (!value) {
                let group = new Group();
                let color = [];
                this._mgr.layers.set(obj.layer, [color, group]);
            }
            value = this._mgr.layers.get(obj.layer);

            if (obj.type == CADTypes.DWG_TYPE_TEXT) {
                let color = CADColors[obj.color];
                let coolorOx = new Color(color[0] / 255, color[1] / 255, color[2] / 255);
                let pmesh = MeshUtils.createShapeFont(obj.text, BIM.fontJson, false, coolorOx, obj.height/scale);
                if (!pmesh) {
                    continue;
                }
                pmesh.rotation.z = Math.PI / 180 * obj.angle;
                pmesh.rotation.x = -Math.PI / 2;

                let pos = [obj.pts[0][0], -obj.pts[0][1]];
                pmesh.position.set(pos[0]/scale, 0, pos[1]/scale);

                value[0] = color;
                value[1].add(pmesh);

               
            }
            else if (obj.type == CADTypes.DWG_TYPE_MTEXT) {

                let text: string = obj.text;


                if (!text) {
                    return;
                }
                let color = CADColors[obj.color];
                let coolorOx = new Color(color[0] / 255, color[1] / 255, color[2] / 255);

                let rectwid = obj.rectWidth/scale;
                let hg = obj.height/scale;
                let linec = Math.round(rectwid / hg);

                let strAry: string[] = [];
                let index = text.indexOf('\\P');
                if (index != -1) {
                    let resAry = text.split('\\P');
                    for (let i = 0; i < resAry.length; i++) {
                        if (resAry[i].length > 0) {
                            this.sliceMiltText(resAry[i], linec, strAry);
                        }
                    }
                }
                else {
                    if (text.length > 0) {
                        this.sliceMiltText(text, linec, strAry);
                    }
                }


                let mt: Group = new Group();
                if (strAry.length > 0) {
                    for (let i = 0; i < strAry.length; i++) {
                        let result = strAry[i];
                        let pmesh = MeshUtils.createShapeFont(result, BIM.fontJson, false, coolorOx, (obj.height/scale));
                        if (pmesh) {

                            pmesh.rotation.x = -Math.PI / 2;
                            let pos = [(obj.pts[0][0]), -(obj.pts[0][1] - obj.height * i)];
                            pmesh.position.set(pos[0]/scale, 0, pos[1]/scale);

                            mt.add(pmesh);
                        }
                    }
                }

                value[0] = color;
                value[1].add(mt);
            }
            else if (obj.type == CADTypes.DWG_TYPE_INSERT) {
                
            }
            else if (obj.type == CADTypes.DWG_TYPE_ATTDEF) {

            }
            else if (obj.type == CADTypes.DWG_TYPE_LINE ||
                obj.type == CADTypes.DWG_TYPE_LWPOLYLINE ||
                obj.type == CADTypes.DWG_TYPE_CIRCLE ||
                obj.type == CADTypes.DWG_TYPE_ARC) {
                let color = CADColors[obj.color];
                let pos = obj.pts;
                let points = [];
                let posd = []
                for (let j = 0; j < pos.length; j++) {
                    points.push(new Vector3(pos[j][0]/scale, -pos[j][1]/scale, 0));
                    posd.push(new Vector3(pos[j][0]/scale, 0, -pos[j][1]/scale));
                }
                extr = MathUtils.getExtremum(points);
                MathUtils.getJsonOffset(points, extr, infinitys);
                let isclose: boolean = obj.closed == 1;
                let line = MeshUtils.drawLine(posd, color, isclose);
                value[0] = color;
                value[1].add(line);
            }
            else {
                console.warn("遇到未纳入解析的cad类型：", obj.type);
            }
        }


    }
}