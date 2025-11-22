import style from './Profile.module.css';

const persentase = 0;

function Profile() {
    return (
        <div className={style.container}>

            <div className={style.atas}>

                <div className={style.poto}>

                </div>

                <div className={style.name}>
                    <h1>Name:</h1>
                    <h1>Alamat:</h1>
                    <h1>Id: </h1>
                </div>


                <div className={style.bulat}>
                    <img src='image/malam-mode.png' alt='mode-malam' />
                </div>

            </div>

            <div className={style.bawah}>

                <div className={style.tutorial}>

                    <div className={style.log}>
                        <img src='image/react.png' alt='react' />
                    </div>
                    <div className={style.dess}>
                        <h1>DESKRIPSI</h1>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. </h4>
                    </div>
                    <div className={style.container_bar}>
                        <div className={style.proggress_bar} style={{ height: `${persentase}%` }}></div>
                    </div>

                </div>


                <div className={style.tutorial}>

                    <div className={style.log}>
                        <img src='image/html.jpg' alt='html' />
                    </div>
                    <div className={style.dess}>
                        <h1>DESKRIPSI</h1>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. </h4>
                    </div>
                    <div className={style.container_bar}>
                        <div className={style.proggress_bar} style={{ height: `${persentase}%` }}></div>
                    </div>

                </div>

                <div className={style.tutorial}>

                    <div className={style.log}>
                        <img src='image/css.jpg' alt='css' />
                    </div>
                    <div className={style.dess}>
                        <h1>DESKRIPSI</h1>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. </h4>
                    </div>
                    <div className={style.container_bar}>
                        <div className={style.proggress_bar} style={{ height: `${persentase}%` }}></div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Profile;