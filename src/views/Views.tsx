import '@/assets/styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, useRoutes } from 'react-router-dom';
import routerConfig from './router/Router';
import store from './store/store';
// import ThemeProviderWrapper from './styles';
// import GlobalStyle from './styles/GlobalStyle';

const App = () => {
    const element = useRoutes(routerConfig);

    return (
        <Provider store={store}>
            {/* <ThemeProviderWrapper> */}
            {/* <GlobalStyle/> */}
            {element}
            {/* </ThemeProviderWrapper> */}
        </Provider>
    )
}

class ReactDom {

    constructor() {
        ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
            // <React.StrictMode> 
            //在未来，React会提供一个新特性，该特性会使得组件取消加载后能维持状态。
            //React 18会再Strict Mode中引入一个新的开发模式。
            //React将会对每一个组件自动取消加载并重新加载。
            //如果其干扰了你的应用，移除Strict Mode就能够修复组件重新加载的问题。
            <HashRouter>
                <App />
            </HashRouter>
            // </React.StrictMode>
        )
    }
}

export default ReactDom;
