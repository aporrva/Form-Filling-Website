import React from 'react'
import { useForm } from 'react-hook-form'

function Form2() {
    const { register
        , handleSubmit
        , formState: { errors }
    } = useForm()
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <div className='flex gap-2'>
            <input type="number" name="phoneNumber"  {...register("PhoneNumber", {
                required: true,
                maxLength: 10,
                minLength: 10,

            })} placeholder='Phone Number' className='bg-blue-100 border-1 p-1' />
            <input type="email" name="email" {...register("email",{
                required:true,
                
            })} placeholder='Email' className='bg-blue-100 border-1 p-1' />
            <button type='submit' onClick={handleSubmit(onSubmit)}>Click Me</button>
        </div>
    )
}

export default Form2