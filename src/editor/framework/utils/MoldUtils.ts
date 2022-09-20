
import { Path, Shape, ShapeGeometry, ShapeUtils, Vector2, Vector3 } from "three";

export default class MoldUtils {

    static getCuboidVI(count: number, vertices: any[], indices: any[], facevec: any[],
        minx: number, maxx: number, miny: number, maxy: number, minz: number, maxz: number, side: boolean = false): number {

        let topface = [
            new Vector3(minx, miny, minz),
            new Vector3(minx, miny, maxz),
            new Vector3(maxx, miny, maxz),
            new Vector3(maxx, miny, minz),
            new Vector3(minx, miny, minz)
        ]

        let bottomface = [
            new Vector3(minx, maxy, minz),
            new Vector3(minx, maxy, maxz),
            new Vector3(maxx, maxy, maxz),
            new Vector3(maxx, maxy, minz),
            new Vector3(minx, maxy, minz)
        ]

        let vi = side ? MoldUtils.getSideVIF(topface, bottomface, count) : MoldUtils.getVIF(topface, bottomface, count);

        vertices.push(...vi[0]);
        indices.push(...vi[1]);
        facevec.push(...vi[2]);
        count = vi[3];

        return count;
    }

    static getSideVIF(bottomVec: Vector3[], topVec: Vector3[], vertexCount: number): any[] {
        let face: Vector3[];

        let faceVec: any[] = [];
        let vertex: any[] = [];
        let index: any[] = [];

        // 侧面
        for (let i = 0; i < bottomVec.length - 1; i++) {
            // 顶点
            vertex.push(topVec[i].x, topVec[i].y, topVec[i].z);
            vertex.push(topVec[i + 1].x, topVec[i + 1].y, topVec[i + 1].z);

            vertex.push(bottomVec[i].x, bottomVec[i].y, bottomVec[i].z);
            vertex.push(bottomVec[i + 1].x, bottomVec[i + 1].y, bottomVec[i + 1].z);
            // 索引
            index.push(vertexCount + i, vertexCount + i + 2, vertexCount + i + 1);
            index.push(vertexCount + i + 2, vertexCount + i + 3, vertexCount + i + 1);
            // 面
            face = [];
            face.push(topVec[i], topVec[i + 1], bottomVec[i + 1], bottomVec[i]);
            faceVec.push(face);

            vertexCount += 3;
        };

        vertexCount += bottomVec.length - 1;

        return [vertex, index, faceVec, vertexCount];
    }

    static getVIF(bottomVec: Vector3[], topVec: Vector3[], vertexCount: number = 0): any[] {

        let face: Vector3[];

        let faceVec: any[] = [];
        let vertex: any[] = [];
        let index: any[] = [];

        // 侧面
        for (let i = 0; i < bottomVec.length - 1; i++) {
            // 顶点
            vertex.push(topVec[i].x, topVec[i].y, topVec[i].z);
            vertex.push(topVec[i + 1].x, topVec[i + 1].y, topVec[i + 1].z);

            vertex.push(bottomVec[i].x, bottomVec[i].y, bottomVec[i].z);
            vertex.push(bottomVec[i + 1].x, bottomVec[i + 1].y, bottomVec[i + 1].z);
            // 索引
            index.push(vertexCount + i, vertexCount + i + 2, vertexCount + i + 1);
            index.push(vertexCount + i + 2, vertexCount + i + 3, vertexCount + i + 1);
            // 面
            face = [];
            face.push(topVec[i], topVec[i + 1], bottomVec[i + 1], bottomVec[i]);
            faceVec.push(face);

            vertexCount += 3;
        }
        // 底面
        vertexCount += 4;

        vertex.push(bottomVec[0].x, bottomVec[0].y, bottomVec[0].z);
        vertex.push(bottomVec[1].x, bottomVec[1].y, bottomVec[1].z);
        vertex.push(bottomVec[3].x, bottomVec[3].y, bottomVec[3].z);
        vertex.push(bottomVec[2].x, bottomVec[2].y, bottomVec[2].z);

        index.push(vertexCount, vertexCount + 2, vertexCount + 1);
        index.push(vertexCount + 2, vertexCount + 3, vertexCount + 1);

        face = [];
        face.push(bottomVec[0], bottomVec[1], bottomVec[2], bottomVec[3]);
        faceVec.push(face);

        vertexCount += 4;
        vertex.push(topVec[0].x, topVec[0].y, topVec[0].z);
        vertex.push(topVec[1].x, topVec[1].y, topVec[1].z);
        vertex.push(topVec[3].x, topVec[3].y, topVec[3].z);
        vertex.push(topVec[2].x, topVec[2].y, topVec[2].z);

        index.push(vertexCount, vertexCount + 1, vertexCount + 2);
        index.push(vertexCount + 2, vertexCount + 1, vertexCount + 3);

        face = [];
        face.push(topVec[0], topVec[1], topVec[2], topVec[3]);
        faceVec.push(face);

        vertexCount += 4;

        return [vertex, index, faceVec, vertexCount];

    }

