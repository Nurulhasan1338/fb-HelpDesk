import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './routes/SignUp'
import App from './routes/App'
import SignIn from './routes/SignIn'
import PageIntegration from './routes/PageIntegration'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/signin",
        element: <SignIn/>,
      },
      {
        path: "/",
        element: <SignUp/>,
      },
      {
        path: "/pageIntegrate",
        element: <PageIntegration/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
