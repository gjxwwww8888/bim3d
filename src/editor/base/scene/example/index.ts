import { BoxGeometry, BufferAttribute, DirectionalLight, DoubleSide, Float32BufferAttribute, HemisphereLight, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, sRGBEncoding, Vector3, WebGLRenderer } from "three";

export default class ExampleScene {

    /** 场景 */
    private _scene: Scene;
    /** 摄像机:透视 */
    private _pcamera: PerspectiveCamera;
    /** 渲染 */
    private _render: WebGLRenderer;

    private _viewWidth: number;
    private _viewHeight: number;

    private _box: Mesh;

    get box() {
        return this._box;
    }

    get scene(): Scene {
        return this._scene;
    }

    get camera(): any {
        return this._pcamera;
    }

    get render(): WebGLRenderer {
        return this._render;
    }

    constructor() {
        this._viewWidth = window.innerWidth;
        this._viewHeight = window.innerHeight;

        this.createScene();
        this.createPCamera();
        this.createLight();
        this.addBox();
        this.createRender();
    }

    private createScene(): void {
        this._scene = new Scene();
        // this._scene.background = new Color(0xfff)

    }

    private addBox(): void {
        let box = new BoxGeometry(5, 5, 5);
        let mat = new MeshPhongMaterial({
            vertexColors: true
        });
        const colors = ((box.getAttribute('position') as any).array).slice();
        for (let i = 0, l = colors.length; i < l; i++) {

            if (colors[i] > 0) colors[i] = 0.5;
            else colors[i] = 0;

        }

        box.setAttribute('color', new BufferAttribute(colors, 3, false));

        this._box = new Mesh(box, mat);
        this._scene.add(this._box);
    }

    private createPCamera(): void {
        this._pcamera = new PerspectiveCamera(60, this._viewWidth / this._viewHeight, 0.01, 1000);
        this._pcamera.position.set(10, 10, 10);
        this._pcamera.lookAt(new Vector3(0, 0, 0));
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

    private createRender(): void {
        this._render = new WebGLRenderer({
            precision: "highp", // 着色器精度:高
            antialias: true, // 锯齿
            alpha: true, // canvas是否包含alpha (透明度)
            // logarithmicDepthBuffer: true, //是否使用对数深度缓存
        });
        // 设置尺寸
        this._render.setSize(this._viewWidth, this._viewHeight);
        // 设置设备的物理像素比
        // this._render.setPixelRatio(window.devicePixelRatio);
        this._render.outputEncoding = sRGBEncoding;
    }


    update(): void {
        if (this._box) {
            this._box.rotation.x += 0.01;
            this._box.rotation.y += 0.01;
            this._box.rotation.z += 0.01;
        }

    }
}