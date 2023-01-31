import BIM from '@/editor/BIM';
import React from 'react';
import Container from './Container';


class Editor extends React.Component {

    container = React.createRef<HTMLDivElement>();

    editorview = React.createRef<HTMLDivElement>();

    constructor(props){

        super(props);
        
        
    }

    componentDidMount(): void {
        console.log("editor mount")

       
        if (this.container) {
            BIM.container = this.container.current;
            BIM.SC.scene.mountedMainScene();
        }
        if (this.editorview) {
            BIM.uicontainer = this.editorview.current;
        }
    }

    componentWillUnmount(): void {
        console.log("editor unmount")
        // BIM.exit();
    }

    render(): React.ReactNode {
        return (
            <>
                <div id='bim' ref={this.container} />
                <Container />
            </>
        )
    }
}

export default Editor