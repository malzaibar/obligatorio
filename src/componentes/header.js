import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Container>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#"> <img src="/images/logo.png" width="200" height="60"
                            className="d-inline-block align-top" alt=""></img></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse d-flex flex-row-reverse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#services" className="nav-link">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#resume" className="nav-link">RESUME</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#portfolios" className="nav-link">WORK</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Container>
                <div id="hero-area" className="hero-area-bg">
                    <div className="overlay"></div>
                    <Container>
                        <Row>
                            <Col md={12} sm={12} className="text-center">
                                <Container>
                                    <h3 className="display-4 text-center">Hi This is</h3>
                                    <h2 className="display-1 text-center">MARTA ALZAIBAR</h2>
                                    <h4 className="display-5 text-center">Front-end Web Developer and Graphic Designer</h4>
                                    <ul className="social-icons-list">
                                        <li className="social-icon">
                                            <a href="#" className="fb-ic mr-3" role="button">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li className="social-icon">
                                            <a href="#" className="tw-ic mr-3" role="button">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                        </li>
                                        <li className="social-icon">
                                            <a href="#" className="ins-ic mr-3" role="button">
                                            <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </li>
                                        <li className="social-icon">
                                            <a href="#" className="li-ic mr-3" role="button">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                            </a>
                                        </li>
                                        <li className="social-icon">
                                            <a href="#" className="gplus-ic mr-3" role="button">
                                            <FontAwesomeIcon icon={faGoogle} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="header-button wow fadeInUp">
                                        <a>
                                            <div className="btn btn-info" href="#" role="button">Get a Free Quote </div>
                                        </a>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        );
    }
}
export default Header;