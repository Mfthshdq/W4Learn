import { Link } from "react-router-dom";
import style from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={style.container_nav}>
            <div className={style.logo_nav}>
                <img className={style.img_logo} src='/image/logo.png' alt='image/Logo' />
            </div>
            <div className={style.menu_nav}>
                <ul>
                    <li>
                        <Link to={'/'} className={style.nav_item}>
                            <h4>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/tutorial'} className={style.nav_item}>
                            <h4>Tutorial</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/references'} className={style.nav_item}>
                            <h4>References</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'} className={style.nav_item}>
                            <h4>Login</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;