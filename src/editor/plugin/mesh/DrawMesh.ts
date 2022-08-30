
/**
 * 绘制模型
 */
export default class DrawMesh implements IPlugin{


    startUp(): void {
        console.log('enter draw mesh')
    }

    exit(): void {
        console.log('exit draw mesh')

        this.dispose();
    }

    dispose(): void {
        
    }
}