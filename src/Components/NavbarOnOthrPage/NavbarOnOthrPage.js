import style from "./NavbarOnOthrPage.module.css"
import { Link } from "react-router-dom";

function NavbarOnOthrPage() {
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
                    <p className={style.navbar_btn}>
                        <Link to={'/'} style={{ textDecoration: 'none' }} className={style.nav_item}>
                            <h4>Home</h4>
                        </Link>
                    </p>
                    <p className={style.navbar_btn}>
                        <Link to={'/tutorial'} style={{ textDecoration: 'none' }} className={style.nav_item}>
                            <h4>Tutorial</h4>
                        </Link>
                    </p>
                    <p className={style.navbar_btn}>
                        <Link to={'/references'} style={{ textDecoration: 'none' }} className={style.nav_item}>
                            <h4>References</h4>
                        </Link>
                    </p>
                </div>

            </div>

            <div className={style.navbar_bottom}>
                <a href="/tutorial-html">HTML</a>
                <a href="/tutorial-react">REACT</a>
                <a href="/tutorial-css">CSS</a>
            </div>
        </div>
    )
}

export default NavbarOnOthrPage;