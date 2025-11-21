import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter } from "react-router-dom";
import { HydratedRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";



const AppLayout =()=>{
    return <div className="app">
        <Header/>
        <Body/> 
    </div>
}

const aapRouter = ([
    {
        path: "/",
        element: <AppLayout/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contac"
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

