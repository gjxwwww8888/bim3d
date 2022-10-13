import { Vector2, Vector3 } from "three";

/**
 * 
 */
export default class MathUtils {

    /**
     * 获取过 点point 垂直于 s-e 的点
     * @param start 
     * @param end 
     * @param point 
     * @returns 
     */
    static getProjectVector(start: Vector3, end: Vector3, point: Vector3): Vector3 {
        let AB = end.clone().sub(start.clone());
        let AP = point.clone().sub(start.clone());
        let PN = AP.projectOnVector(AB);
        let PP = start.clone().add(PN);
        return PP;
    }

    /**
     * 获取极值数组
     * @param arr 
     * @returns 
     */
     static getExtremum(arr: any[]): number[] {
        let minx = Infinity;
        let miny = Infinity;
        let maxx = -Infinity;
        let maxy = -Infinity;
        let fn: any;
        for (let i = 0; i < arr.length; i++) {
            fn = arr[i];
            if (fn.x < minx) {
                minx = fn.x;
            }
            if (fn.x > maxx) {
                maxx = fn.x;
            }
            if (fn.y < miny) {
                miny = fn.y;
            }
            if (fn.y > maxy) {
                maxy = fn.y;
            }
        }
        return [minx, miny, maxx, maxy, maxx - minx, maxy - miny];
    }

    /**
     * 偏移
     * @param arr 
     * @param arr2 
     * @param arr3 
     */
     static getJsonOffset(arr: Vector2[], arr2: number[], arr3: number[]): void {
        for (let i = 0; i < arr.length; i++) {
            arr[i].x -= arr2[0];
            arr[i].y -= arr2[1];
        }
        if (arr3[0] > arr2[0]) {
            arr3[0] = arr2[0];
        }
        if (arr3[2] > arr2[1]) {
            arr3[2] = arr2[1];
        }
        if (arr3[1] < arr2[2]) {
            arr3[1] = arr2[2];
        }
        if (arr3[3] < arr2[3]) {
            arr3[3] = arr2[3];
        }
    }
}