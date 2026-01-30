
import HeadingOfPage from '../common/HeadingOfPage'
import Ready from '../common/Ready'
import FooterPage from '../common/FooterPage'
import { UsersIcon } from './Icons'

function AboutPage() {
  return (
    <div>
      <HeadingOfPage heading="About FormFill Pro" about="We're on a mission to make form filling simple, accurate, and stress-free for everyone." />
      <div className='flex flex-col justify-center gap-4 w-[900px] pt-20 pb-20 mx-auto'>
        <h1 className='text-[30px] font-bold '>Our Story</h1>
        <p className='text-[20px]'>FormFill Pro was founded in 2020 with a simple observation: people waste countless hours filling out complex forms, often making costly mistakes. We knew there had to be a better way.</p>
        <p className='text-[20px]'>Today, we've helped over 10,000 customers successfully complete more than 50,000 forms across various categories. From government applications to visa forms, job applications to tax returns, we've seen it all and done it all.</p>
        <p className='text-[20px]'>Our team of experienced professionals brings together expertise in documentation, legal compliance, and customer service to deliver a seamless experience. We don't just fill forms – we ensure peace of mind.
        </p>
      </div>
      <div className='bg-sky-900  text-white'>
        <div className='flex justify-between items-center w-[950px] mx-auto '>
          <CustomerCards heading="10,000+" subheading={"Happy Customers"} />
          <CustomerCards heading="10,000+" subheading={"Happy Customers"} />
          <CustomerCards heading="10,000+" subheading={"Happy Customers"} />
          <CustomerCards heading="10,000+" subheading={"Happy Customers"} />
        </div>
      </div>

      <div className='flex flex-col gap-18 p-24'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='text-[30px] font-bold'>Our Values
          </h2>
          <p className='text-[20px] font-semibold'>The principles that guide everything we do
          </p>
        </div>
        <div className='flex w-[1050px] mx-auto justify-between gap-4 text-center '>

          <OurValuesCards heading="Accuracy First" icon={<UsersIcon />} headingTwo="We guarantee 100% accuracy in every form we fill. Your success is our success." />
          <OurValuesCards heading="Accuracy First" icon={<UsersIcon />} headingTwo="We guarantee 100% accuracy in every form we fill. Your success is our success." />
          <OurValuesCards heading="Accuracy First" icon={<UsersIcon />} headingTwo="We guarantee 100% accuracy in every form we fill. Your success is our success." />
          <OurValuesCards heading="Accuracy First" icon={<UsersIcon />} headingTwo="We guarantee 100% accuracy in every form we fill. Your success is our success." />
        </div>
      </div>

      <div className='flex flex-col bg-slate-200 gap-6 p-12 '>
        <div className='flex flex-col justify-center items-center gap-8'>
          <h2 className='text-[30px] font-bold'>Why Choose Us?</h2>
          <p className='text-[20px] '>We combine expertise, technology, and care to deliver exceptional results</p>
        </div>
        <div className='flex justify-between mx-auto w-[900px] gap-6 '>
          <WhyChooseCards heading="Expert Team" about="Our professionals have years of experience handling all types of forms" />
          <WhyChooseCards heading="Expert Team" about="Our professionals have years of experience handling all types of forms" />
          <WhyChooseCards heading="Expert Team" about="Our professionals have years of experience handling all types of forms" />
        </div>
      </div>

      <Ready heading="Ready to Experience the Difference?" about="Join thousands of satisfied customers who trust FormFill Pro" button="Get Started Today" />
      <FooterPage />
    </div>
  )
}

function WhyChooseCards({ heading, about }) {
  return (
    <div className='text-center flex flex-col justify-center items-center border-1 border-white rounded-lg shadow shadow-xl p-4 gap-3 '>
      <h2 className='text-[20px] font-semibold'>
        {heading}
      </h2>
      <p className='text-[15px]'>
        {about}
      </p>
    </div>
  )
}
function OurValuesCards({ heading, headingTwo, icon }) {
  return (
    <div className='flex flex-col gap-3 items-center justify-center '>
      <div className='w-[60px] h-[60px] rounded-full items-center justify-center flex bg-sky-300'>
        <div>{icon}</div>
      </div>
      <p className='text-[20px] font-semibold'>{heading}
      </p>
      <p className='text-[15px] '>{headingTwo}
      </p>
    </div>
  )
}
function CustomerCards({ heading, subheading }) {
  return (
    <div className='flex flex-col p-6 gap-4 items-center justify-center'>
      <h2 className='text-[30px] font-bold'>{heading}</h2>
      <p className='text-[20px] font-semibold'>{subheading}</p>
    </div>
  )
}
export default AboutPage