import React from 'react'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Editor from '../pages/editor/Editor'
import Maps from '../pages/maps/Maps';
import Screen from '../pages/screen/Screen';
import SamrtCity from '../pages/smartcity/SamrtCity';
import AI from '../pages/ai/AI';
import WebGPU from '../pages/webgpu/WebGPU';
import Games from '../pages/games/Games';

const routerConfig = [

	{
		path:'/',
		element:<Home/>,
	},
	{
		path:'/about',
		element:<About/>,
	},
	{
		path:'/editor',
		element:<Editor/>,
	},
	{
		path:'/maps',
		element:<Maps/>,
	},
	{
		path:'/screen',
		element:<Screen/>,
	},
	{
		path:'/smartcity',
		element:<SamrtCity/>,
	},
	{
		path:'/ai',
		element:<AI/>,
	},
	{
		path:'/games',
		element:<Games/>,
	},
	{
		path:'/webgpu',
		element:<WebGPU/>,
	}
];

export default routerConfig;