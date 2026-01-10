import { Link } from "react-router-dom";
import style from "./NavbarHome.module.css";

function NavbarHome() {
    return (
        <div className={style.navbar_container}>

            <div className={style.navbar_top}>

                <div className={style.navbar_icon}>
                    <img
                        src="image/logo.png"
                        alt="W4Learn Logo"
                    />
                </div>

                <div className={style.navbar_items}>
                    <Link to={'/tutorial'} style={{ textDecoration: 'none' }} className={`${style.nav_item} ${style.navbar_btn}`}>
                        <h4>Tutorial</h4>
                    </Link>
                    <Link to={'/references'} style={{ textDecoration: 'none' }} className={`${style.nav_item} ${style.navbar_btn}`}>
                        <h4>References</h4>
                    </Link>
                    <Link to={'/login'} style={{ textDecoration: 'none' }} className={`${style.nav_item} ${style.navbar_login}`}>
                        <h4>Login</h4>
                    </Link>
                </div>

            </div>

            <div className={style.navbar_bottom}>
                <a href="/tutorial-html">HTML</a>
                <a href="/tutorial-react">REACT</a>
                <a href="/tutorial-css">CSS</a>
            </div>
        </div>
    );
}

export default NavbarHome;