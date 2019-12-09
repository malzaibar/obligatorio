import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

class Services extends React.Component {
    render() {
        return (
            <section id="services">
                    <Container className="text-center">
                        <div className="what">
                            <h1>What I do</h1>
                        </div>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={6} lg={3} xs={12}>
                                <div className="service-item">
                                    <div className="icon text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 8 8">
                                            <path className="service-icon"
                                                d="M0 0v3h3v-3h-3zm5 0v3h3v-3h-3zm-5 5v3h3v-3h-3zm5 0v3h3v-3h-3z" />
                                        </svg></div>
                                    <div className="card-body text-center">
                                        <h6>
                                            <a className="service-item-title" href="#">FRONT-END DEVELOPMENT</a>
                                        </h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                condi.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={3} xs={12}>
                                <div className="service-item text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                                        <path className="service-icon"
                                            d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
                                    </svg>
                                    <div className="card-body text-center">
                                        <h6>
                                            <a className="service-item-title" href="#">GRAPHIC DESIGN</a>
                                        </h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                condi.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={3} xs={12}>
                                <div className="service-item text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                                        <path className="service-icon"
                                            d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
                                    </svg>
                                    <div className="card-body text-center">
                                        <h6>
                                            <a className="service-item-title" href="#">BUSINESS BRANDING</a>
                                        </h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                condi.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={3} xs={12}>
                                <div className="service-item text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512">
                                        <path className="service-icon"
                                            d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z" />
                                    </svg>
                                    <div className="card-body text-center">
                                        <h6>
                                            <a className="service-item-title" href="#">CONSULTANCY</a>
                                        </h6>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                condi.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
        );
    }
}
export default Services;