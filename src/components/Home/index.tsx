import './styles.css'

const Home = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">
                <div className=" flexColStart hero-left">
                    <div className="hero-title">
                        <h1>
                            Terapia Ocupacional,<br />
                            Psicologia e <br /> Musicoterapia.
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className='heroSpan'>Desenvolvimento infantil, com foco na qualidade de vida da criança e da família.</span>
                    </div>
                </div>

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./autismo.jpg" alt="Imagem simboliza o autismo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
