import { Link } from 'react-router-dom';
import logo from "../../../public/assets/imgs/logo.svg";
import styles from "./Header.module.css";
import { useState } from 'react';
import menuHanb from "../../../public/assets/shared/icon-hamburger.svg";
import close from "../../../public/assets/shared/icon-close.svg";

const Header = () => {

    const [ showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container_logo}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            
            <nav
                className={`${styles.navbar}  ${showMenu ? styles.open : ""}`}
            > 
                <div className={styles.linha}></div>

                <div 
                    onClick={toggleMenu}
                    className={styles.container_menu}
                >
                    <img src={showMenu ? close : menuHanb} alt="Menu hamburger"/>
                </div>

                <ul>
                    <Link to="/">
                        <li><span>00</span> Home</li>
                    </Link>
                    <Link to="/destination">
                        <li><span>01</span> Destination</li>
                    </Link>
                    <Link to="/crew">
                        <li><span>02</span> Crew</li>
                    </Link>
                    <Link to="/technology">
                        <li><span>03</span> Technology</li>
                    </Link>
                </ul>

            </nav>
        </header>
    );
}

export default Header;