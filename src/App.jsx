import './App.css';
import LandingPage from './Layouts/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