    static getCylinderVI(count: number, vertices: any[], indices: any[], facevec: any[],
        x: number, y: number, zr: number, miny: number, maxy: number, ir: number = 2, needTop: boolean = false): number {

        // 段数
        let i: number, pot: Vector2, ver: Vector2[];
        let segment: number = 6;

        // 外圈
        let shape = new Shape()
            .moveTo(0, 0)
            .absarc(0, 0, zr / 2, 0, Math.PI * 2, true);

        let shapePoints = shape.extractPoints(segment);

        ver = shapePoints.shape;
        let reverse = !ShapeUtils.isClockWise(ver);
        if (reverse) {
            ver = ver.reverse();
        }

        let topVec: Vector3[] = [];
        let bottomVec: Vector3[] = [];
        for (i = 0; i < ver.length; i++) {
            pot = ver[i];
            topVec.push(new Vector3(pot.x + x, maxy, pot.y + y));
            bottomVec.push(new Vector3(pot.x + x, miny, pot.y + y));
        }

        let side = MoldUtils.getSideVIF(bottomVec, topVec, count);
        vertices.push(...side[0]);
        indices.push(...side[1]);
        facevec.push(...side[2]);
        count = side[3];

        // 内圈
        shape = new Shape()
            .moveTo(0, 0)
            .absarc(0, 0, zr / 2 - ir, 0, Math.PI * 2, true);
        shapePoints = shape.extractPoints(segment);
        ver = shapePoints.shape;
        reverse = !ShapeUtils.isClockWise(ver);

        if (reverse) {
            ver = ver.reverse();
        }

        let itopVec: Vector3[] = [];
        let ibottomVec: Vector3[] = [];
        for (i = 0; i < ver.length; i++) {
            pot = ver[i];
            itopVec.push(new Vector3(pot.x + x, maxy, pot.y + y));
            ibottomVec.push(new Vector3(pot.x + x, miny, pot.y + y));
        }

        side = MoldUtils.getSideVIF(itopVec, ibottomVec, count);
        vertices.push(...side[0]);
        indices.push(...side[1]);
        facevec.push(...side[2]);
        count = side[3];

        // 底面
        side = MoldUtils.getSideVIF(ibottomVec, bottomVec, count);
        vertices.push(...side[0]);
        indices.push(...side[1]);
        facevec.push(...side[2]);
        count = side[3];

        if (needTop) {
            side = MoldUtils.getSideVIF(itopVec, topVec, count);
            vertices.push(...side[0]);
            indices.push(...side[1]);
            facevec.push(...side[2]);
            count = side[3];
        }


        return count;
    }

    static getShapeFaceVI(count: number, vertices: any[], indices: any[], facevec: any[], face: any[],
        posAry: any, idxAry: any, max: number, type: number = 0, reverse: boolean = false): number {
        // 顶点
        let vertex: any[] = []
        let index: any[] = [];

        for (let i = 0; i < posAry.array.length; i += 3) {

            let a = posAry.array[i];
            let b = posAry.array[i + 1];
            let c = posAry.array[i + 2];
            type === 1 ? vertex.push(max, a, b) :
                type === 2 ? vertex.push(a, max, b) :
                    vertex.push(a, b, max);
        }

        // 索引
        for (let i = 0; i < idxAry.array.length; i += 3) {
            let a = idxAry.array[i] + count;
            let b = idxAry.array[i + 1] + count;
            let c = idxAry.array[i + 2] + count;

            index.push(a, b, c);
        }

        reverse ? index.reverse() : null;
        vertices.push(...vertex);
        indices.push(...index);
        facevec.push(face);

        count = Math.max(...indices) + 1;

        return count;
    }

