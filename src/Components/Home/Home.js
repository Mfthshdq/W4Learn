import style from "./Home.module.css"


function Home() {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1>Learn With <span className={style.color}>Code</span></h1>
                <h2>With the world's largest <span className={style.color}>web develover </span> site.</h2>
            </div>

            <div className={style.search}>
                <div className={style.input}>
                    <h3>Search</h3>
                </div>
                <div className={style.icon}>
                    <img src="/image/icon.png"/>
                </div>
            </div>

            <div className={style.box}>
                <div className={style.title}>

                    <div className={style.writing}>
                        <h1>React</h1>
                        <h2>The language for building web pages.</h2>
                    </div>
                    <div className={style.click}>
                        <p><b>Learn React</b></p>
                    </div>
                    <div className={style.tap}>
                        <p><b>React References</b></p>
                    </div>
                    
                </div>

                <div className={style.kotak}>
                    <img src="/image/react.png"/>
                </div>

            </div>

            <div className={style.box}>
                <div className={style.title}>

                    <div className={style.writing}>
                        <h1>HTML</h1>
                        <h2>The language for building web pages.</h2>
                    </div>
                    <div className={style.click}>
                        <p><b>Learn HTML</b></p>
                    </div>
                    <div className={style.tap}>
                        <p><b>HTML References</b></p>
                    </div>
                    
                </div>

                <div className={style.kotak}>
                    <img src="/image/html.jpg"/>
                </div>

            </div>

            <div className={style.box}>
                <div className={style.title}>

                    <div className={style.writing}>
                        <h1>CSS</h1>
                        <h2>The language for building web pages.</h2>
                    </div>
                    <div className={style.click}>
                        <p><b>Learn CSS</b></p>
                    </div>
                    <div className={style.tap}>
                        <p><b>CSS References</b></p>
                    </div>
                    
                </div>

                <div className={style.kotak}>
                    <img src="/image/css.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Home;