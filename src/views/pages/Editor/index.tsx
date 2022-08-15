import BIM from '@/editor/BIM';
import React from 'react'


class Editor extends React.Component{

    container = React.createRef<HTMLDivElement>();

    componentDidMount(): void {
        console.log("editor mount")
      
        if(this.container) {
            BIM.container = this.container.current;
            BIM.SC.scene.mountedMainScene();
        }
    }

    componentWillUnmount(): void {
        console.log("editor unmount")
        // BIM.exit();
    }
    
    render(): React.ReactNode {
        return (
            <>
                <div id='bim' ref={this.container}></div>
            </>
        )
    }
}

export default Editor