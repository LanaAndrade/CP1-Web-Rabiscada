{/*
https://www.canva.com/design/DAGBGAsbdlg/yoopG0AXx7drXLQJNgEt_w/edit?utm_content=DAGBGAsbdlg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
*/}

import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Produtos from './routes/Produtos.jsx';
import Home from './routes/Home.jsx';
import Sobre from './routes/Sobre.jsx';
import Contato from './routes/Contato.jsx';
import Error from './routes/Error.jsx';

const router = createBrowserRouter([
  {
    path:"/", element: <App/>,
    errorElement: <Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/Sobre/', element:<Sobre/>},
      {path:'/Produtos', element:<Produtos/>},
      {path:'/Contato', element:<Contato/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
