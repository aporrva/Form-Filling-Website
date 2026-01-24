import { LocationIcon, MailIcon, PhoneIcon, UsersIcon } from "../components/Icons"

function FooterPage() {
    return (
        <div>
            <div className='flex flex-col md:flex-row  pt-32 pb-15 md:justify-center align-center md:align-start text-center md:text-start pl-6 pr-6 bg-red-900 gap-6 '>
                <div className='flex flex-col justify-start gap-3 md:w-[22%]'>
                    <div className="flex justify-center md:justify-start gap-3 ">
                        <div className=" w-[45px] h-[45px] rounded-md flex justify-center items-center bg-sky-500">
                            <UsersIcon stroke='#05276d' strokeWidth='2' />
                        </div>
                        <h2 className='text-white font-bold text-[30px] '>FormFill Pro</h2>
                    </div>
                    <p className='text-gray-400'>Professional form filling service - Fast, accurate, and hassle-free. We handle all your online form submissions with care.</p>

                </div>
                <div className='flex flex-col  gap-3  md:w-[22%]'>
                    <h2 className='text-white font-bold text-[30px] '>Quick Links</h2>
                    <div className='flex flex-col gap-3 text-gray-100'>
                        <a href="">How It Works</a>
                        <a href="">Pricing</a>
                        <a href="">FAQs</a>
                        <a href="">About Us</a>
                    </div>
                </div>

                <div className='flex flex-col gap-3  md:w-[22%]'>
                    <h2 className='text-white font-bold text-[30px] '>Services</h2>
                    <div className='flex flex-col gap-3 text-gray-100 '>
                        <a href="">Government Formss</a>
                        <a href="">Job Homelications</a>
                        <a href="">Visa Homelications</a>
                        <a href="">Admission Forms</a>
                        <a href="">Banking Forms</a>
                        <a href="">Insurance Forms</a>
                    </div>
                </div>

                <div className='flex flex-col gap-3  md:w-[22%]'>
                    <h2 className='text-white font-bold text-[30px] '>Contact Us</h2>
                    <div className='flex flex-col items-center md:items-start gap-3 text-gray-100 '>
                        <div className='flex gap-2 '>
                            <div>                <MailIcon stroke='#ffffff' width='30px' height='30px' strokeWidth='1' />
                            </div>
                            <p>support@formfillpro.com</p>
                        </div>
                        <div className='flex gap-2 '>
                            <div>
                                <PhoneIcon stroke='#ffffff' width='30px' height='30px' />

                            </div>
                            <p>+91 1800-123-4567</p>
                        </div>
                        <div className='flex gap-2 '>
                            <div>
                                <LocationIcon stroke='#ffffff' width='30px' height='30px' />

                            </div>
                            <p>Mumbai, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 h-[1px]">

            </div>
            <footer className='flex flex-col gap-3 p-8 text-gray-100 bg-slate-950 items-center justify-center'>
                <p>© 2026 FormFill Pro. All rights reserved.</p>
                <div className='flex gap-3 justify-center'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </footer>
        </div>
    )
}

export default FooterPage