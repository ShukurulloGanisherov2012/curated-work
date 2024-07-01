import React from 'react'
import '../App.css'

export default function Second() {
  const Avatars = [
    {
      id: 1,
      img: '/avatar.png',
      email: '@randomdash'
    },
    {
      id: 2,
      img: '/avatar (1).png',
      email: '@kohaku'
    },
    {
      id: 3,
      img: '/avatar (2).png',
      email: '@gelo'
    },
    {
      id: 4,
      img: '/avatar (7).png',
      email: '@elnafrederick'
    },
    {
      id: 5,
      img: '/avatar (3).png',
      email: '@_kolahon'
    },
    {
      id: 6,
      img: '/avatar (4).png',
      email: '@mcbess'
    },
    {
      id: 7,
      img: '/avatar (5).png',
      email: '@aaronpenne'
    },
    {
      id: 8,
      img: '/avatar (6).png',
      email: '@nocellcoverage'
    }
  ]
  return (
    <>
      <div className="SecondPage d-flex">
        <div className="SecondPageText w-50">
          <h1>Hot NFT artists of the month.</h1>
          <p className='text-secondary'>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.</p>
        </div>
        <div className="SecondPageCards w-50">
            {
              Avatars.map((avatar) =>
              (
                <div className="SecondPageCard d-flex flex-column align-items-center justify-content-center">
                  <div className="hexagon"><b>{avatar.id}</b></div>
                  <img src={`${avatar.img}`} alt="" />
                  <h3>{avatar.email}</h3>
                  <span>Total sale: <b className='text-dark'>12.29 ETH</b></span>
                </div>
              )
              )
            }
          <button className='explore btn btn-dark w-75 mx-auto fs-5 py-3'>EXPLORE MORE</button>
        </div>
      </div>
    </>
  )
}
