import { NavLink } from 'react-router-dom';
import n from './Nav.module.css';
import Sidebar from './Sidebar/Sidebar';

const Nav = (props) =>{
    let friendsArray = props.sidebar.sidebar.map (elem => <Sidebar name={elem.name} city={elem.city}/>)
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' activeClassName={n.active}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink  to='/dialogs' activeClassName={n.active}>Dialogs</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' activeClassName={n.active}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink  to='/news' activeClassName={n.active}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/settings' activeClassName={n.active}>Settings</NavLink>
            </div>
            {
                friendsArray
            }
        </nav>
    );
}

export default Nav;
