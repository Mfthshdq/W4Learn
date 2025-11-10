import style from './Profile.module.css';

function Profile() {
    return (
        <div className={style.container}>
            <div className={style.atas}>
                <div className={style.poto}>

                </div>
                <div className={style.title}>
                    <div className={style.name}></div>
                    <div className={style.alamat}></div>
                    <div className={style.id}></div>
                </div>
                <div className={style.bulat}>
                    <img src='/image/malam-mode.png' />
                </div>

            </div>
            <div className={style.bawah}>
                <div className={style.level}>
                     <div className={style.approve}></div>
                </div>
               
                <div className={style.level}>
                    <div className={style.approve}></div>
                </div>

                <div className={style.level}>
                    <div className={style.approve}></div>
                </div>

                <div className={style.level}>
                    <div className={style.approve}></div>
                </div>
                

                
               
            </div>
        </div>
    )
}



export default Profile;