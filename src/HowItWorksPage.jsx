
import FooterPage from './common/FooterPage'
import NavigationPanel from './common/NavigationPanel'
import Ready from './common/Ready'
import { GreenTick, UsersIcon } from './components/Icons'
import HeadingOfPage from './common/HeadingOfPage'

function HowItWorksPage() {
    return (
        <div className='text-gray-700'>
            
            <HeadingOfPage heading="How It Works" about="Getting your forms filled is simple and straightforward. Follow these four easy steps to save time and avoid errors." />
            <div className='flex flex-row mx-auto gap-5 items-center justify-evenly w-[1200px] pt-10 pb-10'>
                <Steps array={["Government Forms", "Government Forms", "Government Forms", "Government Forms", "Government Forms", "Government Forms",]} icon={<UsersIcon stroke='#304adf' width='50px' height='50px' strokeWidth='2' />} about="Browse our extensive list of form categories or specify a custom form type. We handle everything from government applications to corporate forms." heading="Step 1: Select Your Form" />
                <NumberBox number="1" />
            </div>
            <div className='flex flex-row mx-auto gap-5  items-center justify-evenly w-[1200px] pt-10 pb-10'>
                <NumberBox number="1" />
                <Steps array={["Government Forms", "Government Forms", "Government Forms", "Government Forms", "Government Forms", "Government Forms",]} icon={<UsersIcon stroke='#304adf' width='50px' height='50px' strokeWidth='2' />} about="Browse our extensive list of form categories or specify a custom form type. We handle everything from government applications to corporate forms." heading="Step 1: Select Your Form" />
            </div>
            <div className='flex flex-row mx-auto gap-5 items-center justify-evenly w-[1200px] pt-10 pb-10'>
                <Steps array={["Government Forms", "Government Forms", "Government Forms", "Government Forms", "Government Forms", "Government Forms",]} icon={<UsersIcon stroke='#304adf' width='50px' height='50px' strokeWidth='2' />} about="Browse our extensive list of form categories or specify a custom form type. We handle everything from government applications to corporate forms." heading="Step 1: Select Your Form" />
                <NumberBox number="1" />
            </div>
            <div className='flex flex-row mx-auto gap-5   items-centerjustify-evenly  w-[1200px] pt-10 pb-10'>
                <NumberBox number="1" />
                <Steps array={["Government Forms", "Government Forms", "Government Forms", "Government Forms", "Government Forms", "Government Forms",]} icon={<UsersIcon stroke='#304adf' width='50px' height='50px' strokeWidth='2' />} about="Browse our extensive list of form categories or specify a custom form type. We handle everything from government applications to corporate forms." heading="Step 1: Select Your Form" />
            </div>

            <Ready heading="Ready to Save Time and Avoid Errors?" about="Let our experts handle your forms while you focus on what really matters" button="start your own" />
            <FooterPage />
        </div>
    )
}

function Steps({ icon, about, heading, array }) {
    return (
        <div className='flex flex-col w-[50%] justify-center p-3'>
            <div>
                <div className='flex w-[65px] h-[65px] mb-5 justify-center items-center bg-sky-200  rounded-full'>
                    {icon}
                </div>
            </div>
            <h2 className='text-[25px] font-semibold mb-2'>
                {heading}
            </h2>
            <p className='text-[15px] pb-5 '>
                {about}
            </p>

            <StepsPoints points={array} />
        </div>
    )
}

function NumberBox({ number }) {
    return (
        <div className='w-[50%] justify-center flex items-center text-blue-500 bg-sky-100 rounded-md h-[300px]  text-[50px] font-black'>
            {number}
        </div>
    )
}

function StepsPoints({ points }) {
    return (
        <div className='grid justify-between grid-cols-2 text-[14px] gap-3 '>
            {points.map((item) =>
            (<div className='flex gap-2 '>
                <GreenTick width='20px' height='20px' />
                <p>
                    {item}
                </p>
            </div>)
            )}
        </div>
    )
}

export default HowItWorksPage