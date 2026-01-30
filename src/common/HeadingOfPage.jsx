

function HeadingOfPage( {heading, about}) {
    return (
        <div className='mx-auto w-full pt-20 pb-22 flex bg-linear-to-t from-white to-sky-50 flex-col gap-4  items-center justify-center'>
            <h1 className='text-[55px] font-serif font-black '>
                {heading}
            </h1>
            <p className='text-[20px] font-normal w-[30%] text-center'>{about}</p>
        </div>
    )
}

export default HeadingOfPage