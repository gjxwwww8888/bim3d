import { EventDispatcher } from "./event/EventDispatcher";
import BIMManager from "./manager/BIMManager";
import { Timer } from "./timer/Timer";

export default class BIM {

	/** 编辑器主容器 */
	static container;

	/** 事件调度 */
	static ED = new EventDispatcher();

	/** 全局管理器 */
	static MGR = new BIMManager();

	static timer = new Timer(false);

	static init() {
		console.log('init BIM framework.')

		this.MGR.init();

		window.addEventListener('resize', () => this.onWindowResize());

		this.startRenderLoop();
	}

	static startRenderLoop() {

        this.timer._update();
        requestAnimationFrame(() => this.startRenderLoop());
    }

	static onWindowResize() {
        console.log('windows resize');
        BIM.MGR.sceneMgr.onResize();
    }

	static exit() {

		this.MGR.dispose();
	}

}