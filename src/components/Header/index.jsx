import { Link, useLocation } from 'react-router-dom';
import logo from "../../../public/assets/imgs/logo.svg";
import styles from "./Header.module.css";
import { useState } from 'react';
import menuHanb from "../../../public/assets/shared/icon-hamburger.svg";
import close from "../../../public/assets/shared/icon-close.svg";

const Header = () => {

    const location = useLocation();

    const [ showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container_logo}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div className={styles.linha}></div>
            </div>
            
            <nav className={`${styles.navbar}`}> 

                <div 
                    onClick={toggleMenu}
                    className={styles.container_menu}
                >
                    <img src={showMenu ? close : menuHanb} alt="Menu hamburger"/>
                </div>

                <div className={`${styles.container_navbar} ${showMenu ? styles.open : ""}`}>

                    <ul>
                        <Link to="/">
                            <li className={location.pathname === '/' ? `${styles.active}` : ''}><span>00</span> Home</li>
                        </Link>
                        <Link to="/destination">
                            <li className={location.pathname === '/destination' ? `${styles.active}` : ''}><span>01</span> Destination</li>
                        </Link>
                        <Link to="/crew">
                            <li className={location.pathname === '/crew' ? `${styles.active}` : ''}><span>02</span> Crew</li>
                        </Link>
                        <Link to="/technology">
                            <li className={location.pathname === '/technology' ? `${styles.active}` : ''}><span>03</span> Technology</li>
                        </Link>
                    </ul>

                </div>

            </nav>
        </header>
    );
}

export default Header;