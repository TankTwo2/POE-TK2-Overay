import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TestPage from './Pages/TestPage';

export default function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}
