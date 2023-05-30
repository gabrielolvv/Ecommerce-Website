import {
    Routes,
    Route,
    Router,
    } from "react-router-dom";
    import React from "react";
import Home from "./pages/Home";



  const AppRoutes = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
    )
  }

  export default AppRoutes;