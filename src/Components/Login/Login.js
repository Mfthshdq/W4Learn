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
                        <a href="https://accounts.google.com/v3/signin/accountchooser?client_id=1078992815106-brpsupgvhheqg35tupphbh0qk9c32nq8.apps.googleusercontent.com&code_challenge=1JRB9CQiazoEjWSCSct_iTIqQrAH2zEFlgk7PADCweY&code_challenge_method=S256&nonce=f1791dc3d40165290de1267f90cf26d3&redirect_uri=https%3A%2F%2Fgithub.com%2Fsessions%2Fsocial%2Fgoogle%2Fcallback&response_type=code&scope=openid+email+profile&state=b666edabb5caf3c87592878d7f504c59&dsh=S992412920%3A1762694748949910&o2v=2&service=lso&flowName=GeneralOAuthFlow&opparams=%253F&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPQnlg1AnKxc02luSkoIxiztQTBSPpHhoBUTwuUukc2v5yNjHuklVF9sS1i2maAiJ8KMPnGa3ekJxDAohDdgXS_eIuTpBydVzZ6OBnZrKrVwrTiWzBvhF_XxvpH76UR00EF0ipi-HeA_7PzvlQYUeMFV96HidmTTI8KBVOEEIuVjM6j9chC-bDeNw5jqZCSZ1knPjEcRdktxZ8iItgQsGheZGQ_G3xLH68zdNXLkDb8cerk5BYeuJMgc-tEzAVg-VHxwlcbTfT32TLuzZtVMhzRVNxSteny-zc-wt5sazr8fo11cK8ZytfvjsE6st5HcBxYmWkyKgOtn3NdcQ8qPB-0WkwKbwA3QkGgn3XEIzFlOpZESnXV4GEamqv9RT3HvdaLyZIG4EzHqYHTRUooOOtJTfs3KGB3kit3rh2_tpEZo5b4HqOsTu9GrYlOovko8S5X7xu8enrKCjNQij6R16FzU7p00Q%26flowName%3DGeneralOAuthFlow%26as%3DS992412920%253A1762694748949910%26client_id%3D1078992815106-brpsupgvhheqg35tupphbh0qk9c32nq8.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fgithub.com" className={style.medsos}>
                            <img src='image/google.png' alt='google' className={style.photo1} />
                        </a>

                        <a href="https://www.facebook.com/login/?next=%2Fbusiness%2Floginpage%2Ffbauth%2F%3Ff3_request_id%3D286a7b45-e16f-4f40-a947-f0af2a664300%26next%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Fdocs%252Ffacebook-login%252Fweb%253Flocale%253Did_ID%2526nav_ref%253Dbiz_unified_f3_login_page_to_dfc&request_id=286a7b45-e16f-4f40-a947-f0af2a664300" className={style.medsos}>
                            <img src='image/fb.png' alt='fb' className={style.photo2} />
                        </a>

                        <a href="https://github.com/login?client_id=01ab8ac9400c4e429b23&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D01ab8ac9400c4e429b23%26code_challenge%3DvrXb6-nHjrwM_BNkMLV-zj5QQSesJU-blpXPQ7HJztg%26code_challenge_method%3DS256%26get_started_with%3Dcopilot-vscode%26prompt%3Dselect_account%26redirect_uri%3Dhttps%253A%252F%252Fvscode.dev%252Fredirect%26scope%3Duser%253Aemail%26state%3Dhttp%253A%252F%252F127.0.0.1%253A64844%252Fcallback%253Fnonce%253DIxbZlvPowLG4eQHNZ92oZQ%25253D%25253D" className={style.medsos}>
                            <img src='image/github.png' alt='github' className={style.photo3} />
                        </a>
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