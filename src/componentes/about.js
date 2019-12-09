import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="img-thumb">
                                <img className="ing-fluid" src="/images/martita.jpg" alt>
                                </img>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="profile-wrapper">
                                <h1>Hi Guys!</h1>
                                <p>Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum eleifend
                                    sollicitudin lacinia justo id turpis. Nec convallis integer. Odio eget duis. Nulla aenean
                                    et. Blandit varius sollicitudin. Pellentesque leo primis neque urna magnis. Elit ut
                                    sollicitudin. Et est a nam dolores eget itaque sagittis et parturient duis est eleifend
                                    sociis rutrum odio viverra integer.</p>
                                <div className="about-profile">
                                    <Row>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <span className="pro-title">Name</span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <span calss="pro-detail">Marta Alzáibar</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <span className="pro-title">Age</span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <span calss="pro-detail">37</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <span className="pro-title">Experience</span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <span calss="pro-detail">0 year</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <span className="pro-title">Country</span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <span calss="pro-detail">Uruguay</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <span className="pro-title">Location</span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <span calss="pro-detail">Montevideo</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <span className="pro-title">e-mail</span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <span calss="pro-detail">martalzaib@gmail.com</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <span className="pro-title">Phone</span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <span calss="pro-detail">+(00) 598 993 5823</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <span className="pro-title">Freelance</span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <span calss="pro-detail">Available</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} md={12} sm={12} xs={12}>
                                            <div className="buttons-container">
                                                <button type="button" className="btn btn-info">DOWNLOAD RESUME</button>
                                                <button type="button" className="btn btn-danger">CONTACT ME</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default About;