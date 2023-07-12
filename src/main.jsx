import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Home from './Components/Home/Home.jsx';
import NewsFeed from './Components/NewsFeed/NewsFeed.jsx';
import Welcome from './Components/Welcome/Welcome.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/home',
    element:<Home></Home>,
    children:[
      {
        path:'/home/feed',
        element:<NewsFeed></NewsFeed>
      },
      {
        path:'/home/welcome',
        element:<Welcome></Welcome>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
