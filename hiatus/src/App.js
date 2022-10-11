import {Route, Routes} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Clinics from './Pages/Clinics/Clinics';
import Account from './Pages/MyAccount/Account';
import StatePage from './Pages/StatePage/StatePage';
import NavBar from './Pages/NavBar/NavBar';
import Footer from './Pages/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route exact path='/#about' element={<LandingPage/>}></Route>
        <Route exact path='/#map' element={<LandingPage/>}></Route>
        <Route exact path='/#resources' element={<LandingPage/>}></Route>
        <Route exact path='/#stories' element={<LandingPage/>}></Route>
        <Route exact path='/#donate' element={<LandingPage/>}></Route>



        {/* account related routes */}
        <Route exact path='/login' element={<LogIn/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/myaccount' element ={<Account/>}></Route>

        {/* routes to separate pages */}
        <Route exact path='/clinics/:clinicID' element ={<Clinics/>}></Route>
        <Route exact path='/states/:stateName' element ={<StatePage/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
