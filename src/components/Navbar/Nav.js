import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import profileIcon from '../../assets/images/profile.svg'
import dialogsIcon from '../../assets/images/message.svg'
import musicIcon from '../../assets/images/music.svg'
import settingsIcon from '../../assets/images/settings.svg'
import newsIcon from '../../assets/images/news.svg'
import usersIcon from '../../assets/images/users.svg'
import todolistIcon from '../../assets/images/todolist.svg'
const Nav = () =>{
    return (           
        <nav className={s.nav}>
            <div className={s.itemNav}>
                <NavLink to='/profile' activeClassName={s.active}>
                    <div><img src={profileIcon}></img></div>
                    <div>Profile</div>
                </NavLink>
            </div>
            <div className={s.itemNav}>
                 <NavLink  to='/dialogs' activeClassName={s.active}>
                    <div><img src={dialogsIcon}></img></div>
                    <div>Dialogs</div>
                </NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink to='/music' activeClassName={s.active}>
                    <div><img src={musicIcon}></img></div>
                    <div>Music</div>
                </NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink  to='/news' activeClassName={s.active}>
                    <div><img src={newsIcon}></img></div>
                    <div>News</div>
                </NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink to='/settings' activeClassName={s.active}>
                    <div><img src={settingsIcon}></img></div>
                    <div>Settings</div>
                </NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink to='/users' activeClassName={s.active}>
                    <div><img src={usersIcon}></img></div>
                    <div>Users</div>
                </NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink to='/todolist' activeClassName={s.active}>
                    <div><img src={todolistIcon}></img></div>
                    <div>To Do List</div>
                </NavLink>
            </div>
        </nav>           
    )
}

export default Nav;
