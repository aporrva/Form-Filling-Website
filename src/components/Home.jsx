
import { MainPage } from '../list.js'

import { UsersIcon, ClockIcon, StarIcon, PeopleIcon, TickIcon, SheildIcon, } from "./Icons.jsx";
import NavigationPanel from '../common/NavigationPanel.jsx';
import Ready from '../common/Ready.jsx';
import FooterPage from '../common/FooterPage.jsx';

function Home() {

  const GetAnyOnlineFormFilled = MainPage.Body.GetAnyOnlineFormFilled

  return (
    <>
      <div className='flex flex-col justify-center margin-0 w-full text-gray-600  text-center '>
        {/* Heading */}
        
        {/* Get Any Online Form Filled */}

        <div className='flex flex-col gap-3 justify-center pt-16 bg-linear-to-t to-sky-100 from-white p-[60px]'>
          <div className='text-[60px] flex flex-col gap-0 font-extrabold font-serif'>
            <p>{GetAnyOnlineFormFilled.Heading1}</p>
            <p className='text-sky-700'>{GetAnyOnlineFormFilled.Heading2}</p>
          </div>
          <div className='w-fit lg:w-[700px] self-center pb-[30px]'>
            <p className='text-[15px]  '>{GetAnyOnlineFormFilled.About}</p>
          </div>
          <div className='flex gap-6 justify-center'>
            <button className='px-[25px] py-[15px] rounded-lg bg-sky-700 text-white '>{GetAnyOnlineFormFilled.Buttons.b1}</button>
            <button className='px-[25px] py-[15px] rounded-lg border-2 border-sky-700 bg-white  '>{GetAnyOnlineFormFilled.Buttons.b2}</button>
          </div>
          <div className='flex gap-4 justify-center pt-6 gap-8'>
            <Ratings icon={<PeopleIcon width='30px' height='30px' stroke='#000000' />} about="10,000+ HHomey Customers" />
            <Ratings icon={<StarIcon width='30px' height='30px' stroke='#000000' />} about="4.9/5 Rating" />
            <Ratings icon={<UsersIcon width='30px' height='30px' stroke='#000000' />} about="50,000+ Forms Completed" />
          </div>
        </div>

        {/* how it works */}
        <div className='flex flex-col  pt-16 pb-16 lg:pl-32 mx-auto pl-3 pr-3 lg:pr-32'>
          <div className='flex flex-col gap-2 font-serif'>
            <p className='font-black text-[40px] '>How It Works</p>
            <p className='text-[25px] pb-10 pt-1'>Three simple steps to get your forms filled</p>
          </div>


          <div className='flex flex-col lg:flex-row  justify-center pt-6 gap-8'>
            <HowItWorks number="1" heading="Select Form Type" about="Choose the type of form you need filled from our extensive list" />
            <HowItWorks number="1" heading="Select Form Type" about="Choose the type of form you need filled from our extensive list" />
            <HowItWorks number="1" heading="Select Form Type" about="Choose the type of form you need filled from our extensive list" />


          </div>

        </div>

        {/* Why to choose */}

        <div className='flex flex-col pt-16 pb-16 bg-gray-50'>
          <div className='flex flex-col gap-3 p-10 font-serif'>
            <p className='font-black text-[40px] '>Why Choose FormFill Pro?</p>
            <p className='text-[25px] '>We make form filling simple, secure, and stress-free</p>
          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center pt-6 pb-4 gap-8'>

            <WhyToChoose icon={<><PeopleIcon stroke='#000000' /></>} heading="Select Form Type" about="Choose the type of form you need filled from our extensive list"> </WhyToChoose>
            <WhyToChoose icon={<><TickIcon stroke='#000000' /></>} heading="Fast Processing" about="Choose the type of form you need filled from our extensive list"> </WhyToChoose>
            <WhyToChoose icon={<><SheildIcon stroke='#000000' width='25px' height='25px' /></>} heading="Select Form Type" about="Choose the type of form you need filled from our extensive list"> </WhyToChoose>
            <WhyToChoose icon={<><ClockIcon stroke='#000000' /></>} heading="Select Form Type" about="Choose the type of form you need filled from our extensive list"> </WhyToChoose>


          </div>
        </div>

        {/* We handle All  */}
        <div className='flex flex-col pt-16  pb-16 '>
          <div className='flex flex-col gap-3 p-10 font-serif'>
            <p className='font-black text-[40px] '>We Handle All Types of Forms</p>
            <p className='text-[25px] '>From government Homelications to corporate forms, we've got you covered</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[900px] mx-auto gap-6 '>
            <WeHandle heading="Government Forms" />
            <WeHandle heading="Government Forms" />
            <WeHandle heading="Government Forms" />
            <WeHandle heading="Government Forms" />
            <WeHandle heading="Government Forms" />
            <WeHandle heading="Government Forms" />
            <WeHandle heading="Government Forms" />
            <WeHandle heading="Government Forms" />

          </div>

        </div>



        <Ready  heading="Ready to Get Started?" about="Join thousands of satisfied customers who trust us with their forms" button="Start Your Own Request" />

        <FooterPage />

      </div >


    </>
  )
}


function Ratings({ icon, about }) {
  return (
    <div className='flex  gap-1 items-center'>
      <div>
        {icon}
      </div>
      <p>{about}</p>
    </div>
  )
}

function HowItWorks({ heading, about, number }) {
  return (
    <div className='flex flex-col  gap-4'>
      <div className='flex justify-center items-center '>
        <div className='w-[70px] h-[70px] text-[30px] flex items-center justify-center text-sky-700 bg-sky-100 font-bold  rounded-full'>{number}</div>
      </div>
      <p className='font-semi-bold text-black text-[25px]'>{heading}</p>
      <p>{about}</p>
    </div>
  )
}

function WhyToChoose({ icon, heading, about }) {
  return (
    <div className='flex flex-col shadow-lg bg-white text-left w-[65%] lg:w-[20%] h-fit text-gray-700  items-center rounded-md gap-5'>
      <div className='flex p-4 flex-col gap-2'>
        <div className='flex justify-items-start items-center '>
          <div className='w-[40px] h-[40px]  text-[30px] flex items-center p-1 justify-center  text-sky-700 bg-sky-100  rounded-md'>{icon}</div>
        </div>
        <p className='font-bold text-[25px]'>{heading}</p>
        <p >{about}</p>
      </div>
    </div>
  )
}

function WeHandle({ heading }) {
  return (
    <div className='flex flex-col w-full self-center shadow-lg bg-sky-100 border-1 border-sky-300 text-left w-fit h-fit  rounded-md gap-5'>
      <div className='flex p-4 flex-col gap-3  items-center'>
        <div className="">
          <UsersIcon stroke='#0559FF' strokeWidth='2' width="50px" height="50px" />
        </div>
        <p className='font-semi-bold text-[20px] text-black'>{heading}</p>
      </div>
    </div>
  )
}
export default Home
