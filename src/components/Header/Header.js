import h from './Header.module.css';

const Header = () =>{
    return (
        <header className={h.header}> 
            <div className={h.headerContainer}>
                <img src='https://i.ya-webdesign.com/images/logo-gaming-png-1.png'></img> 
            </div>
        </header>
    );
}

export default Header;