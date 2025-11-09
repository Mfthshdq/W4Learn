import style from "./Footer.module.css"

function Footer() {
    return (
        <div className={style.container}>
            <h1 className={style.title1}>W4Learn</h1>
            <hr />
            <h1 className={style.title2}>by Developer</h1>
        </div>
    )
}

export default Footer;