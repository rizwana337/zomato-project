import './Footer.css';
import React from 'react';
import zomato from '../../utils/images/zomato.png';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { TfiFacebook } from 'react-icons/tfi';
import { TbBrandGithub } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <a href='/'><img id='logo' src={zomato} alt="Zomato" loading='lazy' /></a>

                {/* <div className='copyright'>
                    2023 © Zomato Clone™<br />
                    created by <a href='https://drive.google.com/file/d/1auvb9dgjgO908V6rFXKSX0GefXIVlal5/view?usp=drive_link' target='_blank' id='creator'>Rizwana</a>
                </div> */}
                <div className='social-media'>
                    <a href='https://www.linkedin.com/in/syed-rizwana-206509227/' target='_blank'><ImLinkedin2 /></a>
                    <a href='https://github.com/rizwana337' target='_blank'><TbBrandGithub /></a>
         </div>
            </div>
        </div>
    )
}

export default Footer;