import React from 'react'
import NavigationPanel from "./common/NavigationPanel"
import HeadingOfPage from './common/HeadingOfPage'

import { TickIcon } from './components/Icons'
function PricingPage() {
  return (
    <div>
      
      <HeadingOfPage heading="Simple, Transparent Pricing" about="Choose the plan that fits your needs. All prices include GST." />
      <div className='flex mx-auto p-18'>
        <Card heading="Basic Forms" buttonTextColor="text-white" textColor="text-gray-700" buttonColor="bg-blue-600" about="Perfect for simple form submissions" price="₹199" points={["Exam registrations", "Exam registrations", "Exam registrations", "Exam registrations", "Exam registrations",]} />
      </div>
    </div>

  )
}

function Card({ heading, about, buttonColor, price, bgcolor, buttonTextColor, textColor, points }) {
  return (
    <div className={` flex flex-col w-[320px] gap-3 p-6 border-1 border-gray-300 rounded-md ${bgcolor} ${textColor}`}>
      <h2 className='text-[30px] font-bold '>{heading}</h2>
      <p>{about}</p>
      <div className='flex flex-row items-center justify-start'>
        <span className='font-semibold text-[35px]'>{price}</span>
        <span>  per form</span>
      </div>
      <div className='flex flex-col p-2 text-[14px] gap-3 '>
        {points.map((item) =>
        (<div className='flex gap-2 '>
          <TickIcon width='20px' height='20px' stroke='#0c4607' />
          <p>
            {item}
          </p>
        </div>)
        )}
      </div>
      <button className={`p-2 text-[25px] rounded-md ${buttonColor} ${buttonTextColor}`}> Get Started</button>
    </div>
  )
}

export default PricingPage