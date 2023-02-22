interface ICadService {
    testCad(): void;
}

interface ISchemeService {

}

interface ISceneSrevice {
    mountedMainScene(): void;

    mountedPanel(): void;

    mountedExampleScene(): void;

    mountedIdcScene(): void;

    grideShow(visible: boolean): void;
}

interface IMeshService {

}

interface IDispose {
    dispose(): void;
}

/** 启动 */
interface IStartUp {
    /** 启动 */
    startUp(): void;
}

interface IExit extends IDispose {
    /** 退出 */
    exit(): void;
}

interface IMgr extends IStartUp, IDispose {

}

interface IPlugin extends IStartUp, IExit {

}


interface IStatePanel {
    geometries: number,
    textures: number,
    triangles: number,
    points: number,
    lines: number,
    fps: number|string[],
    ms: number|string[],
    mb: number|string[]
}