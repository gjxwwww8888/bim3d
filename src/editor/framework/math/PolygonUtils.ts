import { Vector2, Vector3 } from "three";
import { lineString, point, polygon } from '@turf/helpers';
import lineIntersect from '@turf/line-intersect';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
import booleanPointOnLine from '@turf/boolean-point-on-line'

export default class PolygonUtils {

    /**
     * 点是否在多边形内
     * @param po 
     * @param polyg 
     * @returns 
     */
    static pointInPolygon(po: Vector3 | Vector2, polyg: Vector3[] | Vector2[]): boolean {
        let pt = point([po.x, po.y]);
        let posV: number[][] = [];
        for (let j = 0; j < polyg.length; j++) {
            posV.push([polyg[j].x, polyg[j].y]);
        }
        posV.push([polyg[0].x, polyg[0].y])
        let poly = polygon([posV]);
        return booleanPointInPolygon(pt, poly);
    }

    /**
     * 点在图形的第几条边上
     * @param po 
     * @param polyg 
     * @returns 
     */
    static pointInLineIndex(po: number[], polyg: Vector3[]): number {
        let pt = point([parseInt(po[0] + ''), parseInt(po[1] + '')]);
        let line: any;
        for (let j = 0; j < polyg.length - 1; j++) {
            line = lineString([[parseInt(polyg[j].x + ''), parseInt(polyg[j].y + '')], [parseInt(polyg[j + 1].x + ''), parseInt(polyg[j + 1].y + '')]]);
            if (booleanPointOnLine(pt, line)) {
                return j;
            }
        }
        let endidx = polyg.length - 1;
        line = lineString([[parseInt(polyg[endidx].x + ''), parseInt(polyg[endidx].y + '')], [parseInt(polyg[0].x + ''), parseInt(polyg[0].y + '')]]);
        if (booleanPointOnLine(pt, line)) {
            return endidx;
        }

        return -1;
    }

    /**
     * 点映射到平面上的点
     * @param points 需要映射的点集
     * @param polygon 必须是个按顺序的多边形
     */
    static pointProjectOnPlane(points: Vector3[], polygon: Vector3[]): Vector3[] {
        let one: Vector3 = polygon[0];
        let two: Vector3 = polygon[1];
        let three: Vector3 = polygon[2];

        let oneDir: Vector3 = one.clone().sub(two);
        let twoDir: Vector3 = three.clone().sub(two);
        // 面法线
        let normal: Vector3 = oneDir.clone().cross(twoDir).normalize();
        // 偏移
        let offset: Vector3 = two.clone().projectOnVector(normal);

        let result: Vector3[] = [];
        for (let point of points) {
            result.push(point.clone().projectOnPlane(normal).add(offset));
        }
        return result;
    }

    /**
     * 获取线段的交点
     * @param path 
     * @param polygon 
     * @returns 
     */
    static getLineIntersect(path: Vector3[] | Vector2[], polygon: Vector3[] | Vector2[]) {

        let line1: any, line2: any;
        let points: any[] = [];
        for (let i = 0; i < path.length; i++) {
            points.push([path[i].x, path[i].y]);
        }
        line1 = lineString(points);

        let posV: number[][] = [];
        for (let j = 0; j < polygon.length; j++) {
            posV.push([polygon[j].x, polygon[j].y]);
        }
        posV.push([polygon[0].x, polygon[0].y])
        line2 = lineString(posV)

        let intersects = lineIntersect(line1, line2);
        return intersects;
    }

    /**
     * 求直线的交点
     * @param a line start
     * @param b line end
     * @param c line start
     * @param d line end
     * @returns 
     */
    static segmentsIntr(a:Vector2, b:Vector2, c:Vector2, d:Vector2):Vector3{  
  
        // 三角形abc 面积的2倍  
        var area_abc = (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x);  
      
        // 三角形abd 面积的2倍  
        var area_abd = (a.x - d.x) * (b.y - d.y) - (a.y - d.y) * (b.x - d.x);   
      
        // 面积符号相同则两点在线段同侧,不相交 (对点在线段上的情况,本例当作不相交处理);  
        // if ( area_abc*area_abd>=0 ) {  
        //     return false;  
        // }  
      
        // 三角形cda 面积的2倍  
        var area_cda = (c.x - a.x) * (d.y - a.y) - (c.y - a.y) * (d.x - a.x);  
        // 三角形cdb 面积的2倍  
        // 注意: 这里有一个小优化.不需要再用公式计算面积,而是通过已知的三个面积加减得出.  
        // var area_cdb = area_cda + area_abc - area_abd ;  
        // if (  area_cda * area_cdb >= 0 ) {  
        //     return false;  
        // }  
      
        //计算交点坐标  
        var t = area_cda / ( area_abd- area_abc );  
        var dx= t*(b.x - a.x),  
            dy= t*(b.y - a.y);  
        return new Vector3(a.x + dx , 0, a.y + dy);  
      
    }  

}