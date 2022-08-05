import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Sidebar from './components/Sidebar';
import Category from './pages/Category';
import Dashboard from './pages/Dashboard';
import Expense from './pages/Expense';
import Income from './pages/Income';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App =()=>{
  // const [isLoggedIn,setIsLoggedIn] = useState(false)
 
  const isLoggedIn = useSelector(state => state.auth.currentUser )
  console.log(isLoggedIn)
    return (
      <BrowserRouter>
      <div style={{display:'flex',  height:'100vh'}}>
      {isLoggedIn && <Sidebar/> }
      <div style={{ flexGrow:1}}>
      <Routes>
          <Route path='/login' element={<PublicRoute component= {Login} isLoggedIn={isLoggedIn} /> } />
          <Route path='/signup' element={<PublicRoute component={Signup} isLoggedIn={isLoggedIn}/>} />
          <Route path='/dashboard' element={<ProtectedRoute component={Dashboard} isLoggedIn={isLoggedIn} />}/>
          <Route path='/expense' element={<ProtectedRoute component={Expense} isLoggedIn={isLoggedIn} />}/>
          <Route path='/income' element={<ProtectedRoute component={Income} isLoggedIn={isLoggedIn} />}/>
          <Route path='/category' element={<ProtectedRoute component={Category} isLoggedIn={isLoggedIn} />}/>
        </Routes>
      </div>

      </div>

      </BrowserRouter>
    );
  
}

export default App;
