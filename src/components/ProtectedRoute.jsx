import React from 'react'
import { Navigate } from "react-router-dom";
import Sidebar from './Sidebar';

const ProtectedRoute = (props) => {
    const Component = props.component
    const {isLoggedIn} = props

   
    return (
    
    <div style={{display:'flex',minheight:'100vh', justifyContent:'space-between' }}>
        {isLoggedIn && <Sidebar/> }
        <div style={{marginLeft:'20%', flexGrow:1, backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)", minHeight:'100vh', height:'100%'}}>

        {isLoggedIn ? <Component data={props}/> : <Navigate to='/login'/>}
        </div>
        
    </div>
       
    )
}

export default ProtectedRoute