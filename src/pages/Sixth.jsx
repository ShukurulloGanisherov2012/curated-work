import React from 'react'

export default function Sixth() {
  return (
    <>
      <div className="SixPage bg-dark">
        <h1 className='text-white spotlight'>Spotlight</h1>
        <div className="SixPageRow w-100 d-flex align-items-center justify-content-between">
          <p className="text-secondary fs-4">Projects you'll love</p>
          <div className="days d-flex gap-4">
            <span className='day bg-light'>1 days</span>
            <span className='day text-light'>7 days</span>
            <span className='day text-light'>30 days</span>
          </div>
        </div>
        <div className="projects d-flex flex-column gap-3">
          <img src="/spotlight1.png" alt="" />
          <img src="/spotlight2.png" alt="" />
          <img src="/spotlight3.png" alt="" />
        </div>
      </div>
    </>
  )
}
