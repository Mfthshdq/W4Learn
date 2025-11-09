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

                <div className={style.navbar_items}>
                    <p className={style.navbar_login}>
                        <Link to={'/'} style={{ textDecoration: 'none' }} className={style.nav_item}>
                            <h4>Home</h4>
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default NavbarLogin;