import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "./services-and-pricing.style.scss"

const ServicesAndPricing = () => {
  return (
    <section className='services-and-pricing'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className='heading d-flex justify-content-between py-5'>
                        <h1>Servicing<br />and pricing</h1>
                        <h3>From 5%<br />of gross</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className='services-box'>
                        <a href="">
                            <div className='content d-flex justify-content-between align-items-center'>
                                <div className='heading'>
                                    <h1>01</h1>
                                    <h3>Truck<br />disptaching</h3>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                
                            </div>
                            <div className="left-link d-none">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </a>
                    </div>    
                </Col>
                <Col lg={6}>
                    <div className='services-box'>
                        <a href="">
                            <div className='content d-flex justify-content-between align-items-center'>
                                <div className='heading'>
                                    <h1>02</h1>
                                    <h3>Truck<br />disptaching</h3>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <div className="left-link d-none">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </a>
                    </div>    
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className='services-box'>
                        <a href="">
                            <div className='content d-flex justify-content-between align-items-center'>
                                <div className='heading'>
                                    <h1>03</h1>
                                    <h3>Truck<br />disptaching</h3>
                                </div>
                                <div className="icon ">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <div className="left-link d-none">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </a>
                    </div>    
                </Col>
                <Col lg={6}>
                    <div className='services-box'>
                        <a href="">
                            <div className='content d-flex justify-content-between align-items-center'>
                                <div className='heading'>
                                    <h1>04</h1>
                                    <h3>Truck<br />disptaching</h3>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <div className="left-link d-none">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </a>
                    </div>    
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ServicesAndPricing
