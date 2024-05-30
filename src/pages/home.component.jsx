import React, { Fragment } from 'react'
import { Container, Row, Col } from "react-bootstrap"

import Banner from '../components/home/banner/banner.component'
import ServicesAndPricing from '../components/home/services-and-pricing/services-and-pricing.component'
import ToWork from '../components/home/to-work/to-work.component'
import GetStarted from '../components/home/get-started/get-started.component'

import "./home.style.scss"

function Home() {
  return (
    <Fragment>
         <Banner />
         <ServicesAndPricing />
         <ToWork />
         <GetStarted />
    </Fragment>
  )
}

export default Home
