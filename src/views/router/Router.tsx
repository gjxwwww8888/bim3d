import React from "react";
import Editor from "../pages/editor/Editor";
import Home from "../pages/home/Home";
import SmartCity from "../pages/smartcity/SmartCity";
import WebGPU from "../pages/webgpu/WebGPU";
import BIMDoc from "../pages/document/BIMDoc";
const routerConfig = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/editor',
        element: <Editor />,
    },
    {
        path: '/smartcity',
        element: <SmartCity />,
    },
    {
        path: '/webgpu',
        element: <WebGPU />,
    },
    {
        path: '/doc',
        element: <BIMDoc />,
    }
];
export default routerConfig;