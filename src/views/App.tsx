import { useRoutes } from 'react-router-dom';
import Expenses from './pages/Expenses';
import Home from './pages/Home/Index';
import Login from './pages/Login';


function DD() {
  return(
    <div>dd</div>
  )
}

function CC() {
  return(
    <div>cc</div>
  )
}

const App = () => {

  let config = [
    {
      path:'/',
      element:<Home/>,
      children:[
        {
          path:'dd',
          element:<DD/>
        },
        {
          path:'cc',
          element:<CC/>
        }
      ]
    },
    {
      path:'/expenses',
      element:<Expenses/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]

  let element = useRoutes(config);

  return element;
}

export default App;
