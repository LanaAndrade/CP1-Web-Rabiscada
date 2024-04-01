import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Produtos from './routes/Produtos.jsx'
import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx'

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
    <App />
  </React.StrictMode>,
)
