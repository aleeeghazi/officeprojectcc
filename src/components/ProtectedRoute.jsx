import React from 'react'
import { Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const Component = props.component

   
    return (
    
    <div>
        {props.isLoggedIn ? <Component/> : <Redirect to='/login'/>}
        
    </div>
       
    )
}

export default ProtectedRoute