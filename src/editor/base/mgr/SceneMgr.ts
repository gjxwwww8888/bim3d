import BIM from "@/editor/BIM";
import CameraTween from "@/editor/framework/tween/CameraTween";
import { Vector3 } from "three";
import EditorScene from "../scene/EditorScene";
import ExampleScene from "../scene/example";
import IdcScene from "../scene/indicator";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default class SceneMgr implements IMgr{


    private _editor:EditorScene;

    private _example:ExampleScene;

    private _idc:IdcScene;

    private _center:Vector3;

    get center():Vector3 {
        return this._center;
    }

    set center(v:Vector3) {
        this._center.set(v.x, v.y, v.z);
    }

    get editor() {
        return this._editor;
    }

    get example() {
        return this._example;
    }

    get idc() {
        return this._idc;
    }

    startUp(): void {
        console.log('scene mgr start up')    
        this._editor = new EditorScene();
        this._example = new ExampleScene();
        this._idc = new IdcScene();

        this._center = new Vector3(0, 1.5, 0);

        BIM.ED.on(BIMEvent.CAMERA_TARGET_CHANGE, this, this.onCameraTargetChange);
        BIM.ED.on(BIMEvent.IDC_POINTER_DOWN, this, this.onIdcPointerDwon);
        BIM.ED.on(BIMEvent.LEFT_SUB_MENU_MODLE_CLICK, this, this.onLeftSubMenuClcik)
    }

    dispose(): void {
        BIM.ED.off(BIMEvent.IDC_POINTER_DOWN, this, this.onIdcPointerDwon);
        BIM.ED.off(BIMEvent.CAMERA_TARGET_CHANGE, this, this.onCameraTargetChange);
        BIM.ED.off(BIMEvent.LEFT_SUB_MENU_MODLE_CLICK, this, this.onLeftSubMenuClcik)
    }

    onLeftSubMenuClcik(meunitem:string){
        console.log("scene mgr click event:", meunitem);

        let scene = this._editor.scene;
        // // 移除初始的七彩盒子
        // scene.remove(this._editor.box);
        // 测试模型加载
        new GLTFLoader()
        .setPath( 'models/gltf/' )
        .load( 'SheenChair.glb', function ( gltf ) {
            gltf.scene.position.set(3,0,0)
            scene.add( gltf.scene );
        } );

    }

    onResize():void {
        if(this._editor)this._editor.onResize();
    }

    mountedMainScene():void {
        BIM.container.appendChild(this._editor.render.domElement);
        BIM.container.appendChild(this._editor.css2dRender.domElement);
    }

    mountedExampleScene():void {
        BIM.example.appendChild(this._example.render.domElement);
    }

    mountedIdcScene():void {
        BIM.idc.appendChild(this._idc.render.domElement);
        this._idc.addEvent();
    }

    update():void {
        if(this._example)this._example.update();
    }

    onCameraTargetChange(center: Vector3):void {
        this._editor.sightShow(center != null);
        this._editor.sightPos(center);
    }

    onIdcPointerDwon(index:number, dis:number = 10):void {
        console.log("点击了面：", index);
        this._editor.camera.up.set(0, 1, 0);
        let newC: Vector3 = new Vector3();
        let EPS = 0.001;

        let newT: Vector3 = new Vector3(this._center.x, this._center.y, this._center.z);

        switch (index) {
            case IdcDef.RIGHT:
                newC.set(dis, 0, 0);
                break;
            case IdcDef.LEFT:
                newC.set(-dis, 0, 0);
                break;
            case IdcDef.TOP:
                newC.set(0, dis, EPS);
                break;
            case IdcDef.BOTTOM:
                newC.set(0, -dis, EPS);
                break;
            case IdcDef.FRONT:
                newC.set(0, 0, dis);
                break;
            case IdcDef.BACK:
                newC.set(0, 0, -dis);
                break;
            case IdcDef.FRONT_RIGHT_TOP:
                newC.set(dis / 2, dis * Math.sqrt(2), dis / 2);
                break;
            case IdcDef.FRONT_RIGHT_BOTTOM:
                newC.set(dis / 2, -dis * Math.sqrt(2), dis / 2);
                break;
            case IdcDef.FRONT_LEFT_TOP:
                newC.set(-dis / 2, dis * Math.sqrt(2), dis / 2);
                break;
            case IdcDef.FRONT_LEFT_BOTTOM:
                newC.set(-dis / 2, -dis * Math.sqrt(2), dis / 2);
                break;
            case IdcDef.BACK_RIGHT_TOP:
                newC.set(dis / 2, dis * Math.sqrt(2), -dis / 2);
                break;
            case IdcDef.BACK_RIGHT_BOTTOM:
                newC.set(dis / 2, -dis * Math.sqrt(2), -dis / 2);
                break;
            case IdcDef.BACK_LEFT_TOP:
                newC.set(-dis / 2, dis * Math.sqrt(2), -dis / 2);
                break;
            case IdcDef.BACK_LFET_BORROM:
                newC.set(-dis / 2, -dis * Math.sqrt(2), -dis / 2);
                break;
            case IdcDef.EDGE_TOP_FRONE:
                newC.set(0, dis / 2 * Math.sqrt(2), dis / 2 * Math.sqrt(2));
                break;
            case IdcDef.EDGE_TOP_RIGHT:
                newC.set(dis / 2 * Math.sqrt(2), dis / 2 * Math.sqrt(2), 0);
                break;
            case IdcDef.EDGE_TOP_BACK:
                newC.set(0, dis / 2 * Math.sqrt(2), -dis / 2 * Math.sqrt(2));
                break;
            case IdcDef.EDGE_TOP_LEFT:
                newC.set(dis / 2 * Math.sqrt(2), dis / 2 * Math.sqrt(2), 0);
                break;
            case IdcDef.EDGE_MF_LEFT:
                newC.set(-dis / 2 * Math.sqrt(2), 0, dis / 2 * Math.sqrt(2));
                break;
            case IdcDef.EDGE_MF_RIGHT:
                newC.set(dis / 2 * Math.sqrt(2), 0, dis / 2 * Math.sqrt(2));
                break;
            case IdcDef.EDGE_MB_RIGHT:
                newC.set(dis / 2 * Math.sqrt(2), 0, -dis / 2 * Math.sqrt(2));
                break;
            case IdcDef.EDGE_MB_LEFT:
                newC.set(-dis / 2 * Math.sqrt(2), 0, -dis / 2 * Math.sqrt(2));
                break;
            case IdcDef.EDGE_BOTTOM_FRONE:
                newC.set(0, -dis / 2 * Math.sqrt(2), dis / 2 * Math.sqrt(2));
                break;
            case IdcDef.EDGE_BOTTOM_RIGHT:
                newC.set(dis / 2 * Math.sqrt(2), -dis / 2 * Math.sqrt(2), 0);
                break;
            case IdcDef.EDGE_BOTTOM_BACK:
                newC.set(0, -dis / 2 * Math.sqrt(2), -dis / 2 * Math.sqrt(2));
                break;
            case IdcDef.EDGE_BOTTOM_LEFT:
                newC.set(-dis / 2 * Math.sqrt(2), -dis / 2 * Math.sqrt(2), 0);
                break;
            default:
                console.error("出现了位置的视角位置")
                break
        }
        let cc = new Vector3(this._center.x, this._center.y, this._center.z);
        newC.add(cc);
        this.showTween(newC, newT, 500, this.complate);

    }

    complate(): void {
        console.log('指示器旋转完毕')
    }

    showTween(newC: Vector3, newT: Vector3, time: number = 1000, callBack?: Function): void {
        CameraTween.animateCamera(this._editor.camera, this._editor.controls, this._editor.camera.position,
            this._editor.controls.target, newC, newT, time, callBack);
    }
}