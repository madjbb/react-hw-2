import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Clocks from './pages/Clocks';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='contact' element={<Contact />} />
            <Route path='param/:title' element={<Contact />} />
            <Route path='clocks' element={<Clocks />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
