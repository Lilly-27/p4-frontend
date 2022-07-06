import {Route, Routes} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Clinics from './Pages/Clinics/Clinics';
// import Reviews from './Pages/Reviews/Reviews';
import StoriesViewPage from './Pages/StoriesViewPage/StoriesViewPage';
import Account from './Pages/MyAccount/Account';
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
        {/* <Route exact path='/reviews' element ={<Reviews/>}></Route> */}
        <Route exact path='/stories' element ={<StoriesViewPage/>}></Route>
       


        
      </Routes>
    </div>
  );
}

export default App;
