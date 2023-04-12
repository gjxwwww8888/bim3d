declare const enum service {
    /** cad服务 */
    CAD_SERVICE = 'service.cad',
    /** 方案版本服务 */
    SCHEME_SERVICE = 'service.scheme',
    /** 场景服务 */
    SCENE_SERVICE = 'service.scene',
    /** 建模服务 */
    MESH_SERVICE = 'service.mesh'
}

declare const enum TCState {
    NONE = - 1,
    ROTATE,
    ZOOM,
    PAN,
    TOUCH_ROTATE,
    TOUCH_ZOOM_PAN
}


declare const enum ColorDef {
    /** 背景： 纯色（深色）*/
    COLOR_PIURITY_DEPTH = 0x333333,
    /** 背景： 纯色（浅色）*/
    COLOR_PIURITY_LIGHT = 0xd2d3d6,
    /** 指示器：面颜色 */
    IDC_PLANE_COLOR = 0xd5d8db,
    /** 指示器：边颜色 */
    IDC_LINE_COLOR = 0x545556,
    /** 指示器：选中 */
    IDC_SELECT_COLOR = 0x136ae8,
}




declare const enum CurMode {
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

/** 指示器 */
declare const enum IdcDef {
    // 面   
    RIGHT,
    LEFT,
    TOP,
    BOTTOM,
    FRONT,
    BACK,
    // 顶点
    FRONT_RIGHT_TOP,
    FRONT_RIGHT_BOTTOM,
    FRONT_LEFT_TOP,
    FRONT_LEFT_BOTTOM,
    BACK_RIGHT_TOP,
    BACK_RIGHT_BOTTOM,
    BACK_LEFT_TOP,
    BACK_LFET_BORROM,
    // 边
    EDGE_TOP_FRONE,
    EDGE_TOP_RIGHT,
    EDGE_TOP_BACK,
    EDGE_TOP_LEFT,
    EDGE_MF_LEFT,
    EDGE_MF_RIGHT,
    EDGE_MB_RIGHT,
    EDGE_MB_LEFT,
    EDGE_BOTTOM_FRONE,
    EDGE_BOTTOM_RIGHT,
    EDGE_BOTTOM_BACK,
    EDGE_BOTTOM_LEFT
}


export const enum DrawType {
    /** 墙 */
    wall,
    /** 梁 */
    beam,
    /** 方柱 */
    pillar,
    /** 圆柱 */
    cylinder,
    /** 楼板 */
    floor
}