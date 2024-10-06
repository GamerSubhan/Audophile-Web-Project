import cartLogo from '../assets/shared/desktop/icon-cart.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header()
{
    const navigate = useNavigate();
    const headCanvas = document.querySelector('.headCanvas');
    
    const homePage = () => {
        navigate('/');
        headCanvas.style.height = '100vh';
    }

    const headphonePage = () => {
        navigate('/headphones');
        headCanvas.style.height = '40vh';
    }

    return(
    <div className='headCanvas'>
        <h1 id='title'>audophile</h1>
        <ul id='menuNav'>
          <li onClick={homePage}>HOME</li>
          <li onClick={headphonePage}>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
        <img className='cartBtn' src={cartLogo} />
        <hr className='menuLine' />
      </div>
    );
}