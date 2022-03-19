import './App.css';
import Productlist from "./components/productlist/Productlist"
import Homepage from './components/Homepage';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom" ;
import { useState } from 'react';

function App() {

  const [user,setLoginUser] = useState(null)


  return (
    <div className="App">
      <Router>
        <Routes>
          

        <Route exact path='/' element={user ? <Homepage /> : <Login/> } />
        <Route  path='/login' element={<Login setLoginUser={setLoginUser} />} />
        <Route  path='/registration' element={<Registration />} />
        
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
