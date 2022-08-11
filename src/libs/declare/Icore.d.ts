interface ICadService {

}

interface ISchemeService {
    
}

interface ISceneSrevice {
    mountedMainScene():void;
}

interface IMeshService {
    
}

interface IDispose {
    dispose():void;
}

/** 启动 */
interface IStartUp {
    /** 启动 */
    startUp(): void;
}

interface IMgr extends IStartUp, IDispose{

}
