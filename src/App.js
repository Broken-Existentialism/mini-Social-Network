import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Navbar/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ToDoListContainer from './components/ToDoList/ToDoListContainer';

const App = (props)=> {
  return (
      <div className='wrapper'>
          <Header />
          <div className='container'>
            <NavContainer />
            <div className='wrapper-content'>
              <Route path='/dialogs' render={() => <DialogsContainer/>}/>
              <Route path='/profile' render={() => <Content/>}/>
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/settings' component={Settings} />
              <Route path='/users' render={() => <UsersContainer/>}/>
              <Route path='/todolist' render={() => <ToDoListContainer />}/>
            </div>
          </div>
      </div>
  );
}


export default App;
