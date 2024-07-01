import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="footer py-5 text-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src="/logo.png" alt="" />
                    <p className='text-secondary fs-5'><b>Empower your creativy</b></p>
                </div>
                <div className="col-md-3">
                    <h5 className="text-uppercase">Services</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Graphic Design</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className="text-uppercase">Useful Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className="text-uppercase">Follow Us</h5>
                    <ul className="list-unstyled social-media fs-5 d-flex flex-column">
                      <li><a href="#"> <FaInstagram /> Instagram </a></li>
                      <li><a href="#"> <FaTwitter /> Twitter </a></li>
                      <li><a href="#"> <FaFacebook /> Facebook </a></li>
                      <li><a href="#"> <GiMirrorMirror /> Mirror </a></li>
                    </ul>
                </div>
            </div>
            <hr className="mt-4 mb-3" />
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className='fs-5 my-3'>&copy; 2024 Crypter v.2. All rights reserved.</p>
                    <p className='fs-5'>Designed by Shukurullo</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
