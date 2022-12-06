import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Artists from './Components/Artists';
import './App.css';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Home />} path={'/'} />
            <Route element={<Artists />} path={'/artists'} />
            <Route element={<Home />} path={'*'} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
