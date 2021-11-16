import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  return (
    <div className="App bg-dark text-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} /> 
          <Route path="/crew" element={<CrewPage/>} />
          <Route path="/technology" element={<TechnologyPage />} />  
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
