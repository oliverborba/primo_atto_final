import './styles.css';

const Psi = () => {
  return (
    <section className="p-wrapper">
      <div className="paddings innerWidth flexCenter p-container">
        <div className="p-left">
          <span className="orangeText">Rafael Marrero Brignol</span>
          <span className="primaryText"><br />Psicólogo Clínico (CRP 05/67479),<br />Musicoterapeuta AMT-RJ (649/1) (CRP 05/67479)</span>
          <span className="secondaryText">
            <ul>
              <li>Formado pela Universidade da Região da Campanha (URCAMP-RS) no ano de 2011</li>
              <li>Especialista em Musicoterapia pelo Conservatório Brasileiro de Música (CBM-RJ) em 2013</li>
              <li>Mestre em Educação pela Universidade Federal de Pelotas (UFPEL-RS) em 2016</li>
              <li>Especialista em Saúde Pública com Ênfase na Saúde da Família – UNINTER – 2019</li>
              <li>Especialista em Terapia Cognitivo-Comportamental IESLA - 2024</li>
              <li>Possui cursos na área Comportamental como em intervenções em ABA (Análise do Comportamento Aplicada) e experiência com o modelo DENVER voltado para atendimentos a pessoas dentro do espectro autista.</li>
            </ul>
          </span>
        </div>
        <div className="p-right">
          <div className="image-container">
            <img src="./rafa.png" alt="Rafael Marrero Brignol - Psicólogo Clínico - Musicoterapeuta" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Psi;
