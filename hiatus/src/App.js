import {Route, Routes} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
