// ========================== All Imports
import React, { useState }    from 'react'
import { IoCloudUploadSharp } from 'react-icons/io5'

const Form = () => {

    // ========================== All useState Hooks 
    const [name,       setName]       = useState("")
    const [nameError,  setNameError]  = useState("")
    const [email,      setEmail]      = useState("")
    const [emailError, setEmailError] = useState("")
    const [phone,      setPhone]      = useState("")
    const [phoneError, setPhoneError] = useState("")

    // ========================== All Functions
    // -------- name handler
    const handleName = (e)=>{
        setName(e.target.value)
        setNameError("")
    }

    // -------- email handler
    const handleEmail = (e)=>{
        setEmail(e.target.value)
        setEmailError("")
    }

    // -------- phone handler
    const handlePhone = (e)=>{
        setPhone(e.target.value)
        setPhoneError("")
    }

    // -------- submit handler
    const handleSubmit = (e) => {
        e.preventDefault()

        // all conditions
        if(name == ""){
            setNameError("First Name Must Be Included")
        }
        if(email == ""){
            setEmailError("Please Write Your Email For Contact")
        }
        if(phone == ""){
            setPhoneError("Must Include Phone Number")
        }
    }

    return (
        <>
            {/* ====================== Form Part ====================== */}
            <form onSubmit={handleSubmit} className='w-[780px]'>

                <ul className='flex flex-col gap-10'>

                    {/* ----------- first name input part ----------- */}
                    <li className='relative'>
                        <input onChange={handleName} type="text" placeholder='First Name' className='py-2 border-b-2 w-full font-monstereat font-normal text-4xl outline-none' />
                        <p className='absolute top-6 right-0 font-monstereat font-semibold text-xl text-red-400 animate-bounce'>{nameError}</p>
                    </li>

                    {/* ----------- last name input part  ----------- */}
                    <input type="text" placeholder='Last Name' className='py-2 border-b-2 w-full font-monstereat font-normal text-4xl outline-none' />
                    
                    {/* ----------- email input part ----------- */}
                    <li className='relative'>
                        <input onChange={handleEmail} type="email" placeholder='Email Address' className='py-2 border-b-2 w-full font-monstereat font-normal text-4xl outline-none' />
                        <p className='absolute top-6 right-0 font-monstereat font-semibold text-xl text-red-400 animate-bounce'>{emailError}</p>
                    </li>

                    {/* ----------- phone input part ----------- */}
                    <li className='relative'>
                        <input onChange={handlePhone} type="number" placeholder='Mobile Number' className='py-2 border-b-2 w-full font-monstereat font-normal text-4xl outline-none' />
                        <p className='absolute top-6 right-0 font-monstereat font-semibold text-xl text-red-400 animate-bounce'>{phoneError}</p>
                    </li>
                </ul>

                {/* ----------- CV upload part ----------- */}
                <button className='w-[520px] h-[100px] bg-[#D9D9D9] font-monstereat font-normal text-4xl rounded-xl mt-10 flex items-center justify-center gap-8'><IoCloudUploadSharp className='text-[50px]' />Upload A CV</button>
                <p className='font-monstereat font-medium text-2xl mt-5'>By clicking the Submit button you agree to <br /> our <span className='text-[#1E72B4]'>Privacy Policy</span>.</p>

                {/* ====================== For Submit Button  ====================== */}
                <a href="#" className='flex justify-end'>
                    <button className='w-[250px] h-[80px] bg-[#1E72B4] rounded-full font-monstereat font-medium text-[32px] text-white  submit_btn'>SUBMIT</button>
                </a>
            </form>
        </>
    )
}

export default Form