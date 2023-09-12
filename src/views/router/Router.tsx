import React from "react";
import Editor from "../pages/editor/Editor";
import Home from "../pages/home/Home";
import SmartCity from "../pages/smartcity/SmartCity";

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
    }
];
export default routerConfig;