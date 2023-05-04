interface ICadService {
    testCad():void;
}

interface ISchemeService {
    
}

interface ISceneSrevice {
    mountedMainScene():void;

    mountedPanel():void;

    mountedExampleScene():void;

    mountedIdcScene():void;

    grideShow(visible:boolean):void;
}

interface IMeshService {
<<<<<<< HEAD
    
=======
    /** 绘制 */
    drawMeshByType(mode): void;
    /** 退出绘制 */
    exitDrawMesh(mode: any): void;
    /**  根据uuid获取模型 */
    getMeshFormId(uuid: string);
>>>>>>> 7c96a0381e5f920f71988fd1ff58d33c29c437d3
}

interface IDispose {
    dispose():void;
}

/** 启动 */
interface IStartUp {
    /** 启动 */
    startUp(): void;
}

interface IExit  extends IDispose{
    /** 退出 */
    exit():void;
}

interface IMgr extends IStartUp, IDispose{

}

interface IPlugin extends IStartUp, IExit {

}
<<<<<<< HEAD
=======


interface IStatePanel {
    geometries: number,
    textures: number,
    triangles: number,
    points: number,
    lines: number,
    fps: number | string[],
    ms: number | string[],
    mb: number | string[]
}
>>>>>>> 7c96a0381e5f920f71988fd1ff58d33c29c437d3
