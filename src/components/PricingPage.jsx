import React from 'react'

import HeadingOfPage from '../common/HeadingOfPage'

import { TickIcon } from './Icons'
import FooterPage from '../common/FooterPage'
function PricingPage() {
  return (
    <div className=''>
      
      <HeadingOfPage heading="Simple, Transparent Pricing" about="Choose the plan that fits your needs. All prices include GST." />
      <div className='flex gap-30 mx-auto w-fit p-18'>
        <Card heading="Basic Forms" buttonTextColor="text-white" textColor="text-gray-700" buttonColor="bg-blue-600" about="Perfect for simple form submissions" price="₹199" points={["Exam registrations", "Exam registrations", "Exam registrations", "Exam registrations", "Exam registrations",]} />
        <Card heading="Basic Forms" buttonTextColor="text-white" textColor="text-gray-700" buttonColor="bg-blue-600" about="Perfect for simple form submissions" price="₹199" points={["Exam registrations", "Exam registrations", "Exam registrations", "Exam registrations", "Exam registrations",]} />
        <Card heading="Basic Forms" buttonTextColor="text-white" textColor="text-gray-700" buttonColor="bg-blue-600" about="Perfect for simple form submissions" price="₹199" points={["Exam registrations", "Exam registrations", "Exam registrations", "Exam registrations", "Exam registrations",]} />
      </div>
      <div className='flex flex-col gap-6 p-10 items-center justify-center'>
        <p>💡 All prices are inclusive of 18% GST</p>
        <p>Need help choosing? Contact us for personalized recommendations</p>
      </div>
      <div className='flex flex-col justify-center items-center bg-gray-100 p-12 gap-8 text-semibold'>
        <h1 className='font-semibold text-[35px]'>Bulk Pricing Available</h1>
        <div className='flex flex-col gap-6 w-[800px] p-6 mx-auto bg-white shadow-lg rounded-lg items-center justify-center'>
          <p>Need to fill multiple forms? Get special discounts on bulk orders</p>
          <div className='flex mx-auto gap-8 w-fit'>
            <Box heading="10-20 Forms" about="10% OFF" />
            <Box heading="10-20 Forms" about="10% OFF" />
            <Box heading="10-20 Forms" about="10% OFF" />
          </div>
            <button className='bg-blue-500 text-white p-3 rounded-lg text-[20px] font-semibold'>Request Bulk Quote</button>
        </div>
      </div>
      <FooterPage />
    </div>

  )
}

function Card({ heading, about, buttonColor, price, bgcolor, buttonTextColor, textColor, points }) {
  return (
    <div className={`group flex flex-col w-[400px] h-fit   hover:bg-sky-800 hover:text-white text-[15px] hover:text-[25px] gap-3 p-9 hover:p-12  border-1 border-gray-300 rounded-lg ${bgcolor} ${textColor}`}>
      <h2 className='text-[30px] group-hover:text-[40px] font-bold '>{heading}</h2>
      <p>{about}</p>
      <div className='flex flex-row items-center justify-start'>
        <span className='group-hover:text-[60px] font-semibold text-[35px]'>{price}</span>
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
      <button className={`p-2 text-[25px] group-hover:text-[35px] group-hover:font-semibold group-hover:bg-white group-hover:text-sky-700 rounded-md ${buttonColor} ${buttonTextColor}`}> Get Started</button>
    </div>
  )
}
function Box({heading,about}){
  return(
    <div className='flex flex-col gap-2 p-4 bg-sky-50 w-[200px] justify-center rounded-lg items-center'>
      <p className='text-sky-700 font-bold text-[20px]'>{heading}</p>
      <p className=''>{about}</p>
    </div>
  )
}
export default PricingPage