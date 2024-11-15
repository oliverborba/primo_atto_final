// components/Common/Header.tsx
import { useState } from 'react';
import { Link } from "react-router-dom";
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import './styles.css';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened: boolean) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: menuOpened ? "0" : "-100%" };
        }
        return {};
    };

    return (
        <header className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./file.png" alt="logo" width={150} />

                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <nav className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <Link to="/">Home</Link>
                        <Link to="/sobre">Sobre</Link>
                        <Link to="/profissionais">Quem somos</Link>
                        <Link to="/localizacao">Onde Estamos</Link>

                    </nav>
                </OutsideClickHandler>

                <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </header>
    );
};

export default Header;
