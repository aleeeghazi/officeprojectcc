import React, {  useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import ExpenseForm from './components/ExpenseForm';
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
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [user,setUser] = useState("a")
  console.log('p', isLoggedIn)
    return (
      <BrowserRouter>
      <div style={{display:'flex',  height:'100vh'}}>
      {isLoggedIn && <Sidebar/> }
      <div style={{ flexGrow:1}}>
      <Routes>
          <Route path='/login' element={<PublicRoute component= {Login} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUser={setUser}/> } />
          <Route path='/signup' element={<PublicRoute component={Signup} isLoggedIn={isLoggedIn}/>} />
          <Route path='/dashboard' element={<ProtectedRoute component={Dashboard} isLoggedIn={isLoggedIn} user={user.userId ? user : null}/>}/>
          <Route path='/expense' element={<ProtectedRoute component={Expense} isLoggedIn={isLoggedIn} user={user.userId ? user : null}/>}/>
          <Route path='/income' element={<ProtectedRoute component={Income} isLoggedIn={isLoggedIn} user={user.userId ? user : null}/>}/>
          <Route path='/category' element={<ProtectedRoute component={Category} isLoggedIn={isLoggedIn} user={user.userId ? user : null}/>}/>
        </Routes>
      </div>

      </div>

      </BrowserRouter>
    );
  
}

export default App;
