import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
    return (
        <header className={s.header}> 
            <div className={s.headerContainer}>
                <div className={s.headerLogo}>
                    <img alt='Error' src='https://i.ya-webdesign.com/images/logo-gaming-png-1.png'></img> 
                </div>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;