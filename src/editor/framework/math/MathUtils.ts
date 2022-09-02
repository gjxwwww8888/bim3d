import { Vector3 } from "three";

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
}