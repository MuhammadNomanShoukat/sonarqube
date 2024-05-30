import React from 'react'
import { Row, Col, Container } from "react-bootstrap"

import ContactForm from '../../contact-form/contact-form.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

import "./get-started.style.scss"

const GetStarted = () => {
  return (
    <section className='get-started'>
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <div className='content-wrapper'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className='started-heading-wrapper'>
                                        <h1>How To Get Started</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className='started-info-wrapper'>
                                        <p>
                                        Logity Dispatch's job is to provide the best loads in the market for every driver. Our expert team ensures that drivers from any region and state get high-quality and best-paying loads.
                                        </p>
                                        <ul>
                                            <li>Fill out the form or call us: (302) 425 92 99 <FontAwesomeIcon icon={faArrowRight} /></li>
                                            <li>Upload your MC Authority, W9 Form, and Certificate of Insurance <FontAwesomeIcon icon={faArrowRight} /></li>
                                            <li>Sign the Dispatch Agreement completed by our team <FontAwesomeIcon icon={faArrowRight} /></li>
                                            <li>We are all set. Let’s get to work <FontAwesomeIcon icon={faArrowRight} /></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='started-form-wrapper'>
                                        <ContactForm />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default GetStarted
