import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div >
        <ul className={style.list}>
                <li className = {style.listcontent}><Link to={`/contact`} className={style.contactabout}>Contact</Link></li>
                <li className = {style.listcontent}><Link to={`/about`} className={style.contactabout}>About</Link></li>
                <span></span>
                <li className = {style.listcontent}>Email:dota2home@wodota.com</li>
                <li className = {style.listcontent}>Phone:(206)9283870</li>
                <li className = {style.listcontent}>Seattle, WA 981115</li>
            </ul>
    </div>
);

export default Footer;
