import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import profileIcon from '../../assets/images/profile.svg'
import dialogsIcon from '../../assets/images/message.svg'
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
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink  to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.itemNav}>
                <NavLink to='/todolist' activeClassName={s.active}>To Do List</NavLink>
            </div>
        </nav>           
    )
}

export default Nav;
