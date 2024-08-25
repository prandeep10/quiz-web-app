import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                  
                    <div className="footer-brand-info">
                        <h4 className="footer-brand-name">OVO PVT Ltd</h4>
                        <p className="footer-brand-about">Fun & Learn</p>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="footer-address">
                        <i className="footer-icon fas fa-map-marker-alt"></i>
                        <p>Jalukbari, Guwahati-13</p>
                    </div>
                    <div className="footer-phone">
                        <i className="footer-icon fas fa-phone-alt"></i>
                        <p>+123 456 7890</p>
                    </div>
                </div>
                <div className="footer-links">
                    <h4 className="footer-links-heading">Quick Links</h4>
                    <ul className="footer-links-list">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/challenges'>Challenge</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/discussion'>Discussion Room</Link></li>
                       
                    </ul>
                </div>
                <div className="footer-social">
                    <h4 className="footer-social-heading">Follow Us</h4>
                    <div className="footer-social-icons">
                        <a href="#"><i className="footer-icon fab fa-facebook"></i></a>
                        <a href="#"><i className="footer-icon fab fa-twitter"></i></a>
                        <a href="#"><i className="footer-icon fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;