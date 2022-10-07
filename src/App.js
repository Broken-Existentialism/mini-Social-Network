import './App.css';
import React from 'react';
import NavContainessr from './components/Navbar/NavContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavigationContainer from './components/Navigation/Navigation';

const App = (props)=> {
  return (
      <div className='wrapper'>
          <HeaderContainer/>
          <div className='container'>
            <NavContainer />
            <div className='wrapper-content'>
               <NavigationContainer/>
            </div>
          </div>
      </div>
  );
}

export default App;
