

function HeadingOfPage( {heading, about}) {
    return (
        <div className='mx-auto pt-20 pb-22 flex flex-col gap-4 bg-sky-50 items-center justify-center'>
            <h1 className='text-[55px] font-serif font-black '>
                {heading}
            </h1>
            <p className='text-[20px] font-normal w-[30%] text-center'>{about}</p>
        </div>
    )
}

export default HeadingOfPage