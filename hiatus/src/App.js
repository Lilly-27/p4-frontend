import {Route, Routes} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Clinics from './Pages/Clinics/Clinics';
import Stories from './Pages/Stories/Stories';
import Account from './Pages/MyAccount/Account';
import About from './Pages/About/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>

        {/* account related routes */}
        <Route exact path='/login' element={<LogIn/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/myaccount' element ={<Account/>}></Route>
        <Route exact path='/clinics' element ={<Clinics/>}></Route>
        
       


        
      </Routes>
    </div>
  );
}

export default App;
