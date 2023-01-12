import {
    BrowserRouter,Route, Routes
  } from "react-router-dom";
import Counter from './Counter';

  import React from 'react'

  function Routing() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/counter" element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    );
  }

  export default Routing;