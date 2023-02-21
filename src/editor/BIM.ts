import Imgr from "./base/mgr";
import ServiceContainer from "./base/server/ServiceContainer";
import { EventDispatcher } from "./framework/event/EventDispatcher";
import { KeyBoardManager } from "./framework/event/KeyBoardManager";
import Service from "./service";
import fontjson from '../assets/json/song_regular.json'
/**
 * 3D 编辑器总控类
 */
export default class BIM {

    /** 当前控制模式 */
    static mode: number;
    /** 3D编辑器主容器 */
    static container: any;
    /** 示例容器 */
    static example:any;
    /** UI主容器 */
    static uicontainer:any;
    /** idc容器 */
    static idc:any;
    /** 管理 */
    static readonly MGR: Imgr = new Imgr();
    /** 全局服务容器 */
    static readonly SC: ServiceContainer = new ServiceContainer();
    /** 全局事件派发 */
    static readonly ED: EventDispatcher = new EventDispatcher();

    static fontJson:any = fontjson;

   static startUp(): void {
        console.log('BIM start up.')
        // 初始化服务
        Service.init();
        // 初始化键盘管理
        KeyBoardManager.init();
        // 启动管理器
        BIM.MGR.startUp();
        // 添加窗口尺寸变化监听
        window.addEventListener('resize', () => this.onWindowResize());
        // 启动帧循环
        this.startRenderLoop();
    }

    static exit(): void {
        console.log('BIM exit. start dispose 3d data...')
        // TODO：销毁3d所有数据
        Service.dispose();
    }

    static startRenderLoop(): void {
        // 渲染
        BIM.MGR.render.render();
        // 动画帧
        requestAnimationFrame(() => this.startRenderLoop());
    }

    /** 窗口尺寸变化 */
    static onWindowResize(): void {
        console.log('windows resize');
        BIM.MGR.scene.onResize();
    }


}