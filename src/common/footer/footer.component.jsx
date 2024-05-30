import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

import "./footer.style.scss"

function Footer() {
  return (
    <footer>
         <div className='footer-content'>
            <p className='text-center'>© {new Date().getFullYear()}. All rights reserved by <Link to="/">SM Logistics LLC</Link>.</p>
         </div>
    </footer>
  )
}

export default Footer
