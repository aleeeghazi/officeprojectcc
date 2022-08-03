import React from 'react'


const ProtectedRoute = (props) => {
    const Component = props.component

   
    return (
    
    <div>
        {props.isLoggedIn ? <Component data={props}/> : '<Redirect to'}
        
    </div>
       
    )
}

export default ProtectedRoute