import { Link } from "react-router-dom"
import { HamburgerIcon, UsersIcon } from "../components/Icons"
import { MainPage } from "../list"


const HeaderRight = MainPage.Header.Right
const HeaderLeft = MainPage.Header.Left

function NavigationPanel() {
    return (
        <>
            {/* Heading */}
            <div className=' text-md flex p-3 justify-between lg:justify-center xl:gap-40 gap-20 w-full  margin-0 items-center'>
                <div className='flex gap-2 items-center justify-center  gap-3'>
                    <div className=' w-[45px] h-[45px] items-center justify-center flex rounded-md bg-sky-700'>
                        <UsersIcon strokeWidth='1' width='40px' height='40px' />
                    </div>
                    <p className='font-bold text-2xl font-serif '>{HeaderLeft[1]}</p>
                </div>
                <div className='flex lg:hidden'>
                    <HamburgerIcon width='30px' strokeWidth='2' height='30px' />
                </div>
                <nav className='lg:flex hidden items-center  gap-6'>
                    <Link to="/">Home</Link> 
                    <Link to="/howitworks">HowItWorks</Link>  
                    <Link to="/pricing">Pricing</Link>
                    
                    
                    
                </nav>
                <div className='lg:flex hidden gap-4  items-center'>
                    <Link to="/Dashboard"> Dashboard </Link>
                    <button className='bg-sky-700 text-white  rounded-md p-2'>start</button>

                </div>
            </div>
            <div className='w-full h-[2px] bg-gray-300'> </div>
        </>
    )
}

export default NavigationPanel