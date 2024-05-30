import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

import { Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"

import Header_logo from "../../assets/images/header-logo.png";

import './navbar.style.scss'

const Navbar = () => {
    const navigations = useSelector((state)=>state.navigations.navigationMenu)
    const renderNav = navigations.map((menu, index)=>{
        if(menu.innerMenu != undefined && menu.innerMenu.length>0){
             return(
                <li className='link' key={index}>
                    <Link to={menu.path}>{menu.title}</Link>
                    <div className='inner-links d-none'>
                        <ul>
                            {
                                menu.innerMenu.map((innerMenu, innerIndex)=>{
                                    return <li className='inner-link' key={innerIndex}><Link to={innerMenu.path}>{innerMenu.title}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                </li>
             )
        }else{
            return(
                <li className='link' key={index}>
                    <Link to={menu.path}>{menu.headerLogo ? <img src={Header_logo} alt="Header Logo"/> : menu.title}</Link>
                </li>
            )
        }
    })

    return (
        <div className='nav-menu'>
            <Row>
                <Col lg={12} className='p-0'>
                    <div className='top-navigation container'>
                        <ul className='nav-links'>
                            {renderNav}
                            {/* <li className='link'>
                                <Link to='/'><img src={Header_logo} alt="Header Logo"/></Link>
                            </li>
                            <li className='link'>
                                <Link to='/about'>About</Link>
                                <div className='inner-links d-none'>
                                    <ul>
                                        <li className='inner-link'><Link to='/services'>Careers</Link></li>
                                        <li className='inner-link'><Link to='/services'>Success Stories</Link></li>
                                        <li className='inner-link'><Link to='/services'>Testimonials</Link></li>
                                        <li className='inner-link'><Link to='/services'>Earn Rewards with Our Referral Program</Link></li>
                                        <li className='inner-link'><Link to='/services'>Blogs</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='link'>
                                <Link to='/services'>Services</Link>
                                <div className='inner-links d-none'>
                                    <ul>
                                        <li className='inner-link'><Link to='/services'>Truck Dispatching</Link></li>
                                        <li className='inner-link'><Link to='/services'>Billing</Link></li>
                                        <li className='inner-link'><Link to='/services'>Document Management</Link></li>
                                        <li className='inner-link'><Link to='/services'>Factoring Service</Link></li>
                                        <li className='inner-link'><Link to='/services'>Rate Negotiation</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='link'>
                                <Link to='/truck-types'>Truck types</Link>
                                <div className='inner-links d-none'>
                                    <ul>
                                        <li className='inner-link'><Link to='/services'>Dry Van</Link></li>
                                        <li className='inner-link'><Link to='/services'>Step Deck</Link></li>
                                        <li className='inner-link'><Link to='/services'>Reefer</Link></li>
                                        <li className='inner-link'><Link to='/services'>Flatbed</Link></li>
                                        <li className='inner-link'><Link to='/services'>Power Only</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='link'><Link to='/how-to-start'>How to start</Link></li>
                            <li className='link'><Link to='/shippers'>Shippers</Link></li>
                            <li className='link'><Link to='/faq'>FAQ</Link></li>
                            <li className='link'><Link to='/contact-us'>Contact us</Link></li>
                            <li className='link'><Link to='tel:+1 (302) 425-93-15'>+1 (302) 425-93-15</Link></li> */}
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar
