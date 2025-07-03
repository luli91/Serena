import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Image } from '@chakra-ui/react'
import myImage from '../../public/LogoSerenaShoes.png'


const Footer = () => {
    return (
        <footer className="nav" style={{ display: 'flex', justifyContent: 'space-between', paddingTop:'30px' }}>
        <div>
        <Image className="logoSerena" src={myImage} alt='logo serena' />
        </div>
        <div>
            <p style={{ fontSize: 'medium', textAlign: 'center', fontFamily: "'Bricolage Grotesque', sans-serif", paddingRight: '20px' }}>Teléfono: +54 11 1234-5678</p>
            <p style={{ fontSize: 'medium', textAlign: 'center', fontFamily: "'Bricolage Grotesque', sans-serif", paddingRight: '20px' }}>Email: ejemplo@dominio.com</p>
            <p style={{ fontSize: 'medium', textAlign: 'center', fontFamily: "'Bricolage Grotesque', sans-serif", paddingRight: '20px' }}>Dirección: Calle Falsa 123, Buenos Aires, Argentina</p>
        </div>
        <div>
            <a href="https://www.facebook.com/tu-página"><FaFacebook /> Facebook</a>
            <a href="https://wa.me/tunúmero"><FaWhatsapp /> WhatsApp</a>
            <a href="https://www.instagram.com/tu-usuario"><FaInstagram /> Instagram</a>
        </div>
        </footer>
    );
};

export default Footer;
