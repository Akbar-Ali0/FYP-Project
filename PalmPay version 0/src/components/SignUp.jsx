import React from 'react'
import { useForm } from "react-hook-form"

// maybe decrese the margin between inputs?

function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const dataOnConsole = (data) => console.log(data)

    //   console.log(watch("example")) // watch input value by passing the name of it

    return (
        <>
            <div className="signUpContainer max-w-5/6 flex mx-auto m-2 rounded-md font-tinos">
                <div className="sideBar bg-logoGreen w-1/2 h-auto">
                    {/* logo, text, SignIn button */}
                </div>
                <form onSubmit={handleSubmit(dataOnConsole)} className='flex flex-col border-2 gap-4 p-2 w-1/2 bg-white'>
                    <label htmlFor="AccountLabel" className='text-logoGreen mx-auto text-4xl font-bold'>Create Account</label>

                    {/* chatgpt example */}
                    {/* <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        <input
                            placeholder="Name"
                            className="flex-1 outline-none bg-transparent"
                        />
                    </div> */}

                    <div className='flex items-center bg-gray-300 rounded-xl p-3 w-64 mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-5 h-5 text-gray-400 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <input placeholder='Name' {...register("name", { required: true })}
                            className='bg-transparent outline-none flex-1 text-sm'
                        />
                        {errors.name && <span>Enter Valid First Name</span>}
                    </div>

                    <div className='flex items-center bg-gray-300 rounded-xl p-3 w-64 mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-5 h-5 text-gray-400 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <input placeholder='Email' {...register("email", { required: true })}
                            className='bg-transparent outline-none flex-1 text-sm'
                        />
                        {errors.email && <span>Enter Valid Email</span>}
                    </div>

                    <div className='flex items-center bg-gray-300 rounded-xl p-3 w-64 mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-5 h-5 text-gray-400 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input placeholder='Password' {...register("password", { required: true })}
                            className='bg-transparent outline-none flex-1 text-sm'
                        />
                        {errors.password && <span>Enter Valid Password</span>}
                    </div>

                    {/* Button to SCAN Palm Image */}

                    <input type="submit" className='border-2 rounded-full p-2 w-1/4 mx-auto' value={"Submit"}/>
                </form>
            </div>









            { /* "handleSubmit" will validate your inputs before invoking "dataOnConsole" */}
            <form onSubmit={handleSubmit(dataOnConsole)} className='p-2 bg- border-2 hidden'>

                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="First Name" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>




        </>



    )
}

export default SignUp


