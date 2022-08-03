import React from 'react'
const PublicRoute = (props) => {
    const Component = props.component

    console.log(props)
  return (
    
    <div>
        {props.isLoggedIn ?  'noooo' : <Component data={props}/>}
        
    </div>

    
  )
}

export default PublicRoute