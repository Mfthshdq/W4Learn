import { Link } from "react-router-dom";
import style from "./NavbarLogin.module.css"

function NavbarLogin() {
    return (
        <div className={style.navbar_container}>
            <div className={style.navbar_top}>

                <div className={style.navbar_icon}>
                    <img
                        src="image/logo.png"
                        alt="W4Learn Logo"
                    />
                </div>

                <Link to={'/'} className={`${style.nav_item} ${style.navbar_home}`}>
                    <h4>Home</h4>
                </Link>
            </div>
        </div >
    )
}

export default NavbarLogin;