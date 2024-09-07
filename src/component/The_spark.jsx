// ========================== All Imports
import React                from 'react'
import Navbar               from './Navbar'
import Footer               from './Footer'
import { Link }             from 'react-router-dom'
import { VscAccount }       from 'react-icons/vsc'
import { FaArrowRightLong } from 'react-icons/fa6'

const The_spark = () => {
    return (
        <>
            {/* ==================== spark Part ==================== */}
            <section className='w-full relative'>
                <img src="/spark_banner.png" alt="spark_banner" />
                <ul className='absolute font-monstereat text-white bottom-8 px-[76px]'>
                    <li className='font-normal text-[96px]'>THE SPARK</li>
                    <li className='font-normal text-4xl mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra elementum feugiat. Vivamus ultrices, nibh eget maximus volutpat, dui arcu tincidunt lectus, ac consectetur ipsum nunc vitae mauris. Duis sed libero quis mi vehicula bibendum. Nulla consectetur sollicitudin enim sit amet. </li>
                </ul>
            </section>

            <section className='container w-[1700px] mt-[90px]'>
                <h2 className='font-monstereat font-normal text-[64px] text-[#1A4A82] mb-[100px]'>Awards and Recognitions</h2>
                <ul className='border-y-2 border-[#1A4A82] py-[76px] flex gap-20'>
                    <li className='flex flex-col font-monstereat font-semibold text-[30px] text-[#1A4A82] w-[500px]'>Marketing Excellence Awards <span>2023</span></li>
                    <ul className='flex flex-col gap-20 items-start  w-[1100px] font-monstereat text-black'>
                        <li className='font-semibold text-[40px]'>Gold - Excellence in Performance Marketing</li>
                        <li className='font-normal text-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper risus in. Commodo viverra maecenas accumsan lacus. Enim blandit volutpat maecenas volutpat blandit aliquam. Diam ut venenatis tellus in metus vulputate eu. </li>
                        <Link to='/the spark / marketing exellence award'>
                            <button className='font-monstereat font-semibold text-2xl text-[#1A4A82] flex items-center gap-4'>Learn More <FaArrowRightLong /> </button>
                        </Link>
                    </ul>
                </ul>

                <ul className='border-b-2 border-[#1A4A82] py-[76px] flex gap-20'>
                    <li className='flex flex-col font-monstereat font-semibold text-[30px] text-[#1A4A82] w-[500px]'>Marketing Excellence Awards <span>2023</span></li>
                    <ul className='flex flex-col gap-20 items-start  w-[1100px] font-monstereat text-black'>
                        <li className='font-semibold text-[40px]'>Gold - Excellence in Performance Marketing</li>
                        <li className='font-normal text-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper risus in. Commodo viverra maecenas accumsan lacus. Enim blandit volutpat maecenas volutpat blandit aliquam. Diam ut venenatis tellus in metus vulputate eu. </li>
                        <button className='font-monstereat font-semibold text-2xl text-[#1A4A82] flex items-center gap-4'>Learn More <FaArrowRightLong /> </button>
                    </ul>
                </ul>

                <ul className='border-b-2 border-[#1A4A82] py-[76px] flex gap-20'>
                    <li className='flex flex-col font-monstereat font-semibold text-[30px] text-[#1A4A82] w-[500px]'>Marketing Excellence Awards <span>2023</span></li>
                    <ul className='flex flex-col gap-20 items-start  w-[1100px] font-monstereat text-black'>
                        <li className='font-semibold text-[40px]'>Gold - Excellence in Performance Marketing</li>
                        <li className='font-normal text-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper risus in. Commodo viverra maecenas accumsan lacus. Enim blandit volutpat maecenas volutpat blandit aliquam. Diam ut venenatis tellus in metus vulputate eu. </li>
                        <button className='font-monstereat font-semibold text-2xl text-[#1A4A82] flex items-center gap-4'>Learn More <FaArrowRightLong /> </button>
                    </ul>
                </ul>

                <a href="#" className='flex justify-center'><button className='font-monstereat font-normal text-2xl text-[#1E72B4] w-[250px] py-4 border-2 rounded-full border-[#1E72B4] mt-10 hover:bg-[#1E72B4] hover:text-white duration-200'>View More</button></a>
            </section>

            <section className='w-full bg-[#707070] py-20  mt-[100px]'>
                <ul className='container w-[1700px]'>
                    <li className='font-monstereat text-white text-center'>
                        <h3 className='font-bold text-[30px]'>OUR PARTNERS</h3>
                        <p className='font-normal text-[40px] text-[#cccccc]'>Luctus venenatis lectus magna fringilla urna porttitor rhocus dolor purus. Sed vulputate mi sit amet mauris commodo quis imperdiet.</p>
                    </li>

                    <ul className='flex flex-wrap gap-16 justify-center mt-20'>
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner1.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner2.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner3.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner4.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner5.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner6.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner7.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner8.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner9.png" alt="partner_img" />
                        </li>

                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner10.png" alt="partner_img" />
                        </li>
                    </ul>
                </ul>
            </section>

            <section className='w-full relative'>
                <img src="/spark_banner2.png" alt="banner_img" />

                <ul className='absolute top-20 px-[145px]'>
                    <h3 className='font-monstereat font-normal text-[64px] text-white'>ThoughtSparkers</h3>
                    <ul className='flex gap-10 mt-10 '>
                        <li className='w-[510px] h-[680px] bg-white rounded-3xl'>
                            <img src="/col1.png" alt="image" />
                            <ul className='font-monstereat text-black px-10 py-[30px] flex flex-col gap-10 '>
                                <li className='font-normal text-xl text-[#1A4A82]'>April 15, 2024</li>
                                <li className='font-medium text-4xl'>Lorem ipsum dolor sit amet, elit consectetur adipiscing pharet.</li>
                                <li className='font-normal text-xl flex items-center gap-4'><VscAccount />Author: AdSpark Team</li>
                            </ul>
                        </li>

                        <li className='w-[510px] h-[680px] bg-white rounded-3xl'>
                            <img src="/col2.png" alt="image" />
                            <ul className='font-monstereat text-black px-10 py-[30px] flex flex-col gap-10 '>
                                <li className='font-normal text-xl text-[#1A4A82]'>April 15, 2024</li>
                                <li className='font-medium text-4xl'>Lorem ipsum dolor sit amet, elit consectetur adipiscing pharet.</li>
                                <li className='font-normal text-xl flex items-center gap-4'><VscAccount />Author: AdSpark Team</li>
                            </ul>
                        </li>

                        <li className='w-[510px] h-[680px] bg-white rounded-3xl'>
                            <img src="/col3.png" alt="image" />
                            <ul className='font-monstereat text-black px-10 py-[30px] flex flex-col gap-10 '>
                                <li className='font-normal text-xl text-[#1A4A82]'>April 15, 2024</li>
                                <li className='font-medium text-4xl'>Lorem ipsum dolor sit amet, elit consectetur adipiscing pharet.</li>
                                <li className='font-normal text-xl flex items-center gap-4'><VscAccount />Author: AdSpark Team</li>
                            </ul>
                        </li>
                    </ul>

                    <Link to= '/thought of speakers' className='flex justify-center mt-40'> <button className='w-[380px] py-4 font-monstereat font-medium text-2xl border-2 rounded-full hover:bg-white hover:text-black'>View All</button></Link>
                </ul>
            </section>
        </>
    )
}

export default The_spark