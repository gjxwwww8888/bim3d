import '@/assets/style/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, useRoutes } from 'react-router-dom';
import routerConfig from './router';
import store from './store';
import ThemeProviderWrapper from './styles';
import GlobalStyle from './styles/GlobalStyle';

 const App = () =>{
   const element = useRoutes(routerConfig);

   return (
        <Provider store={store}>
            <ThemeProviderWrapper>
                <GlobalStyle/>
                {element}
            </ThemeProviderWrapper>
        </Provider>
   )
 } 

 class ReactDom {

   constructor() {
      ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
          <HashRouter>
            <App/>
          </HashRouter>
        </React.StrictMode>
      )
    }
 }

 export default ReactDom;
