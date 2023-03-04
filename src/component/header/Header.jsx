import React from 'react';
import { Link } from 'react-router-dom';
import { useResolvedPath } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import { useEffect } from 'react';
import './header.scss';

const Header = ({toggleHeader, toggleHandler}) => {
    const headerData = {
        name: 'Salomi Afolabi',
        role: 'Web Developer',
        imageThumb: require('../images/img_thumb.jpg'),
        social: {
            facebook: 'https://facebook.com/onome',
            twitter: 'https://twitter.com/@onomsky',
            instagram: 'https://instagram.com/@onomsky',
            youtube: 'https://youtube.com/@onomsky',
            dribbble: 'https://dribbble.com/@onomsky',
        }
    };
    const [currentPath, setCurrentPath] = useState();
    const match = useResolvedPath();
    useEffect(() => {
        setCurrentPath(match.pathname)
    }, [match])
  return (
    <>
        <div className='header'>
            <div className={toggleHeader ? 'mobile-header py-2 px-3 mt-4 push' : 'mobile-header py-2 px-3 mt-4'}>
                <button className="menu-icon mr-2" onClick={toggleHandler}>
                    <span className='mdi mdi-menu'></span>
                </button>
                <Link to='/' className='logo'>
                    <img src={headerData.imageThumb} alt={headerData.name}/>
                </Link>
                <Link to='/' className='site-title dot ml-2'>
                    {headerData.name}
                </Link>
            </div>
        </div>
        <header className={ toggleHeader ? 'left shadow-dark open' : 'left shadow-dark'}>
            <button className='close' type='button' aria-label='Close' onClick={toggleHandler}>
                <span aria-hidden='true' className='mdi mdi-close'></span>
            </button>
            <div className="header-inner d-flex align-items-start flex-column">
                <Link to='/'>
                    <img src={headerData.imageThumb} alt={headerData.name}/>
                </Link>
                <Link to='/' className='site-title dot mt-3'>
                    {headerData.name}
                </Link>
                <span className="site-slogan">{headerData.role}</span>
                <nav>
                    <ul className="vertical-menu scrollspy">
                        <li>
                            { currentPath === '/' ? (
                                <ScrollLink activeClass='active' 
                                to='section-home' 
                                spy={true} smooth={true} 
                                offset={-50} 
                                duration={500}>
                                    <span className="mdi mdi-home-outline"></span> Home
                                </ScrollLink>
                                ) 
                                : (
                                <Link to='/'><span className="mdi mdi-home-outline"></span> Home</Link>
                                )
                            }
                        </li>
                        <li>
                            { currentPath === '/' ? (
                                <ScrollLink activeClass='active' 
                                to='section-about' 
                                spy={true} smooth={true} 
                                offset={-50} 
                                duration={500}>
                                    <span className="mdi mdi-account-outline"></span> About
                                </ScrollLink>
                                ) 
                                : (
                                <Link to='/'><span className="mdi mdi-account-outline"></span> About</Link>
                                )
                            }
                        </li>
                        <li>
                            { currentPath === '/' ? (
                                <ScrollLink activeClass='active' 
                                to='section-services' 
                                spy={true} smooth={true} 
                                offset={-50} 
                                duration={500}>
                                    <span className="mdi mdi-lightbulb-on-outline"></span> Services
                                </ScrollLink>
                                ) 
                                : (
                                <Link to='/'><span className="mdi mdi-lightbulb-on-outline"></span> Services</Link>
                                )
                            }
                        </li>
                        <li>
                            { currentPath === '/' ? (
                                <ScrollLink activeClass='active' 
                                to='section-resume' 
                                spy={true} smooth={true} 
                                offset={-50} 
                                duration={500}>
                                    <span className="mdi mdi-school-outline"></span> Resume
                                </ScrollLink>
                                ) 
                                : (
                                <Link to='/'><span className="mdi mdi-school-outline"></span> Resume</Link>
                                )
                            }
                        </li>
                        <li>
                            { currentPath === '/' ? (
                                <ScrollLink activeClass='active' 
                                to='section-portfolios' 
                                spy={true} smooth={true} 
                                offset={-50} 
                                duration={500}>
                                    <span className="mdi mdi-view-grid-outline"></span> Works
                                </ScrollLink>
                                ) 
                                : (
                                <Link to='/'><span className="mdi mdi-view-grid-outline"></span> Works</Link>
                                )
                            }
                        </li>
                        <li>
                            { currentPath === '/' ? (
                                <ScrollLink activeClass='active' 
                                to='section-blogs' 
                                spy={true} smooth={true} 
                                offset={-50} 
                                duration={500}>
                                    <span className="mdi mdi-pencil-outline"></span> Blogs
                                </ScrollLink>
                                ) 
                                : (
                                <Link to='/'><span className="mdi mdi-pencil-outline"></span> Blogs</Link>
                                )
                            }
                        </li>
                        <li>
                            { currentPath === '/' ? (
                                <ScrollLink activeClass='active' 
                                to='section-contact' 
                                spy={true} smooth={true} 
                                offset={-50} 
                                duration={500}>
                                    <span className="mdi mdi-phone-outline"></span> Contact
                                </ScrollLink>
                                ) 
                                : (
                                <Link to='/'><span className="mdi mdi-phone-outline"></span> Contact</Link>
                                )
                            }
                        </li>
                    </ul>
                </nav>
                <div className="footer mt-auto">
                    <ul className="social-icons list-inline">
                        {!headerData.social.twitter ? null : (
                            <li className="list-inline-item">
                                <a href={headerData.social.twitter}>
                                    <span className="mdi mdi-twitter"></span>
                                </a>
                            </li>
                        )}
                        {!headerData.social.instagram ? null : (
                            <li className="list-inline-item">
                                <a href={headerData.social.instagram}>
                                    <span className="mdi mdi-instagram"></span>
                                </a>
                            </li>
                        )}
                        {!headerData.social.facebook ? null : (
                            <li className="list-inline-item">
                                <a href={headerData.social.facebook}>
                                    <span className="mdi mdi-facebook"></span>
                                </a>
                            </li>
                        )}
                        {!headerData.social.youtube ? null : (
                            <li className="list-inline-item">
                                <a href={headerData.social.youtube}>
                                    <span className="mdi mdi-youtube"></span>
                                </a>
                            </li>
                        )}
                        {!headerData.social.dribbble ? null : (
                            <li className="list-inline-item">
                                <a href={headerData.social.dribbble}>
                                    <span className="mdi mdi-skype-business"></span>
                                </a>
                            </li>
                        )}
                    </ul>
                    <span className="copyright">
                        &copy; {new Date().getFullYear()} Portfolio Website
                    </span>
                </div>
            </div>
        </header>
    </>
  );
}
export default Header;
