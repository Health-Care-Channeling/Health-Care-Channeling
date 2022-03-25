import React, { Component } from 'react'
import logo from "../images/op.png";
export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    {/* <a class="navbar-brand" > CRUD App using MERN stack
                    </a> */}

                    <button className="navbar-toggler " type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <img src={logo}width="110" height="110" className="d-inline-block align-top" alt=""/>

                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mb-3">
                            <li className="nav-item">
                                <a className="nav-link btn-outline-secondary btn-lg" aria-current="page" href="/">Home</a>
                            </li>    
                        </ul>

                        <ul className="navbar-nav mb-3">
                            <li className="nav-item">
                                <a className="nav-link btn-outline-secondary btn-lg" aria-current="page" href="/aboutUs">About Us</a>
                            </li>    
                        </ul>

                        <ul className="navbar-nav mb-3">
                            <li className="nav-item">
                                <a className="nav-link btn-outline-secondary btn-lg" aria-current="page" href="/contactUs">Contact Us</a>
                            </li>    
                        </ul>
                    </div>

                        <ul className="navbar-nav mb-3">
                            <li className="nav-item">
                                <a className="nav-link btn-outline-secondary btn-lg" aria-current="page" href="/refund">Refund Request</a>
                            </li>    
                        </ul>

                        <ul className="navbar-nav mb-3">
                            <li className="nav-item">
                                <a className="nav-link btn-outline-secondary btn-lg" aria-current="page" href="/refundSearch">Refund Search</a>
                            </li>    
                        </ul>

                        <ul className="navbar-nav mb-3">
                            <li className="nav-item">
                                <div className="nav-link btn-outline-secondary btn-lg" aria-current="page" >Sign Out</div>
                            </li>    
                        </ul>
                </div>
            </nav>
        )
    }
}