    static getShapeVI(count: number, vertices: any[], indices: any[], facevec: any[], path: Vector2[], holes: Path[],
        type: number, min: number, max: number, reverse: boolean, sidereverse: boolean = false, createtop: boolean = true): number {

        let topface = [];
        let bottomface = [];
        let topvec = [];
        let bottomvec = [];

        let top: Vector3;
        let bottom: Vector3;
        for (let i = 0; i < path.length; i++) {

            top = type === 1 ? new Vector3(max, path[i].x, path[i].y) :
                type === 2 ? new Vector3(path[i].x, max, path[i].y) :
                    new Vector3(path[i].x, path[i].y, max);

            bottom = type === 1 ? new Vector3(min, path[i].x, path[i].y) :
                type === 2 ? new Vector3(path[i].x, min, path[i].y) :
                    new Vector3(path[i].x, path[i].y, min);

            topface.push(top);
            bottomface.push(bottom);
        }

        topvec = sidereverse ? bottomface.concat(bottomface[0].clone()) : topface.concat(topface[0].clone());
        bottomvec = sidereverse ? topface.concat(topface[0].clone()) : bottomface.concat(bottomface[0].clone());

        // 侧边

        let side = MoldUtils.getSideVIF(topvec, bottomvec, count);
        vertices.push(...side[0]);
        indices.push(...side[1]);
        facevec.push(...side[2]);
        count = side[3];

        count = MoldUtils.getXieQieShapeVI(count, vertices, indices, facevec, path, holes, topface, bottomface, type, min, max, reverse, createtop);

        return count;
    }

    static getHoleByDivisions(holes: Path[]): Path[] {
        let divisions = 6;
        let result: Path[] = [];
        for (let hole of holes) {
            result.push(new Path(hole.getPoints(divisions)))
        }
        return result;
    }

    static getXieQieShapeVI(count: number, vertices: any[], indices: any[], facevec: any[], path: Vector2[], holes: Path[], topface: Vector3[], bottomface: Vector3[],
        type: number, min: number, max: number, reverse: boolean, createtop: boolean = true): number {
        // 前后面
        let shape = new Shape().setFromPoints(path);
        // 挖孔
        if (holes && holes.length > 0) {
            let tmpholes = MoldUtils.getHoleByDivisions(holes);
            shape.holes.push(...tmpholes);
        }

        let geometry = new ShapeGeometry(shape);
        let position = geometry.attributes.position;
        let index = geometry.getIndex();


        count = MoldUtils.getShapeFaceVI(count, vertices, indices, facevec, topface, position, index, max, type, reverse);
        if (createtop) {
            count = MoldUtils.getShapeFaceVI(count, vertices, indices, facevec, bottomface, position, index, min, type, !reverse);
        }
        geometry.dispose();


        return count;
    }

    static getSideFace(count: number, vertices: any[], indices: any[], facevec: any[],
        topface: Vector3[], bottomface: Vector3[], reverse: boolean = false): number {

        let topVec = reverse ? bottomface.concat(bottomface[0].clone()) : topface.concat(topface[0].clone());
        let bottomVec = reverse ? topface.concat(topface[0].clone()) : bottomface.concat(bottomface[0].clone());

        // 侧边
        let side = MoldUtils.getSideVIF(topVec, bottomVec, count);
        vertices.push(...side[0]);
        indices.push(...side[1]);
        facevec.push(...side[2]);
        count = side[3];

        return count;
    }

    static getFaceByFunction(count: number, vertices: number[], indices: number[], facevec: Vector3[][],
        face: Vector3[], path: Vector2[], holePath: Path[], fuc: Function): number {

        let shape = new Shape().setFromPoints(path);
        // 挖孔
        if (holePath && holePath.length > 0) {
            shape.holes.push(...holePath);
        }

        let geometry = new ShapeGeometry(shape);
        count = MoldUtils.getFaceByGeometry(count, vertices, indices, facevec, face, geometry, fuc);

        geometry.dispose();

        return count;
    }

    static getFaceByGeometry(count: number, vertices: number[], indices: number[], facevec: Vector3[][],
        face: Vector3[], geometry: any, fuc: Function): number {

        let position = geometry.attributes.position;
        let index = geometry.getIndex();

        let vertex: any[] = []
        let idxAry: any[] = [];

        for (let i = 0; i < position.array.length; i += 3) {

            let a = position.array[i];
            let b = position.array[i + 1];
            let c = position.array[i + 2];
            let xyz = fuc(a, b);
            vertex.push(xyz[0], xyz[1], xyz[2]);
        }

        // 索引
        for (let i = 0; i < index.array.length; i += 3) {
            let a = index.array[i] + count;
            let b = index.array[i + 1] + count;
            let c = index.array[i + 2] + count;

            idxAry.push(a, b, c);
        }

        vertices.push(...vertex);
        indices.push(...idxAry);
        facevec.push(face);

        count = Math.max(...indices) + 1;

        return count;
    }
}