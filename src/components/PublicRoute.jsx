import React from 'react'
import { Navigate } from 'react-router-dom'
const PublicRoute = (props) => {
    const Component = props.component
    const {isLoggedIn} = props
    console.log(props)
  return (
    
    <div>
        {isLoggedIn===null ? <Component data={props}/> : <Navigate to='/expense'/>}
        
    </div>

    
  )
}

export default PublicRoute