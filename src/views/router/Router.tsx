import React from "react";
import Editor from "../pages/editor/Editor";
import Home from "../pages/home/Home";

const routerConfig = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/editor',
        element: <Editor />,
    }
];
export default routerConfig;