import News from '../News/News';
import MusicContainer from '../Music/MusicContainer';
import Settings from '../Settings/Settings';
import UsersContainer from '../Users/UsersContainer';
import ToDoListContainer from '../ToDoList/ToDoListContainer';
import ContentContainer from '../Content/ContentContainer';
import Login from '../Login/Login';
import DialogsContainer from '../Dialogs/DialogsContainer';

export const authRoutes = [
    {
      path:'/dialogs',
      component: <DialogsContainer/>
    },
    {
      path:'/profile/:userID?',
      component: <ContentContainer/>
    },
    {
      path:'/news',
      component: <News/>
    },
    {
      path:'/music',
      component: <MusicContainer/>
    },
    {
      path:'/settings',
      component: <Settings/>
    },
    {
      path:'/users',
      component: <UsersContainer/>
    },
    {
      path:'/todolist',
      component: <ToDoListContainer />
    },
    {
      path:'/login',
      component: <Login/>
    },
]

export const publicRoutes = [
  {
    path:'/news',
    component: <News/>
  },
  {
    path:'/settings',
    component: <Settings/>
  },
  {
    path:'/login',
    component: <Login/>
  },
]

