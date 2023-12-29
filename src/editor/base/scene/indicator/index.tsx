import BIM from "@/editor/BIM";
import { AmbientLight, BoxGeometry, DisplayP3ColorSpace, Mesh, MeshBasicMaterial, OrthographicCamera, Raycaster, Scene, SphereGeometry, SRGBColorSpace, sRGBEncoding, Vector2, WebGLRenderer } from "three";
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

    private _pointer:Vector2;

    private _raycaster: Raycaster;

    private INTERSECTED: any;

    private _faceIndex: number;

    get render(): WebGLRenderer {
        return this._glrender;
    }

    get camera():OrthographicCamera {
        return this._camera;
    }

    get scene():Scene {
        return this._scene;
    }

    constructor(){
        
        this._viewHeight = 100;
        this._viewWidth = 100;

        this._faceIndex = -1;
        this._raycaster = new Raycaster();
        // scene
        this._scene = new Scene();
        
        // camera
        const frustumSize:number = 10;
        const aspect = this._viewWidth/this._viewHeight;
        this._camera = new OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect /2, frustumSize/2, frustumSize/-2, 0.1, 1000);

        // light
        let amblight = new AmbientLight(0x000000);
        this._scene.add(amblight);

        // idc
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
        this._glrender.outputColorSpace = SRGBColorSpace;


    }

    private loadIdcImage() {
        const boxcolor = ColorDef.IDC_PLANE_COLOR;

        // let right = LoadUtils.getImageUrl('idc/idc_right.jpg');
        // let left =  LoadUtils.getImageUrl('idc/idc_left.jpg');
        // let top =  LoadUtils.getImageUrl('idc/idc_top.jpg');
        // let bottom =  LoadUtils.getImageUrl('idc/idc_bottom.jpg');
        // let front =  LoadUtils.getImageUrl('idc/idc_front.jpg');
        // let back =  LoadUtils.getImageUrl('idc/idc_back.jpg');

        // let texture = new TextureLoader();
        // let rightTexture = texture.load(right);
        // let leftTexture = texture.load(left);
        // let topTexture = texture.load(top);
        // let bottomTexture = texture.load(bottom);
        // let frontTexture = texture.load(front);
        // let backTexture = texture.load(back);
        // let rightMaterial = new MeshBasicMaterial({ color: boxcolor, map: rightTexture });
        // let leftMaterial = new MeshBasicMaterial({ color: boxcolor, map: leftTexture });
        // let topMaterial = new MeshBasicMaterial({ color: boxcolor, map: topTexture });
        // let bottomMaterial = new MeshBasicMaterial({ color: boxcolor, map: bottomTexture });
        // let frontMaterial = new MeshBasicMaterial({ color: boxcolor, map: frontTexture });
        // let backMaterial = new MeshBasicMaterial({ color: boxcolor, map: backTexture });
        // let materials = [rightMaterial, leftMaterial, topMaterial, bottomMaterial, frontMaterial, backMaterial];

        const len:number = 5;
        let geometry = new BoxGeometry(len, len, len);
        const box = new Mesh(geometry, new MeshBasicMaterial({color:boxcolor}));
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
            const material = new MeshBasicMaterial({ color: ColorDef.IDC_LINE_COLOR });
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

    addEvent():void {
        BIM.idc.addEventListener('pointermove',(e)=>this.onPointerMove(e));
        BIM.idc.addEventListener('pointerout',(e)=>this.onPointerOut(e));
        BIM.idc.addEventListener('pointerdown',(e)=>this.onPointerDown(e));
    }

    removeEvent():void {

    }
    
    dispose(): void {
        
    }

    private onPointerMove(e:MouseEvent):void {
        if (!this._pointer) {
            this._pointer = new Vector2();
        }
        this._pointer.x = (e.offsetX / this._viewWidth) * 2 - 1;
        this._pointer.y = - (e.offsetY / this._viewHeight) * 2 + 1;
    }

    private onPointerOut(e:MouseEvent):void {
        this.clearColor();
        this._pointer = null;
    }

    private onPointerDown(e:MouseEvent):void {
       
        if (!this._pointer) {
            this._pointer = new Vector2();
        }
        this._pointer.x = (e.offsetX / this._viewWidth) * 2 - 1;
        this._pointer.y = - (e.offsetY / this._viewHeight) * 2 + 1;
        this._raycaster.setFromCamera(this._pointer, this._camera);
        const intersects = this._raycaster.intersectObjects(this._scene.children, true);
        if (intersects.length > 0) {
            let faceIndex: number = -1;
            if ((intersects[0].object as Mesh).geometry instanceof SphereGeometry) {
                faceIndex = Number((intersects[0].object as Mesh).name);
            }
            else if ((intersects[0].object as Mesh).geometry instanceof BoxGeometry) {
                faceIndex = intersects[0].face.materialIndex;
            }
            else if ((intersects[0].object as Mesh) instanceof Line2) {
                faceIndex = Number((intersects[0].object as Mesh).name);
            }

            if (faceIndex != -1) {
                BIM.ED.event(BIMEvent.IDC_POINTER_DOWN, faceIndex);
            }

        }
    }

    changeFace(): void {
        if (this._pointer && this._raycaster && this._camera) {
            this.clearColor();
            this._raycaster.setFromCamera(this._pointer, this._camera);
            const intersects = this._raycaster.intersectObjects(this._scene.children, true);
            if (intersects.length > 0) {
                if ((intersects[0].object as Mesh) instanceof Line2) {
                    this.INTERSECTED = intersects[0].object;
                    this.INTERSECTED.material.color.set(ColorDef.IDC_SELECT_COLOR);
                }
                else if ((intersects[0].object as Mesh).geometry instanceof SphereGeometry) {
                    this._faceIndex = -1;
                    this.INTERSECTED = intersects[0].object;
                    this.INTERSECTED.material.color.set(ColorDef.IDC_SELECT_COLOR);
                }
                else if (intersects[0].face.materialIndex != this._faceIndex) {
                    this._faceIndex = intersects[0].face.materialIndex;
                    this.INTERSECTED = intersects[0].object;
                    if (this.INTERSECTED.material[this._faceIndex]) {
                        this.INTERSECTED.material[this._faceIndex].color.set(ColorDef.IDC_SELECT_COLOR);
                    }
                }
            }
            else {

                this.INTERSECTED = null;
            }
        }
    }

    private clearColor(): void {
        if (this.INTERSECTED) {
            if (this.INTERSECTED.geometry instanceof BoxGeometry && this._faceIndex != -1) {
                if (this.INTERSECTED.material[this._faceIndex]) this.INTERSECTED.material[this._faceIndex].color.set(ColorDef.IDC_PLANE_COLOR);
                this._faceIndex = -1;
            }
            else if (this.INTERSECTED.geometry instanceof SphereGeometry) {
                this.INTERSECTED.material.color.set(ColorDef.IDC_LINE_COLOR);
            }
            else if (this.INTERSECTED instanceof Line2) {
                this.INTERSECTED.material.color.set(ColorDef.IDC_LINE_COLOR);
            }
        }
    }

    
}