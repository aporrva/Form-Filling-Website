import React from 'react'
import { Form, useForm } from 'react-hook-form'

function FormComponent() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: "onSubmit" })
    console.log("errors :", errors)
    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <input type="text" className='border-1 ' {...register("userName",
                {
                    required: { value: true, message: "this is required field" },
                    maxLength: { value: 10, message: "the max length could be 10" }
                })} />
            {errors?.userName?.message}
            <input type="email" className='border-1 ' {...register("email")} />
            <button type='submit'> submit button</button>
        </form>
    )
}

export default FormComponent