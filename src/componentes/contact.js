import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from "react-bootstrap";

class Contact extends React.Component {
    render() {
        return (
            <section>
                <div id="contact" className="section-padding">
                    <div className="contact-form">
                        <Container>
                            <Row>
                                <Col md={6} lg={6} sm={12}>
                                    <div className="contact-block">
                                        <h5>CONTACT FORM</h5>
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <input type="text" className="form-control" id="validationCustom01"
                                                        placeholder="Name">
                                                    </input>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email">
                                                    </input>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <input type="text" className="form-control" id="subject" placeholder="Subject">
                                                    </input>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <textarea className="form-control" id="message" placeholder="Your Message" rows="5"
                                                        data-error="Write your message" required></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-info">SEND MESSAGE</button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                                <Col md={6} lg={6} sm={12}>
                                    <div className="footer-right-area">
                                        <h5>CONTACT ADDRESS</h5>
                                        <div className="footer-right-contact border">
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                </div>
                                                <div>Montevideo, URUGUAY</div>
                                            </div>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </div>
                                                <p>
                                                    <a href="mailto:martalzaib@gmail.com">martalzaib@gmail.com</a>
                                                </p>
                                                <p>
                                                    <a href="mailto:martalzaib@gmail.com">martalzaib@gmail.com</a>
                                                </p>
                                            </div>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                                </div>
                                                <p><a href="#">+(00) 598 993 85 23</a></p>
                                                <p><a href="#">+(00) 598 993 85 23</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="text-center">
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div id="map-container">
                                        <img className="img-map" src="/images/mapa.png" alt></img>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact;