import { Link } from "react-router-dom";
import style from "./Home.module.css"


function Home() {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1>Learn With <span className={style.color}>Code</span></h1>
                <h2>With the world's largest <span className={style.color}>web develover </span> site.</h2>
            </div>

            <div className={style.search}>
                <form className={style.form}>
                    <input type="text" placeholder="Search for tutorials, references, and more..." className={style.input} />

                    <img src="/image/icon.png" alt="search icon" className={style.icon} />
                </form>
            </div>

            <div className={`${style.box} ${style.first}`}>
                <div className={style.title}>

                    <div className={style.writing}>
                        <h1>REACT</h1>
                        <h2>The language for building web pages.</h2>
                    </div>
                    <div className={style.click}>
                        <Link to="/tutorial-react" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontFamily: 'poppins, sans-serif' }}><p>Learn REACT</p></Link>
                    </div>
                    <div className={style.tap}>
                        <Link to="/references-react" style={{ textDecoration: 'none' , color: 'white', fontWeight: 'bold', fontFamily: 'poppins, sans-serif' }}><p>REACT References</p></Link>
                    </div>

                </div>

                <div className={style.photo}>
                    <img src="/image/react.png" alt="react" />
                </div>

            </div>

            <div className={style.box}>
                <div className={style.title}>

                    <div className={style.writing}>
                        <h1>HTML</h1>
                        <h2>The language for building web pages.</h2>
                    </div>
                    <div className={style.click}>
                        <Link to="/tutorial-html" style={{ textDecoration: 'none' , color: 'white', fontWeight: 'bold', fontFamily: 'poppins, sans-serif' }}><p>Learn HTML</p></Link>
                    </div>
                    <div className={style.tap}>
                        <Link to="/references-html" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontFamily: 'poppins, sans-serif' }}><p>HTML References</p></Link>
                    </div>

                </div>

                <div className={style.photo}>
                    <img src="/image/html.jpg" alt="html" />
                </div>

            </div>

            <div className={`${style.box} ${style.end}`}>
                <div className={style.title}>

                    <div className={style.writing}>
                        <h1>CSS</h1>
                        <h2>The language for building web pages.</h2>
                    </div>
                    <div className={style.click}>
                        <Link to="/tutorial-css" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontFamily: 'poppins, sans-serif' }}><p>Learn CSS</p></Link>
                    </div>
                    <div className={style.tap}>
                        <Link to="/references-css" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontFamily: 'poppins, sans-serif' }}><p>CSS References</p></Link>
                    </div>

                </div>

                <div className={style.photo}>
                    <img src="/image/css.jpg" alt="css" />
                </div>

            </div>
        </div>
    )
}

export default Home;