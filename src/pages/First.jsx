import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import '../App.css'

export default function First() {
    return (
        <>
            <div className="FirstPage d-flex">
                <div className="image-container">
                    <img src="/creator.png" alt="" className="w-100 h-100 object-fit-cover" />
                </div>
                <div className="FirstPageText d-flex flex-column justify-content-around">
                    <div className="FirstPageContent">
                        <img src="/Info.png" alt="" />
                    </div>
                    <div className="FirstPageNetwork">
                        <h1 className='mx-5'>The creator network.</h1>
                        <div className="btns w-75 d-flex gap-5 mx-5">
                            <button className='btn py-3 fs-5 btn-outline-dark w-50'>VIEW NFT <FaArrowRight /> </button>
                            <button className='btn py-3 fs-5 btn-dark w-50'>PLACE A BID</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
