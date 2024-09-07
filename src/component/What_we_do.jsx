// ========================== All Imports
import React     from 'react'
import Navbar    from './Navbar'
import Footer    from './Footer'
import { Link }  from 'react-router-dom'

const What_we_do = () => {
    return (
        <>
            {/* ==================== What We Do Part ==================== */}
            <section className='w-full relative'>
                <ul className='container w-[1700px] py-[100px] flex flex-col gap-[65px]'>
                    <li className='font-monstereat font-normal text-4xl text-black'>
                        Bibendum arcu vitae elementum curabitur vitae. Mauris vitae ultricies leo integer malesuada nunc vel. Lacinia quis vel eros donec ac. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Viverra nam libero justo laoreet sit amet cursus sit.
                    </li>

                    {/* ------ things we did part ------ */}
                    <ul className='flex justify-end'>
                        <li className=' relative flex justify-center'>
                            <img src='/sparkIntelligence.png' alt="spark_images" className='w-[1350px] h-[650px]' />
                            <Link to='/What We Do / Spark Intelligence' className='absolute bottom-[100px]'>
                                <button className='w-[310px] py-6 bg-white text-black  rounded-full hover:bg-black hover:text-white duration-200'>Learn More</button>
                            </Link>
                        </li>
                    </ul>

                    {/* ------ things we did part ------ */}
                    <ul className='flex justify-start'>
                        <li className=' relative flex justify-center'>
                            <img src="/sparkSuite.png" alt="spark_images" className='w-[1350px] h-[650px]' />
                            <button className='w-[310px] py-6 bg-white text-black absolute bottom-[100px] rounded-full hover:bg-black hover:text-white duration-200'>Learn More</button>
                        </li>
                    </ul>

                    {/* ------ things we did part ------ */}
                    <ul className='flex justify-end'>
                        <li className=' relative flex justify-center'>
                            <img src="/sparkStudios.png'" alt="spark_images" className='w-[1350px] h-[650px]' />
                            <button className='w-[310px] py-6 bg-white text-black absolute bottom-[100px] rounded-full hover:bg-black hover:text-white duration-200'>Learn More</button>
                        </li>
                    </ul>

                    {/* ------ things we did part ------ */}
                    <ul className='flex justify-start'>
                        <li className=' relative flex justify-center'>
                            <img src="/sparkReward.png" alt="spark_images" className='w-[1350px] h-[650px]' />
                            <button className='w-[310px] py-6 bg-white text-black absolute bottom-[100px] rounded-full hover:bg-black hover:text-white duration-200'>Learn More</button>
                        </li>
                    </ul>
                </ul>
            </section>

            {/* ==================== Partners Part ==================== */}
            <section className='w-full bg-[#707070] py-20'>
                <ul className='container w-[1700px]'>
                    <li className='font-monstereat text-white text-center'>
                        <h3 className='font-bold text-[30px]'>OUR PARTNERS</h3>
                        <p className='font-normal text-[40px] text-[#cccccc]'>Luctus venenatis lectus magna fringilla urna porttitor rhocus dolor purus. Sed vulputate mi sit amet mauris commodo quis imperdiet.</p>
                    </li>

                    {/* ==================== All Partners ==================== */}
                    <ul className='flex flex-wrap gap-16 justify-center mt-20'>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner1.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner2.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner3.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner4.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner5.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner6.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner7.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner8.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner9.png" alt="partner_img" />
                        </li>

                        {/* ----- partner ----- */}
                        <li className='w-[250px] h-[120px] rounded-3xl flex justify-center items-center hover:scale-110 duration-200 cursor-pointer will-change-transform'>
                            <img src="/partner10.png" alt="partner_img" />
                        </li>
                    </ul>
                </ul>
            </section>
        </>
    )
}

export default What_we_do