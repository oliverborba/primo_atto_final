import './styles.css';

const Sobre = () => {
    return (
        <section className="a-wrapper">
            <div className="paddings innerWidth flexCenter a-container">
                <div className="flexColStart a-left">
                    <div className="a-title">
                        <h1 className="orangeText">
                            Profissionais da área da saúde,<br />
                            especializados em desenvolvimento infantil<br />
                        </h1>
                    </div>
                    <div className="flexColStart a-des">
                        <span className="secondaryText">
                            Atuando há mais de seis anos junto a crianças com as mais diversas dificuldades.<br />
                            Acreditamos que a generalização da aprendizagem com intervenção individualizada e personalizada são o segredo para a qualidade de vida.
                        </span>
                    </div>
                    <div className="a-title">
                        <h2 className="orangeText">
                            Área de Atuação<br />
                        </h2>
                    </div>
                    <div className="flexColStart a-des">
                        <span className="secondaryText">
                            Atuamos junto a crianças, adolescentes e adultos que estejam dentro do Transtorno do Espectro do Autismo. Entre as especialidades oferecidas estão Musicoterapia, Psicologia e Terapia Ocupacional.<br />
                            Trabalhamos com crianças, adolescentes e adultos que possuem os mais diversos diagnósticos, tais como:<br />
                            <ul>
                                <li>Síndrome de Down</li>
                                <li>Síndrome de Prader Willi</li>
                            </ul>
                        </span>
                        <span className="secondaryText">
                            Buscamos promover a conscientização do Follow Up em crianças que estejam em grupos de risco, para que possam ser encaminhadas para intervenção precoce mediante qualquer atraso de desenvolvimento.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
