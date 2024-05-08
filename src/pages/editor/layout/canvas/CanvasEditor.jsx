import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import BIM from '../../core/BIM';

/**编辑器的主画布*/
const CanvasEditor = () => {
	const canvasFather = useRef(null);

	useEffect(()=>{
		// 每次渲染后都会执行此处的代码
		

		if(canvasFather.current){
			console.log("start mounted editor canvas");

			BIM.init();
			// 挂载编辑器
			BIM.container = canvasFather.current;

			BIM.MGR.sceneMgr.mountedMainScene();
		}

		return ()=>{
			// 卸载编辑器
			console.log("unmounted editor canvas");

		}
	})

	return (
		<Box sx={{
			display:'flex',
			margin:0,
			padding:0,
			width:'100%',
			height:'100%',
			zIndex: 0
		}} ref={canvasFather}></Box>
	)
}

export default CanvasEditor