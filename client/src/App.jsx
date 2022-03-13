import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Create, Edit, List, NavBar } from "./components"

const App = () => {
  return (
    <BrowserRouter >
      <div className="container">
      <NavBar />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/edit/:id' element={<Edit />} /> 
          <Route path='/create' element={<Create/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
