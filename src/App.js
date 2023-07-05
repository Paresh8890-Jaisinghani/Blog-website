import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Indexpages from "./Pages/Indexpages";
import Loginpages from "./Pages/Loginpages";
import Registerpage from "./Pages/Registerpage";
function App() {
  return (

    <Routes>
      <Route path= "/" element = {<Layout/>}>
      <Route index element={<Indexpages/>} />
      <Route path="/login" element ={<Loginpages/>}/>
      <Route path="/register" element={<Registerpage/>}/>
    </Route>
    </Routes>
  );
}

export default App;
