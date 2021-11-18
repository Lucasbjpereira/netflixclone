import React from "react";
import './Header.css';

const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img alt="logotipo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img alt="Usuário" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
        </header>
    );
}

export default Header;