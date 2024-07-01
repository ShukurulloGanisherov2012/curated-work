import React from 'react'

export default function Fifth() {
  return (
    <>
      <div className="FifthPage p-5">
        <h1 className="FifthPageTitle">Auctions ending soon</h1>
        <button className='btn btn-light py-3 w-25 border-2 border-dark'>EXPLORE MORE</button>
        <img className='ending' src="/ending.png" alt="" />
        <img className='soon' src="/soon.png" alt="" />
      </div>
    </>
  )
}
