import './styles.css'

const To = () => {
    return (
        <section className="t-wrapper">
            <div className="paddings innerWidth flexCenter t-container">

                <div className="t-left">
                    <div className="image-container">
                        <img src="./laisa_to.png" alt="Laísa Borba - Terapeuta Ocupacional" loading="lazy"/>
                    </div>
                </div>


                <div className="flexColStart t-right">
                    <span className="orangeText">Laísa Borba</span>
                    <span className="primaryText"> Terapeuta Ocupacional</span>
                    <span className="secondaryText">
                        <ul>
                            <li>Graduada em Terapia Ocupacional pelo Centro Universitário da Serra Gaúcha</li>
                            <li>Especialização em Intervenção Precoce no Autismo Baseado no Modelo Denver pelo CBI of Miami</li>
                            <li>Especialização em Saúde Pública com Ênfase em Saúde da Familia pela Uninter</li>
                            <li>Certificação Internacional em Integração Sensorial de Ayres, Conceito Bobath entre outros cursos de aprimoramento</li>
                        </ul>
                    </span>
                </div>
            </div>
        </section>
        

    )
}

export default To