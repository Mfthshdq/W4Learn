import style from "./Login.module.css";

function Login() {
    return (
        <div className={style.container}>

            <div className={style.left}>

                <p>Login</p>

                <form>
                    <div className={style.login_input_name}>

                        <div className={style.title}>
                            <label for="Username">Username</label>
                        </div>

                        <input
                            className={style.placeforname}
                            type="text"
                            name='username'
                        />

                    </div>

                    <div className={style.placeforpassword_p}>

                        <div className={style.title}>
                            <label for="e-mail">Password</label>
                        </div>

                        <input
                            className={style.placeforpassword}
                            type="password"
                            name='password'
                        />

                        <p>Forget Password?</p>

                    </div>

                    <button className={style.button}>
                        <p>Login</p>
                    </button>

                    <p className={style.dont}>Don't have an account?<span className={style.hijau}> Register</span></p>

                    <div className={style.medsos_container}>
                        <p className={style.medsos}>
                            <img src='image/google.png' alt='google' className={style.photo1} />
                        </p>

                        <p className={style.medsos}>
                            <img src='image/fb.png' alt='fb' className={style.photo2} />
                        </p>

                        <p className={style.medsos}>
                            <img src='image/github.png' alt='github' className={style.photo3} />
                        </p>
                    </div>

                </form>

            </div>

            <div className={style.right}>

                <div className={style.logo}>
                    <img src='image/logo.png' alt='logo' />
                </div>

                <div className={style.titlejudul}>
                    <p>W4Learn</p>
                </div>

                <div className={style.titledesc}>
                    <p>Learn Fast, Code Smart, Create More.</p>
                </div>

            </div>

        </div >
    )
}

export default Login;