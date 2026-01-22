import React from 'react'

function Ready( {heading, about, button}) {
    return (
        <div className='flex flex-col items-center  gap-8 bg-sky-900 text-white p-16'>
            <div className='flex flex-col p-10 gap-4 font-serif'>
                <p className='font-black text-[40px] '>{heading}</p>
                <p className='text-[25px] '>{about}</p>
            </div>
            <button className='text-sky-900 bg-white w-fit rounded-md self-center p-4 text-[30px] font-bold'>{button}</button>
        </div>
    )
}

export default Ready