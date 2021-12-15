import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Nav from './components/Navbar/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props)=> {
  return (
        <div className='wrapper'>
        <Header />
        <Nav sidebar={props.state.sidebar}/>
        <div className='wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/> } />
          <Route path='/profile' render={() => <Content state={props.state.profilePage}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}


export default App;
