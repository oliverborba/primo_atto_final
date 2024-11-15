// components/Common/Footer.tsx
import FloatingButton from '../../FloatingButton';
import './styles.css';

const Footer = () => {
    return (
        <footer className="f-wrapper">
            <div className="flexCenter paddings innerWidth f-container">
                <div className="flexColStart f-left">
                    <img src="./file.png" alt="Logo Primo Atto" width={180} />
                    
                </div>
                <div className="flexColStart f-right">
                    <span className="primaryText">Endereço</span>
                    <span className="secondaryText">
                        Rua Barata Ribeiro, 774 Sl. 409 e 410<br />
                        Copacabana<br />
                        Rio de Janeiro
                    </span>
                    <span className="secondaryText">
                        <strong>Telefone:</strong> (21) 99402-1137<br />
                        <strong>Email:</strong> contato@primoatto.com.br
                    </span>
                </div>
                <FloatingButton />
            </div>

        </footer>
    );
};

export default Footer;
