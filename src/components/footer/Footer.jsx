import React from 'react'
import "./Footer.scss"
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <footer>
        <div className="footer__top">
            <div className="top__left">
                <div className="quick__link">
                    <h1>HELP</h1>
                    <ul>
                        <li>FAQs</li>
                        <li>Contact Supports</li>
                    </ul>
                </div>
                <div className="quick__link">
                    <h1>ABOUT</h1>
                    <ul>
                        <li>About us</li>
                        <li>Carrers</li>
                        <li>News</li>
                        <li>Enviromental Impact</li>
                    </ul>
                </div>
                <div className="quick__link">
                    <h1>GALA COIN</h1>
                    <ul>
                        <li>Get GALA</li>
                        <li>Smart Contract</li>
                    </ul>
                </div>
            </div>
            <div className="top__right">
                <h1>JOIN OUR COMMUNITY</h1>
                <ul>
                    <li>
                        <div className="icon__wrapper twitter">
                            <TwitterIcon className='icon' />
                        </div>
                    </li>
                    <li>
                        <div className="icon__wrapper facebook">
                            <FacebookIcon className='icon' />
                        </div>
                    </li>
                    <li>
                        <div className="icon__wrapper utube">
                            <YouTubeIcon className='icon' />
                        </div>
                    </li>
                    <li>
                        <div className="icon__wrapper github">
                            <GitHubIcon className='icon' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer__bottom">
            <div className="options">
                <span>© 2021 Gala Games</span>
                <span className='dot'>•</span>
                <span>Terms and Conditions</span>
                <span className='dot'>•</span>
                <span>Privacy Policy</span>
                <span className='dot'>•</span>
                <span>Privacy Settings</span>
                <span className='dot'>•</span>
                <span>Launcher EULA</span>
            </div>
            <div className="switch__language">
                <span className='lang'>Language:</span>
                <div className="switch__container">
                    <div className="language__container">
                        <div className="country">
                            <img src="https://countryflagsapi.com/png/america" alt="" />
                            <span>EN</span>
                            </div>
                            <span>^</span>
                    </div> 
                    <div className="lang__options">
                        <div className="language__container">
                            <div className="country">
                                <img src="https://countryflagsapi.com/png/america" alt="" />
                                <span>EN</span>
                                </div>
                        </div> 
                        <div className="language__container">
                            <div className="country">
                                <img src="https://countryflagsapi.com/png/america" alt="" />
                                <span>EN</span>
                                </div>
                        </div> 
                        <div className="language__container">
                            <div className="country">
                                <img src="https://countryflagsapi.com/png/america" alt="" />
                                <span>EN</span>
                                </div>
                        </div> 
                    </div> 
                        
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer