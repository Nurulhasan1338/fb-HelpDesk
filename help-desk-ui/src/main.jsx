import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './routes/SignUp'
import App from './routes/App'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import SignIn from './routes/SignIn'
import PageIntegration from './routes/PageIntegration'
import Dashboard from "./component/helpDeskDashboard"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const location = useLocation();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/pageIntegrate",
        element: <PageIntegration />,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
