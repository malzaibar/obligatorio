import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from "react-bootstrap";

class Resume extends React.Component {
    render() {
        return (
            <div id="resume" className="section-padding">
            <Container>
                <Row>
                    <Col md={6} lg={6} sm={6} className="border-left">
                        <div className="timeline-main-education">
                            <ul className="stepper stepper-vertical timeline timeline-simple pl-0">
                                <li className="timeline-header">
                                    <div className="timeline-header-icon">
                                    <FontAwesomeIcon icon={faGraduationCap} />
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
                                    <FontAwesomeIcon icon={faBriefcase} />
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
        );
    }
}
export default Resume;