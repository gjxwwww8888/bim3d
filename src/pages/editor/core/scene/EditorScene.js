import { BoxGeometry, Color, DirectionalLight, GridHelper, HemisphereLight, Mesh, MeshPhongMaterial, PCFSoftShadowMap, PerspectiveCamera, SRGBColorSpace, Scene, Vector3, WebGLRenderer } from 'three'
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';

export default class EditorScene {


    constructor() {
        this.createScene();
        this.createPCamera();
        this.createLight();

        this.addGrids();
        this.addBox();

        this.createRender();
        this.createCSS2DRender();

        this.createControls();
    }

    addBox() {
        let geo = new BoxGeometry(10, 10, 10);
        let mat = new MeshPhongMaterial({
            color: 0xff0000
        })
        let mesh = new Mesh(geo, mat);
        this.scene.add(mesh);
    }

    addGrids() {
        const size = 1000;
        const divisions = 100;

        const gridHelper = new GridHelper(size, divisions);
        this.scene.add(gridHelper);
    }

    createScene() {
        this.scene = new Scene();
        this.scene.background = new Color(0xddf0e6);
    }

    createPCamera() {
        this.pcamera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        this.pcamera.position.set(-100, 100, 100);
        
    }

    createLight() {
        const hemiLight = new HemisphereLight(0xffffff, 0xcccccc, 3);
        hemiLight.position.set(0, 300, 0);
        this.scene.add(hemiLight);

        const dirLight = new DirectionalLight(0xffffff, 3);
        dirLight.position.set(-200, 400, 400);
        dirLight.castShadow = true;

        dirLight.shadow.mapSize.width = 512; // default
        dirLight.shadow.mapSize.height = 512; // default
        dirLight.shadow.camera.near = 0.5; // default
        dirLight.shadow.camera.far = 1000; // default
        dirLight.shadow.camera.top = 300;
        dirLight.shadow.camera.bottom = - 300;
        dirLight.shadow.camera.left = - 1000;
        dirLight.shadow.camera.right = 1000;
        this.scene.add(dirLight);

    }

    createCSS2DRender() {
        this._css2dReder = new CSS2DRenderer();
        this._css2dReder.setSize(window.innerWidth, window.innerHeight);
        this._css2dReder.domElement.style.position = 'absolute';
        this._css2dReder.domElement.style.top = '0px';
    }

    createRender() {
        this._render = new WebGLRenderer({
            precision: "highp", // 着色器精度:高
            antialias: true, // 锯齿
            alpha: true, // canvas是否包含alpha (透明度)
            logarithmicDepthBuffer: true, //是否使用对数深度缓存
        });
        // 设置尺寸
        this._render.setSize(window.innerWidth, window.innerHeight);
        this._render.shadowMap.enabled = true;
        this._render.shadowMap.type = PCFSoftShadowMap;
        // 设置设备的物理像素比
        this._render.setPixelRatio(window.devicePixelRatio);
        this._render.outputColorSpace = SRGBColorSpace;

        this._composer = new EffectComposer(this._render);
        const pixelRatio = this._render.getPixelRatio();
        const smaaPass = new SMAAPass(window.innerWidth * pixelRatio, window.innerHeight * pixelRatio);
        this._composer.addPass(smaaPass);
    }

    createControls() {
        this.trackCtrl = new OrbitControls(this.pcamera, this._css2dReder.domElement);

        this.trackCtrl.enableDamping = true;
        this.trackCtrl.dampingFactor = 0.05;

        this.trackCtrl.screenSpacePanning = false;

        this.trackCtrl.minDistance = 10;
        this.trackCtrl.maxDistance = 1500;

        this.trackCtrl.target.set(0, 0, 0);
        this.trackCtrl.update();
    }

    onResize() {
        // 渲染
        this._render.setSize(window.innerWidth, window.innerHeight);
        this._css2dReder.setSize(window.innerWidth, window.innerHeight);
        // 透视相机
        if (this.pcamera instanceof PerspectiveCamera) {
            this.pcamera.aspect = window.innerWidth / window.innerHeight;
            this.pcamera.updateProjectionMatrix();
        }
        // 
        this._composer.setSize(window.innerWidth, window.innerHeight);
    }

}