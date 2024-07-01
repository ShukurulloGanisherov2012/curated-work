import React from 'react'

export default function Seventh() {
  return (
    <>
      <div className="Seven my-5">
        <div className="starting my-5">
          <h1 className="text-center my-4"><b>Own your creativity.</b></h1>
          <p className="text-center mx-auto w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio itaque vel quasi rem, magnam cum quidem veritatis incidunt explicabo!</p>
        </div>
        <div className="Card d-flex gap-2 mx-auto">
          <img className='cardimg' src="/collect.png" alt="" />
          <div className="CardText">
            <h1>Your Collection, your way.</h1>
            <p>In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time.</p>
            <span>❗️ You'll earn a 10% royalty for all secondary market  sales.</span>
            <span>❗️ Creativity is valueable on Crypter</span>
            <button className='btn btn-outline-dark w-25 p-2'>LEARN MORE</button>
          </div>
        </div>
        <div className="Card d-flex gap-2 mx-auto">
          <div className="CardText">
            <h1 className='w-50'>Lowest Mint Fees</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi totam unde? Vitae beatae optio quibusdam veritatis veniam.</p>
            <span>Plus, you’ll earn a 10% royalty for all secondary market sales. Forever.</span>
            <button className='btn btn-outline-dark w-25 p-2'>LEARN MORE</button>
          </div>

          <img className='cardimg' src="/lowest.png" alt="" />
        </div>
        <div className="Card d-flex gap-2 mx-auto">
          <img className='cardimg' src="/earnmoney.png" alt="" />
          <div className="CardText">
            <h1>Create together, earn together.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi totam unde? Vitae beatae optio quibusdam veritatis veniam.</p>
            <span>You can also use Splits to donate directly to the causes you care about most. That’s the web3 way.</span>
            <button className='btn btn-outline-dark w-25 p-2'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  )
}
