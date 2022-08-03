import React from 'react'
import { Redirect } from 'react-router-dom';
const PublicRoute = (props) => {
    const Component = props.component
    console.log(Component)
  return (
    
    <div>
        {props.isLoggedIn ?  'noooo' : <Component/>}
        
    </div>
    
    
  )
}

export default PublicRoute