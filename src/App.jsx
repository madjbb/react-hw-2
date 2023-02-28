import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CarsProvider } from './components/contexts/cars.context';

import Contact from './pages/Contact';
import Clocks from './pages/Clocks';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import CarsList from './pages/CarsList';

function App() {
  return (
    <div className="App">
      <Router>
        <CarsProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="contact" element={<Contact />} />
              <Route path="clocks" element={<Clocks />} />
              <Route path="cars" element={<CarsList />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CarsProvider>
      </Router>
    </div>
  );
}

export default App;
