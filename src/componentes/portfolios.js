import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

class Portfolios extends React.Component {
    render() {
        return (
            <div id="portfolios" className="section-padding">
            <Container>
                <p className="section-title text-center">My Remarkable Works</p>
                <Row>
                    <Col md={12}>
                        <div className="controls text-center">
                            <a> <button type="button" className="btn btn-outline-info">ALL</button> </a>
                            <a> <button type="button" className="btn btn-info">DESIGN</button></a>
                            <a><button type="button" className="btn btn-info">DEVELOPMENT</button></a>
                            <a><button type="button" className="btn btn-info">PRINT</button></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={4} lg={4} md={4} xl={4}> 
                        <div className="portfolio-item">
                            <div className="shot-item1">
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={4} md={4} xl={4}> 
                        <div className="portfolio-item">
                            <div className="shot-item2">
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={4} md={4} xl={4}> 
                        <div className="portfolio-item">
                            <div className="shot-item3">
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={4} lg={4} md={4} xl={4}> 
                        <div className="portfolio-item">
                            <div className="shot-item4">
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={4} md={4} xl={4}> 
                        <div className="portfolio-item">
                            <div className="shot-item5">
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={4} md={4} xl={4}> 
                        <div className="portfolio-item">
                            <div className="shot-item6">
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}
export default Portfolios;