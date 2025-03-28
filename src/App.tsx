import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AppThemeProvider from './AppThemeProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Shows from './components/Shows';
import Visit from './components/Visit';
import Insta from './components/Insta';
import Show from './components/Show';
import AboutUs from './components/AboutUs';
// import Apply from './components/Apply';
import './App.css';

const App = () => {
  return (
    <React.StrictMode>
      <AppThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route element={<Home />} path={'/'} />
              <Route element={<Events />} path={'/events'} />
              <Route element={<Artists />} path={'/artists'} />
              <Route element={<Artist />} path={'/artists/:name'} />
              <Route element={<Shows />} path={'/shows'} />
              <Route element={<Show />} path={'/shows/:name'} />
              <Route element={<Visit />} path={'/visit'} />
              <Route element={<AboutUs />} path={'/about'} />
              <Route element={<Insta />} path={'/instagram'} />
              {/* <Route element={<Apply />} path={'/apply'} /> */}
              <Route element={<Home />} path={'*'} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppThemeProvider>
    </React.StrictMode>
  );
}

export default App;
