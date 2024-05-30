import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faHouse, faMoneyCheckDollar, faDollarSign } from '@fortawesome/free-solid-svg-icons'

import Work_bg from "../../../assets/images/to-work.webp";


import "./to-work.style.scss"

const ToWork = () => {
  return (
    <section className='to-word' style={{ backgroundImage: `url(${Work_bg})` }}>
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <div className='content-wrapper'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className='towork-heading-wrapper'>
                                        <h1>To Work</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <div className='towork-info-wrapper'>
                                        <FontAwesomeIcon icon={faTruckFast} />
                                        <h3>5000+</h3>
                                        <p>Loads Booked</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='towork-info-wrapper'>
                                        <FontAwesomeIcon icon={faHouse} />
                                        <h3><FontAwesomeIcon icon={faDollarSign} />7500+</h3>
                                        <p>Average Gross Revenew</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='towork-info-wrapper'>
                                        <FontAwesomeIcon icon={faMoneyCheckDollar} />
                                        <h3>58</h3>
                                        <p>Mln Lbs Dispatched</p>
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

export default ToWork
