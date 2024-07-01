import React from 'react'
import '../App.css'

export default function Third() {
  return (
    <>
      <div className="ThirdPage">
        <img className='beyond' src="/beyond.png" alt="" />
        <div className="ThirdPageText">
          <img className='random' src="/random.png" alt="" />
          <h1 className='beyondtitle'>Beyond the Dream.</h1>
          <div className="price">
            <p className='text-secondary fs-3'>Buy now price</p>
            <div className="newprice d-flex text-light d-flex align-items-center gap-5">
              <h2 style={{ fontSize: '60px' }}>8.00 ETH</h2>
              <button className='btn btn-light py-4 px-5 fs-4' style={{ width: '300px' }}>MAKE OFFER</button>
            </div>
            <p className='text-secondary fs-3'>$24,635.39</p>
          </div>
        </div>
      </div>
    </>
  )
}
