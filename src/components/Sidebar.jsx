import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const Sidebar = () => {
    return (
        <div style={{display:'flex', flexDirection:'column',width:'20%', backgroundColor: 'yellow', height:'100%'}}>
            <Navigation
              activeItemId="/management/members"
              onSelect={({itemId}) => {
                // maybe push to the route
              }}
              items={[
                {
                  title: 'Dashboard',
                  itemId: '/dashboard',
                },
                {
                  title: 'Management',
                  itemId: '/management',
                  subNav: [
                    {
                      title: 'Projects',
                      itemId: '/management/projects',
                    },
                    {
                      title: 'Members',
                      itemId: '/management/members',
                    },
                  ],
                },
                {
                  title: 'Another Item',
                  itemId: '/another',
                  subNav: [
                    {
                      title: 'Teams',
                      itemId: '/management/teams',
                    },
                  ],
                },
              ]}
            />
        </div>
          
        
      );
}

export default Sidebar