import arrowIcon from '../assets/shared/desktop/icon-arrow-right.svg';
import EarphoneThumb from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import HeadphoneThumb from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerThumb from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import ZX9Speaker from '../assets/home/desktop/image-speaker-zx9.png';
import ZX7Speaker from '../assets/home/desktop/image-speaker-zx7.jpg';
import YX1Earphone from '../assets/home/desktop/image-earphones-yx1.jpg';
import BestGear from '../assets/shared/desktop/image-best-gear.jpg';
import facebookIcon from '../assets/shared/desktop/icon-facebook.svg';
import instaIcon from '../assets/shared/desktop/icon-instagram.svg';
import twitterIcon from '../assets/shared/desktop/icon-twitter.svg';
import homeProductImg from '../assets/home/tablet/image-header.jpg';

export default function Home()
{
    return (
        <>
        <div className='mainProduct'>
          <h4 className='mainTitle'>NEW PRODUCT</h4>
          <h1 className='productTitle'>XX99 MARK II <br /> HEADPHONES</h1>
          <p className='productText'>Experience natural, lifelike audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.</p>
          <button className='seeProductBtn'>SEE PRODUCT</button>
        </div>
  
        <img className='mainProductImg' width={650} src={homeProductImg} />
        <ul className='productsList'>
          <li id='headphones' className='product'>
            <img className='productIcon' width={200} src={HeadphoneThumb} />
            <h3 className='productsTitle'>HEADPHONES</h3>
            <p className='shopBtn'>SHOP</p>
            <img className='arrow' src={arrowIcon} />
          </li>
          <li id='speakers' className='product'>
            <img className='productIcon'  width={200} src={SpeakerThumb} />
            <h3 className='productsTitle'>SPEAKERS</h3>
            <p className='shopBtn'>SHOP</p>
            <img className='arrow' src={arrowIcon} />
          </li>
          <li id='earphones' className='product'>
            <img className='productIcon'  width={200} src={EarphoneThumb} />
            <h3 className='productsTitle'>EARPHONES</h3>
            <p className='shopBtn'>SHOP</p>
            <img className='arrow' src={arrowIcon} />
          </li>
        </ul>
    
        <div className='speakerCanvas'>
          <div class="wave-circle"></div>
          <img id='zx9Thumb' width={250} height={320} src={ZX9Speaker} />
          <h1 id='speakerTitle'>ZX9 <br /> SPEAKER</h1>
          <p id='speakerText'>Upgrade to premium speakers that are <br /> phenomenally built to deliver truly remarkable <br /> sound.</p>
          <button id='productBtn'>SEE PRODUCT</button>
        </div>
    
        <div className='speakerrCanvas'>
          <img id='zx7Thumb' src={ZX7Speaker} />
          <button id='producttBtn'>SEE PRODUCT</button>
          <h1 id='speakerrTitle'>ZX7 SPEAKER</h1>
        </div>
    
        <div className='earphoneCanvas'>
          <h1 id='earphoneTitle'>YX1 EARPHONES</h1>
          <button id='productttBtn'>SEE PRODUCT</button>
        </div>
    
        <img className='earphoneImg' width={425} height={230} src={YX1Earphone} /> 
    
        <div id='lastCanvas'>
          <h1>BRINGING YOU THE <br /> <span className='titleSpan'>BEST AUDIO GEAR</span></h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers,
            and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br />
            experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile
            the <br /> best place to buy your portable audio equipment.
          </p>
          <img id='bestGear' width={400} src={BestGear} />
        </div>
    
        <footer>
          <hr className='orangeLine' />
          <h1 id='title' style={{marginTop: '10vh', marginLeft: '12vw'}}>audophile</h1>
          <ul id='menuNav' style={{marginLeft: '32vw'}}>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
    
          <p className='footerDesc'>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specialists who
            are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we’re open 7 <br /> days a week.
          </p>
    
          <ul className='iconList'>
            <li><img src={facebookIcon} /></li>
            <li><img src={twitterIcon} /></li>
            <li><img src={instaIcon} /></li>
          </ul>
    
          <p className='copyright'>Copyright 2021. All Rights Reserved</p>
        </footer>
        </>
      );
}