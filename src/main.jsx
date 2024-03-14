import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, useRoutes } from 'react-router-dom';
import routerConfig from './router/index.jsx';
import "./assets/styles/index.css"

const App = ()=>{
	const element = useRoutes(routerConfig);
	return (
		<>{element}</>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<HashRouter>
		<App />
	</HashRouter>,
)
