import { ColorDef } from "@/libs/const/enum";
import { AmbientLight, BoxGeometry, Mesh, MeshBasicMaterial, OrthographicCamera, RGBFormat, Scene, SphereGeometry, sRGBEncoding, TextureLoader, WebGLRenderer } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";

/**
 * @description 指示器
 * @author songmy
 */
 export default class IdcScene implements IDispose{

    private _scene:Scene;

    private _camera:OrthographicCamera;

    private _glrender:WebGLRenderer;

    private _viewHeight:number;

    private _viewWidth:number;

    constructor(){
        
        this._viewHeight = 86;
        this._viewWidth = 76;

        // 场景
        this._scene = new Scene();
        
        // 正交相机
        const frustumSize:number = 0.1;
        const aspect = this._viewWidth/this._viewHeight;
        this._camera = new OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect /2, frustumSize/2, frustumSize/-2, 0.1, 1000);

        // 光
        let amblight = new AmbientLight(0x000000);
        this._scene.add(amblight);

        // 指示器
        this.loadIdcImage();

        // render
        this._glrender = new WebGLRenderer({
            precision: "highp", // 着色器精度:高
            antialias: true, // 锯齿
            alpha: true, // canvas是否包含alpha (透明度)
            // logarithmicDepthBuffer: true, //是否使用对数深度缓存
            // preserveDrawingBuffer: true //是否保存绘图缓冲
        });
        // 设置尺寸
        this._glrender.setSize(this._viewWidth, this._viewHeight);
        // 设置设备的物理像素比
        this._glrender.setPixelRatio(window.devicePixelRatio);
        // 是否渲染阴影
        this._glrender.outputEncoding = sRGBEncoding;


    }

    private loadIdcImage() {
        const boxcolor = ColorDef.IDC_PLANE_COLOR;

        let right = require('@/assets/image/idc/idc_right.jpg');
        let left = require('@/assets/image/idc/idc_left.jpg');
        let top = require('@/assets/image/idc/idc_top.jpg');
        let bottom = require('@/assets/image/idc/idc_bottom.jpg');
        let front = require('@/assets/image/idc/idc_front.jpg');
        let back = require('@/assets/image/idc/idc_back.jpg');

        let texture = new TextureLoader();
        let rightTexture = texture.load(right);
        let leftTexture = texture.load(left);
        let topTexture = texture.load(top);
        let bottomTexture = texture.load(bottom);
        let frontTexture = texture.load(front);
        let backTexture = texture.load(back);
        let rightMaterial = new MeshBasicMaterial({ color: boxcolor, map: rightTexture });
        let leftMaterial = new MeshBasicMaterial({ color: boxcolor, map: leftTexture });
        let topMaterial = new MeshBasicMaterial({ color: boxcolor, map: topTexture });
        let bottomMaterial = new MeshBasicMaterial({ color: boxcolor, map: bottomTexture });
        let frontMaterial = new MeshBasicMaterial({ color: boxcolor, map: frontTexture });
        let backMaterial = new MeshBasicMaterial({ color: boxcolor, map: backTexture });
        let materials = [rightMaterial, leftMaterial, topMaterial, bottomMaterial, frontMaterial, backMaterial];

        const len:number = 5;
        let geometry = new BoxGeometry(len, len, len);
        const box = new Mesh(geometry, materials);
        box.position.set(0, 0, 0);
        this._scene.add(box);

        // 创建八个球
        let rad: number = len / 2 + 0.1;
        let pos = [
            rad, rad, rad, // 前右上
            rad, -rad, rad, // 前右下
            -rad, rad, rad, // 前左上
            -rad, -rad, rad, // 前左下
            rad, rad, -rad, // 后右上
            rad, -rad, -rad, // 后右下
            -rad, rad, -rad, // 后左上
            -rad, -rad, -rad // 后左下
        ];
        let count: number = 8;
        for (let i = 0; i < count; i++) {
            const geometry = new SphereGeometry(0.5);
            const material = new MeshBasicMaterial({ color: ColorDef.IDC_LINE_COLOR, format:RGBFormat });
            const sphere = new Mesh(geometry, material);
            sphere.position.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
            let idx = i + 6;
            sphere.name = idx.toString();
            this._scene.add(sphere);
        }

        //添加边
        let edgPos = [
            { start: [-rad, rad, rad], end: [rad, rad, rad] },
            { start: [rad, rad, rad], end: [rad, rad, -rad] },
            { start: [rad, rad, -rad], end: [-rad, rad, -rad] },
            { start: [-rad, rad, -rad], end: [-rad, rad, rad] },
            { start: [-rad, rad, rad], end: [-rad, -rad, rad] },
            { start: [rad, rad, rad], end: [rad, -rad, rad] },
            { start: [rad, rad, -rad], end: [rad, -rad, -rad] },
            { start: [-rad, rad, -rad], end: [-rad, -rad, -rad] },
            { start: [-rad, -rad, rad], end: [rad, -rad, rad] },
            { start: [rad, -rad, rad], end: [rad, -rad, -rad] },
            { start: [rad, -rad, -rad], end: [-rad, -rad, -rad] },
            { start: [-rad, -rad, -rad], end: [-rad, -rad, rad] }
        ]

        for (let i = 0; i < edgPos.length; i++) {
            let data = edgPos[i];
            let pointArr = [data.start[0], data.start[1], data.start[2], data.end[0], data.end[1], data.end[2]]

            let geometry = new LineGeometry();
            geometry.setPositions(pointArr);

            var material = new LineMaterial({
                color: ColorDef.IDC_LINE_COLOR,
                linewidth: 3,
            })
            material.resolution.set(this._viewWidth, this._viewHeight);

            var line = new Line2(geometry, material);
            line.computeLineDistances();
            line.name = (i + 14).toString();

            this._scene.add(line);
        }
    }
    

    dispose(): void {
        
    }
}