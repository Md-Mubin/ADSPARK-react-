// ========================== All Imports
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Footer = () => {

    const location = useLocation()

    const forHomepage = location.pathname === "/"

    return (
        <>
           {/* ==================== Footer Part ==================== */}
            <footer className={forHomepage ? "hidden" : "block"}>
                <section className=' py-20 bg-[#194980]'>
                    <ul className='container w-[1200px] flex justify-between'>
                        <ul className='font-monstereat font-medium'>
                            <li className='text-lg text-[#CCCCCC]'>Ready to solve your digital challenges?</li>
                            <li className='text-2xl text-[#999999] mt-8'>Let's connect and talk.</li>
                            <li className='text-2xl text-white mt-3'>strategy@adspark.ph</li>
                        </ul>
                        <ul className='font-monstereat font-medium'>
                            <li className='text-lg text-[#CCCCCC]'>Ready to solve your digital challenges?</li>
                            <li className='text-2xl text-[#999999] mt-8'>Let's connect and talk.</li>
                            <li className='text-2xl text-white mt-3'>strategy@adspark.ph</li>
                        </ul>
                        <ul className='font-monstereat font-medium'>
                            <li className='text-lg text-[#CCCCCC]'>Ready to solve your digital challenges?</li>
                            <li className='text-2xl text-[#999999] mt-8'>Let's connect and talk.</li>
                            <li className='text-2xl text-white mt-3'>strategy@adspark.ph</li>
                        </ul>
                    </ul>
                </section>

                {/* ==================== Footer Main Part ==================== */}
                <section className=' py-20 bg-[#D2E9FC]'>
                    <ul className='container w-[1700px] flex justify-between items-center'>
                        <ul className='font-monstereat font-medium w-[700px]'>
                            <img src="/icon.png'" alt="icon_image" />
                            <p className='font-monstereat font-medium text-[30px]'>An AdTech expert and a data-driven agency, accelerating digital and mobile advertising in the Philippines, through technology and innovation.</p>
                            
                            {/* ---------- footer social media part ---------- */}
                            <ul className='flex gap-5 mt-8'>
                                <a href='#' className='p-4 bg-black text-white rounded-full hover:scale-125 duration-200 will-change-transform'><FaFacebookF /></a>
                                <a href='#' className='p-4 bg-black text-white rounded-full hover:scale-125 duration-200 will-change-transform'><FaInstagram /></a>
                                <a href='#' className='p-4 bg-black text-white rounded-full hover:scale-125 duration-200 will-change-transform'><FaTwitter /></a>
                                <a href='#' className='p-4 bg-black text-white rounded-full hover:scale-125 duration-200 will-change-transform'><FaLinkedinIn /></a>
                                <a href='#' className='p-4 bg-black text-white rounded-full hover:scale-125 duration-200 will-change-transform'><FaYoutube /></a>
                            </ul>
                        </ul>

                        {/* ---------- footer info part ---------- */}
                        <ul className='font-monstereat font-light text-xl flex flex-col gap-5'>
                            <li className='font-bold text-black'>ABOUT US</li>
                            <li className='text-[#333333]'>Our People</li>
                            <li className='text-[#333333]'>Our Story.</li>
                            <li className='text-[#333333]'>Core Values</li>
                            <li className='text-[#333333]'>BCHI Family</li>
                        </ul>

                        {/* ---------- footer info part ---------- */}
                        <ul className='font-monstereat font-light text-xl flex flex-col gap-5'>
                            <li className='font-bold text-black'>PRODUCTS & SERVICES</li>
                            <li className='text-[#333333]'>Spark Intelligence</li>
                            <li className='text-[#333333]'>Spark Suit</li>
                            <li className='text-[#333333]'>Spark Studios</li>
                            <li className='text-[#333333]'>Spark Rewards</li>
                        </ul>

                        {/* ---------- footer info part ---------- */}
                        <ul className='font-monstereat font-light text-xl flex flex-col gap-5'>
                            <li className='font-bold text-black'>INQUIRIES</li>
                            <li className='text-[#333333]'>Contact Us</li>
                            <li className='text-[#333333]'>Careers</li>
                        </ul>
                    </ul>
                </section>

                {/* ==================== Copyright Part ==================== */}
                <section className='w-full bg-[#201D39] p-8 flex justify-between'>

                    <p className='font-monstereat font-normal text-white text-sm'>© Copyright 2024 AdSpark, Inc.   |   All Rights Reserved</p>
                    <ul className='font-monstereat font-normal text-sm text-white flex gap-10'>
                        <a href='#' className='hover:text-red-400'>Terms of Use</a>
                        <a href='#' className='hover:text-red-400'>Privacy Policy </a>
                        <a href='#' className='hover:text-red-400'>Sitemap</a>
                    </ul>
                </section>
            </footer>
        </>
    )
}

export default Footer