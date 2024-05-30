import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Banner_bg from "../../../assets/images/banner-bg.png";

import ContactForm from '../../contact-form/contact-form.component'
import { useSelector } from "react-redux"

import "./banner.style.scss"

const Banner = () => {
    const {title1, title2, title3, buttonTitle} = useSelector((state)=>state.banner.value)
    // console.log(data)
    return (
        <section className='banner' style={{ backgroundImage: `url(${Banner_bg})` }}>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className='content-wrapper'>
                            <Container>
                                <Row>
                                    <Col lg={6}>
                                        <div className='banner-heading-wrapper'>
                                            <h1>{title1}<br />{title2}<br />{title3}</h1>
                                            <h5><a href="tel:+302 425 92 99">{buttonTitle}</a></h5>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <ContactForm />                    
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

export default Banner
