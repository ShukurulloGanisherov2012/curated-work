import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";

export default function Header() {
    return (
        <nav>
            <header className='d-flex align-items-center justify-content-between px-5'>
                <div className="logoContainer d-flex align-items-center">
                    <img src="/logo.png" alt="logo" className="logo" />
                    <div className="inputcontainer d-flex align-items-center">
                        <input type="text" placeholder='search something' />
                        <IoIosSearch size={25} />
                    </div>
                </div>
                <div className="chiziq"></div>
                <nav className="navLinks d-flex align-items-center gap-3">
                    <a href="#">DISCOVER</a>
                    <a href="#">FEED</a>
                    <button className="walletButton">CONNECT WALLET</button>
                    <FaBars size={25} />
                </nav>
            </header>
            <img className='curated w-100' src="/curated.png" alt="" />
        </nav>
    );
}
