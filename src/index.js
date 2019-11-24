import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

class Obligatorio extends React.Component {

    render() {
        return (
            <div>
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
                                                <a href="#" className="fb-ic mr-3" role="button"><i
                                                    className="fab fa-lg fa-facebook-f"></i></a>
                                            </li>
                                            <li className="social-icon">
                                                <a href="#" className="tw-ic mr-3" role="button">
                                                    <i className="fab fa-lg fa-twitter"></i></a>
                                            </li>
                                            <li className="social-icon">
                                                <a href="#" className="ins-ic mr-3" role="button"><i className="fab fa-instagram"></i>
                                                </a></li>
                                            <li className="social-icon">
                                                <a href="#" className="li-ic mr-3" role="button"><i
                                                    className="fab fa-lg fa-linkedin-in"></i></a>
                                            </li>
                                            <li className="social-icon">
                                                <a href="#" className="gplus-ic mr-3" role="button"><i className="fab fa-google"></i></a>
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
                <div id="resume" className="section-padding">
                    <Container>
                        <Row>
                            <Col md={6} lg={6} sm={6} className="border-left">
                                <div className="timeline-main-education">
                                    <ul className="stepper stepper-vertical timeline timeline-simple pl-0">
                                        <li className="timeline-header">
                                            <div className="timeline-header-icon">
                                                <i className="fas fa-graduation-cap"></i>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <p className="timeline-title">EDUCATION</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="step-content p-4 hoverable">
                                                <div className="education">
                                                    <h6>Bsc In CSE - Yale University</h6>
                                                    <p className="text-muted mt-3">2012-2017</p>
                                                    <p className="mb-0">Expenses as material breeding insisted building to in. Continual
                                                        so distrusts pronounce by unwilling listening. Thing do taste on we manor.
                                        </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="step-content p-4 hoverable">
                                                <div className="education">
                                                    <h6>Higher Secondary School - San Francisco College</h6>
                                                    <p className="text-muted mt-3">2010-2012</p>
                                                    <p className="mb-0">Expenses as material breeding insisted building to in. Continual
                                                        so
                                            distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="step-content p-4 hoverable">
                                                <div className="education">
                                                    <h6>Secondary School - Labratory High School</h6>
                                                    <p className="text-muted mt-3">2005-2010</p>
                                                    <p className="mb-0">Expenses as material breeding insisted building to in. Continual
                                                        so
                                            distrusts pronounce by nwilling listening. Thing do taste on we manor.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={6} lg={6} sm={6} className="border-left">
                                <div className="timeline-main">
                                    <ul className="stepper stepper-vertical timeline timeline-simple pl-0">
                                        <li className="timeline-header">
                                            <div className="timeline-header-icon">
                                                <i className="fas fa-briefcase"></i>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <p className="timeline-title">EXPERIENCE</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="step-content p-4 hoverable">
                                                <div className="experience">
                                                    <h6>Art Director - Tesla Inc.</h6>
                                                    <p className="text-muted mt-3">Jan 2018 - Present</p>
                                                    <p className="mb-0">Expenses as material breeding insisted building to in. Continual
                                                        so
                                            distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="step-content p-4 hoverable">
                                                <div className="experience">
                                                    <h6>UX/UI Designer - Samsung</h6>
                                                    <p className="text-muted mt-3">Nov 2016 - Dec 2017</p>
                                                    <p className="mb-0">Expenses as material breeding insisted building to in. Continual
                                                        so
                                            distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="step-content p-4 hoverable">
                                                <div className="experience">
                                                    <h6>Intern UI Designer - UIdeck</h6>
                                                    <p className="text-muted mt-3">Mar 2015 - Oct 2016</p>
                                                    <p className="mb-0">Expenses as material breeding insisted building to in. Continual
                                                        so
                                            distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
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
                <section id="counter" className="counter-section section-padding">
                    <div className="overlay"></div>
                    <Container>
                        <Row>
                            <Col md={3} sm={6} className="text-center">
                                <div className="counter-section text-center">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512">
                                            <path className="counter-icon"
                                                d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
                                        </svg>
                                    </div>
                                    <div className="counterUp">250</div>
                                    <p>PROJECT WORKING</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="text-center">
                                <div className="counter-section">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512">
                                            <path className="counter-icon"
                                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                                        </svg>
                                    </div>
                                    <div className="counterUp">950</div>
                                    <p>PROJET DONE</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="text-center">
                                <div className="counter-section">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 384 512">
                                            <path className="counter-icon"
                                                d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" />
                                        </svg>
                                    </div>
                                    <div className="counterUp">150</div>
                                    <p>AWARDS RECEIVED</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="text-center">
                                <div className="counter-section">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512">
                                            <path className="counter-icon"
                                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                                        </svg>
                                    </div>
                                    <div className="counterUp">299</div>
                                    <p>HAPPY CLIENTS</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
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
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </div>
                                                    <div>Montevideo, URUGUAY</div>
                                                </div>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fa fa-envelope"></i>
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
                                                        <i className="fa fa-phone">
                                                        </i>
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
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="img-thumb">
                                        <img className="ing-fluid" src="/images/mapa.png" alt>
                                        </img>
                                    </div>
                                </Col>
                            </Container>
                        </div>
                    </div>
                </section>
                <footer className="footer-area section-padding">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="footer-text text-center">
                                    <ul className="social-icons-list">
                                        <li className="social-icon">
                                            <a href="#" className="fb-ic mr-3" role="button"><i className="fab fa-lg fa-facebook-f"></i></a>
                                        </li>
                                        <li className="social-icon">
                                            <a href="#" className="tw-ic mr-3" role="button"><i className="fab fa-lg fa-twitter"></i></a>
                                        </li>
                                        <li className="social-icon">
                                            <a href="#" className="ins-ic mr-3" role="button"><i className="fab fa-instagram"></i>
                                            </a></li>
                                        <li className="social-icon">
                                            <a href="#" className="li-ic mr-3" role="button"><i
                                                className="fab fa-lg fa-linkedin-in"></i></a>
                                        </li>
                                        <li className="social-icon">
                                            <a href="#" className="gplus-ic mr-3" role="button"><i className="fab fa-google"></i></a>
                                        </li>
                                    </ul>
                                    <p>Copyright © 2018 UIdeck All Right Reserved</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(<Obligatorio />, document.getElementById("root"));