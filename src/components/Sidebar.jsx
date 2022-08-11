import { Button } from '@material-ui/core';
import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../store/auth/authActions';


const Sidebar = () => {
const dispatch =useDispatch()
  const clickHandler = () => {
    dispatch(logOut())
  }
  const navigate = useNavigate()
    return (
        <div style={{display:'flex', flexDirection:'column',width:'20%', backgroundImage: "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)", height:'100%', justifyContent:'flex-end',position:'fixed', borderRadius:'15px'}}>
            <Navigation
              activeItemId="/management/members"

              onSelect={({itemId}) => {
                navigate(itemId)
              }}
              items={[
                {
                  title: 'Dashboard',
                  itemId: '/dashboard',
                },
                {
                  title: 'Expense',
                  itemId: '/expense',
                },
                {
                  title: 'Income',
                  itemId: '/income',
  
                },
                {
                  title: 'Categories',
                  itemId: '/category',
  
                }
                
              ]}
            />

          <Button variant="outlined" style={{marginTop:'70%'}} onClick={clickHandler}>Logout</Button>
        </div>
          
        
      );
}

export default Sidebar