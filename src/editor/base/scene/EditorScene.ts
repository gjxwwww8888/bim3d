import MeshUtils from "@/editor/framework/utils/MeshUtils";
import { BoxGeometry, BufferAttribute, Color, DirectionalLight, GridHelper, HemisphereLight, LineBasicMaterial, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, sRGBEncoding, Vector3, WebGLRenderer } from "three";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import TrackCameraCtrl from "../ctrl/TrackCameraCtrl";


export default class EditorScene {

    /** 场景 */
    private _scene: Scene;
    /** 摄像机:透视 */
    private _pcamera: PerspectiveCamera;
    /** 渲染 */
    private _render: WebGLRenderer;
    /** css2drender */
    private _css2dReder: CSS2DRenderer;
    /** 轨迹球控制器 */
    private _trackCtrl: TrackCameraCtrl;
    /** 当前控制器 */
    private _controls: any;
    /** 当前使用的摄像机 */
    private _camera: any;

    /** 辅助网格 */
    private _grid: GridHelper;

    private _sight:CSS2DObject;

    private _box: Mesh;

    get camera(): any {
        return this._camera;
    }

    get css2dRender(): CSS2DRenderer {
        return this._css2dReder;
    }

    get controls(): any {
        return this._controls;
    }

    get scene(): Scene {
        return this._scene;
    }

    get render(): WebGLRenderer {
        return this._render;
    }

    constructor() {

        this.createScene();
        this.createPCamera();
        this.createLight();
        this.addGrid();

        this.addBox();

        this.addSight();
        this.createRender();
        this.createCSS2DRender();

        this.createControls();
    }

    grideShow(visible: boolean): void{
        this._grid.visible = visible;
    }

    sightShow(visible: boolean): void{
        this._sight.visible = visible;
    }

    sightPos(pos: Vector3): void{
        this._sight.position.copy(pos);
    }

    private createScene(): void {
        this._scene = new Scene();
        this._scene.background = new Color(0x333333)

    }

    private addSight():void {
        this._sight = MeshUtils.createCss2DPointer('sight');
        this._scene.add(this._sight);
        this._sight.visible = false;
    }

    private addBox(): void {
        let box = new BoxGeometry(1, 1, 1);
        let mat = new MeshPhongMaterial({
            vertexColors: true
        })
        const colors = ((box.getAttribute('position') as any).array).slice();
        for (let i = 0, l = colors.length; i < l; i++) {

            if (colors[i] > 0) colors[i] = 0.5;
            else colors[i] = 0;

        }

        box.setAttribute('color', new BufferAttribute(colors, 3, false));
        this._box = new Mesh(box, mat);
        this._box.position.set(0,0.5,0)
        this._scene.add(this._box);
    }

    private createPCamera(): void {
        this._pcamera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
        this._pcamera.position.set(5, 5, 5);
        this._pcamera.lookAt(new Vector3(0, 0, 0));
        this._camera = this._pcamera;
    }

    /** 添加控制器 */
    private createControls(): void {
        this._trackCtrl = new TrackCameraCtrl(this._camera, this._css2dReder.domElement, this._render.domElement);
        this._controls = this._trackCtrl;
    }

    /** 添加光 */
    private createLight(): void {
        // 环境光，全局光照
        const hemiLight = new HemisphereLight(0xffffff, 0x33333, 0.6);
        hemiLight.position.set(0, 200, 0);
        this._scene.add(hemiLight);

        // 添加平行光,用来模拟太阳光
        let dirLight = new DirectionalLight(0xffffff, 0.6);
        dirLight.position.set(0, 100, 100);
        this._scene.add(dirLight);
    }

    private addGrid():void {
        this._grid = new GridHelper(50, 50, 0x222222, 0x111111);
        (this._grid.material as LineBasicMaterial).opacity = 0.6;
        (this._grid.material as LineBasicMaterial).transparent = true;
        this._grid.position.set(0, 0, 0);
        this._scene.add(this._grid);
    }

    createCSS2DRender(): void {
        this._css2dReder = new CSS2DRenderer();
        this._css2dReder.setSize(window.innerWidth, window.innerHeight);
        this._css2dReder.domElement.style.position = 'absolute';
        this._css2dReder.domElement.style.top = '0px';
    }

    private createRender(): void {
        this._render = new WebGLRenderer({
            precision: "highp", // 着色器精度:高
            antialias: true, // 锯齿
            alpha: true, // canvas是否包含alpha (透明度)
            logarithmicDepthBuffer: true, //是否使用对数深度缓存
        });
        // 设置尺寸
        this._render.setSize(window.innerWidth, window.innerHeight);
        // 设置设备的物理像素比
        this._render.setPixelRatio(window.devicePixelRatio);
        this._render.outputEncoding = sRGBEncoding;
    }

    onResize(): void {

        if (this._trackCtrl) {
            this._trackCtrl.screen.width = window.innerWidth;
            this._trackCtrl.screen.height = window.innerHeight;
        }

        // 渲染
        this._render.setSize(window.innerWidth, window.innerHeight);
        this._css2dReder.setSize(window.innerWidth, window.innerHeight);
        // 透视相机
        if (this.camera instanceof PerspectiveCamera) {
            this._camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }
        // else if (this.camera instanceof OrthographicCamera) {
        //     // 正交相机
        //     let aspect = this._viewWidth / this._viewHeight;
        //     this._camera.left = - this.frustumSize * aspect / 2;
        //     this._camera.right = this.frustumSize * aspect / 2;
        //     this._camera.top = this.frustumSize / 2;
        //     this._camera.bottom = - this.frustumSize / 2;
        //     this._camera.updateProjectionMatrix();
        // }
    }


}