export const enum service {
    /** cad服务 */
    CAD_SERVICE = 'service.cad',
    /** 方案版本服务 */
    SCHEME_SERVICE = 'service.scheme',
    /** 场景服务 */
    SCENE_SERVICE = 'service.scene',
    /** 建模服务 */
    MESH_SERVICE = 'service.mesh'
}

export const enum TCState {
    NONE = - 1,
    ROTATE,
    ZOOM,
    PAN,
    TOUCH_ROTATE,
    TOUCH_ZOOM_PAN
}


export const enum ColorDef {
    /** 背景： 纯色（深色）*/
    COLOR_PIURITY_DEPTH = 0x333333,
    /** 背景： 纯色（浅色）*/
    COLOR_PIURITY_LIGHT = 0xd2d3d6,
}


export const enum UIEvent {
    /** 点击左侧菜单栏 */
    LEFT_MENU_ITEM_CLICK = 'left-menu-item-click',
}

export const enum CurMode {
    /** 默认：透视 */
    SPECT,
    /** 漫游模式 */
    ROMA,
    /** 模型绘制 2D正交*/
    DRAW,
    /** 测量模式 */
    RULER,
    /** 移动模式 */
    MOVE,
    /** 旋转模式 */
    ROTATE,
    /** 缩放模式 */
    SCALE,


}