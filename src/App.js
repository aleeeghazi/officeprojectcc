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
import Loan from './pages/Loan';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App =()=>{
  // const [isLoggedIn,setIsLoggedIn] = useState(false)
 
  const isLoggedIn = useSelector(state => state.auth.currentUser )
  console.log(isLoggedIn)
    return (
      <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'100%', boxSizing:'border-box',padding:0,margin:0}}>
      <BrowserRouter>      
      <div style={{ width:'100%',height:'100%'}}>
      <Routes>
          <Route path='/login' element={<PublicRoute component= {Login} isLoggedIn={isLoggedIn} /> } />
          <Route path='/signup' element={<PublicRoute component={Signup} isLoggedIn={isLoggedIn}/>} />
          <Route path='/dashboard' element={<ProtectedRoute component={Dashboard} isLoggedIn={isLoggedIn} />}/>
          <Route path='/expense' element={<ProtectedRoute component={Expense} isLoggedIn={isLoggedIn} />}/>
          <Route path='/income' element={<ProtectedRoute component={Income} isLoggedIn={isLoggedIn} />}/>
          <Route path='/category' element={<ProtectedRoute component={Category} isLoggedIn={isLoggedIn} />}/>
          <Route path='/loan' element={<ProtectedRoute component={Loan} isLoggedIn={isLoggedIn} />}/>
        </Routes>
      </div>

      </BrowserRouter>
      </div>
    );
  
}

export default App;
