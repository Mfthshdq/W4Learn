import { Link } from "react-router-dom";
import style from "./References.module.css";

function References() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>References</h1>
            </div>
            <div className={style.options}>
                <div className={style.option}>
                    <img src="image/html.jpg" alt="html" />
                    <Link to={'/references-html'} style={{ textDecoration: 'none' }} className={style.btn}>
                        <h4>Learn</h4>
                    </Link>
                </div>
                <div className={style.option}>
                    <img src="image/css.jpg" alt="html" />
                    <Link to={'/references-css'} style={{ textDecoration: 'none' }} className={style.btn}>
                        <h4>Learn</h4>
                    </Link>
                </div>
                <div className={style.option}>
                    <img src="image/react.png" alt="html" />
                    <Link to={'/references-react'} style={{ textDecoration: 'none' }} className={style.btn}>
                        <h4>Learn</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default References;