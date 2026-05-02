import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../component/Dashboard/Dashboard";
import NewProducts from "../component/NewProducts/NewProducts";
import ViewDetails from "../component/viewDetails/viewDetails";
import Shop from "../pages/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
          path: "/",
          Component: AuthLayout,
          children: [
            {
              path: 'login',
              Component: Login,
            },
            {
              path: 'register',
              Component: Register,
            },
          ]
        },
        {
         path: 'products/:id',
         Component: ViewDetails,
        },
        {
         path: 'shop',
         Component: Shop,
        },
         {
              path: "dashboard",
              Component: DashboardLayout,
              children:[
                {
                  index: true,
                  Component: Dashboard,
                  
                },
                {
                  path: "products",
                  Component: NewProducts,
                },
              ]
            }
          ]
    
  }




]);