import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const navigate = useNavigate()
    return (
        <div style={{display:'flex', flexDirection:'column',width:'20%', backgroundColor: 'gray', height:'100%', justifyContent:'center'}}>
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
              ]}
            />
        </div>
          
        
      );
}

export default Sidebar