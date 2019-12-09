import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area section-padding">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="footer-text text-center">
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
                            <p>Copyright © 2018 UIdeck All Right Reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        );
    }
}
export default Footer;