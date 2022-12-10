import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Shows from './components/Shows';
import Show from './components/Show';
import './App.css';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Home />} path={'/'} />
            <Route element={<Artists />} path={'/artists'} />
            <Route element={<Artist />} path={'/artists/:name'} />
            <Route element={<Shows />} path={'/shows'} />
            <Route element={<Show />} path={'/shows/:name'} />
            <Route element={<Home />} path={'*'} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
