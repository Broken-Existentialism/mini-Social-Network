import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import profileIcon from '../../assets/images/profile.svg'
import dialogsIcon from '../../assets/images/message.svg'
import musicIcon from '../../assets/images/music.svg'
import settingsIcon from '../../assets/images/settings.svg'
import newsIcon from '../../assets/images/news.svg'
import usersIcon from '../../assets/images/users.svg'
import todolistIcon from '../../assets/images/todolist.svg'

const NavBars = [
    {
        path:'/profile',
        src: profileIcon,
        item: 'Profile'
    },
    {
        path:'/dialogs',
        src: dialogsIcon,
        item: 'Dialogs'
    },
    {
        path:'/music',
        src: musicIcon,
        item: 'Music'
    },
    {
        path:'/news',
        src: newsIcon,
        item: 'News'
    },
    {
        path:'/settings',
        src: settingsIcon,
        item: 'Settings'
    },
    {
        path:'/users',
        src: usersIcon,
        item: 'Users'
    },
    {
        path:'/todolist',
        src: todolistIcon,
        item: 'To Do List'
    },
]

const Nav = () =>{
    return (           
        <nav className={s.nav}>

            {NavBars.map((nav,index)=>
                <div className={s.itemNav} key={index}>
                    <NavLink to={nav.path} activeClassName={s.active}>
                        <div><img alt='Error' src={nav.src}></img></div>
                        <div>{nav.item}</div>
                    </NavLink>
                 </div>
            )}
        
        </nav>           
    )
}

export default Nav;
