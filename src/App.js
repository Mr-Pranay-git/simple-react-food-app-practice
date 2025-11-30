import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js"


const AppLayout = () => {
    return (<div className="app">
        
        <Header />
        <Outlet/> 
    </div>
    )
}

const aapRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement:<Error/>
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)
root.render(<RouterProvider router={aapRouter} />)

