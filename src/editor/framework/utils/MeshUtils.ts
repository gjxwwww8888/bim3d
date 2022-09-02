import { BufferGeometry, Color, DoubleSide, Line, LineBasicMaterial, LineLoop, Mesh, MeshBasicMaterial, Object3D, ShapeBufferGeometry, Vector3 } from "three";
import { Font } from "three/examples/jsm/loaders/FontLoader";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";

export default class MeshUtils {
    /**
     * 创建3D字体
     * @param content 内容
     * @param fontJson 字体文件
     * @param ishole 是否有孔
     * @param color 字体颜色
     * @param frontSize 字体大小
     * @returns 
     */
    static createShapeFont(content: string, fontJson: any, ishole: boolean = false, color: any = 0x006699, frontSize: number = 100): Object3D {

        if (!fontJson) {
            return null;
        }
        let font = new Font(fontJson);
        let shapes = font.generateShapes(content, frontSize);

        if (ishole) {

            let matDark = new LineBasicMaterial({
                color: color,
                side: DoubleSide,
            });

            let holeShapes = [];
            for (let i = 0; i < shapes.length; i++) {
                let shape = shapes[i];
                if (shape.holes && shape.holes.length > 0) {
                    for (let j = 0; j < shape.holes.length; j++) {
                        const hole = shape.holes[j];
                        holeShapes.push(hole);
                    }
                }
            }

            shapes.push.apply(shapes, holeShapes);

            let lineText = new Object3D();
            for (let i = 0; i < shapes.length; i++) {
                let shape = shapes[i];

                let points = shape.getPoints();
                let geometry = new BufferGeometry().setFromPoints(points);

                let lineMesh = new Line(geometry, matDark);
                lineText.add(lineMesh);
            }

            return lineText;
        }
        else {
            let matLite = new MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.9,
                side: DoubleSide,
            });

            let geometry = new ShapeBufferGeometry(shapes);
            geometry.computeBoundingBox();

            return new Mesh(geometry, matLite);

        }
    }

    /**
     * 画线
     * @param points 
     * @param color 
     * @param isClose 
     * @returns 
     */
    static drawLine(points: any[], color: number[], isClose: boolean): Line | LineLoop {
        let colors = new Color(color[0] / 255, color[1] / 255, color[2] / 255);
        let material = new LineBasicMaterial({
            color: colors,
            depthWrite: false,
        })
        let geometry = new BufferGeometry().setFromPoints(points);

        let line = isClose ? new LineLoop(geometry, material) : new Line(geometry, material);
        return line;
    }

    /**
     * 创建css样式点
     * @param pos 
     * @param className 
     * @returns 
     */
    static createCss2DPointer(pos: Vector3, className:string): CSS2DObject {

        let div = document.createElement('div');
        div.className = className;

        let label = new CSS2DObject(div);
        label.position.set(pos.x, pos.y, pos.z);

        return label;
    }

    /**
     * 创建css样式Label标签
     * @param text 
     * @param pos 
     * @param className 
     * @returns 
     */
    static createCss2dLabel(text: string, pos: Vector3,className:string): CSS2DObject {
        let div = document.createElement('div');
        div.className = className;
        div.textContent = text;

        let label = new CSS2DObject(div);
        label.position.set(pos.x, pos.y, pos.z);

        return label;
    }

    /**
     * 创建虚线
     * @param positions 
     * @param colors 
     * @param isDashed 
     * @returns 
     */
    static createDashLine(positions:number[], colors:any, isDashed: boolean = false):Line2 {
        const geometry = new LineGeometry();
        geometry.setPositions(positions);

        let matLine = new LineMaterial({
            color: colors,
            linewidth: 3,
            dashed: isDashed,
            depthTest: false,
            dashScale: 2,
            dashSize: 100,
            gapSize: 100,
            dithering: true,
        });

        matLine.resolution.set(window.innerWidth, window.innerHeight);

        let line2 = new Line2(geometry, matLine);
        line2.computeLineDistances();
        line2.scale.set(1, 1, 1);

        return line2;
    }
}