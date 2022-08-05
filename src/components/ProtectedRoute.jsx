import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const Component = props.component
    const {isLoggedIn} = props

   
    return (
    
    <div>
        {isLoggedIn ? <Component data={props}/> : <Navigate to='/login'/>}
        
    </div>
       
    )
}

export default ProtectedRoute