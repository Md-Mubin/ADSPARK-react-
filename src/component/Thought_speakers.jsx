// ========================== All Imports
import React    from 'react'
import Navbar   from './Navbar'
import Footer   from './Footer'
import { Link } from 'react-router-dom'

const Thought_speakers = () => {
    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar />

            {/* ==================== Speakers Part ==================== */}
            <section className='w-full py-[100px]'>
                <p className='font-monstereat italic text-base text-black mx-[45px]'>The Spark / Thoughtsparkers</p>

                {/* ------- articles ------- */}
                <ul className='container w-[1700px] text-center mt-5 flex flex-col gap-14'>
                    <h1 className='font-monstereat font-bold text-[100px] text-[#1A4A82]'>THOUGHT <span className='text-[#A51157]'>SPARKERS</span></h1>
                    <Link to='/article page'>
                        <img src="/thought_banner.png" alt="though_banner_image" className='hover:scale-105 duration-200' />
                    </Link>
                    <li className=' text-start font-monstereat font-normal text-[#1A4A83] text-3xl'>April 18, 2024</li>
                    <p className='text-start font-monstereat font-normal text-5xl'>Nam dapibus mauris sit ameth turpis rhoncus malesuada etiam non ante feugiat. Sit amet commodo nulla facilisi nullam. </p>
                </ul>

                {/* ------- articles ------- */}
                <ul className='container w-[1700px] border-t-2 border-[#1A4A83] py-[88px] flex gap-[78px] items-center justify-center mt-10'>
                    <ul className='flex flex-col gap-4 w-[800px] h-[700px] border-b-2 border-[#1A4A83]'>
                        <img src="/thought_banner2.png" alt="banner-image" />
                        <li className=' text-start font-monstereat font-normal text-[#1A4A83] text-3xl'>February 28, 2024</li>
                        <p className='text-start font-monstereat font-normal text-5xl'>Massa sapien faucibus et molestie ac. Ultrices eros in cursus turpis massa tincidunt.</p>
                    </ul>

                    {/* ------- articles ------- */}
                    <ul className='flex flex-col gap-4 w-[800px] h-[700px] border-b-2 border-[#1A4A83]'>
                        <img src="/thought_banner3.png" alt="banner-image" />
                        <li className=' text-start font-monstereat font-normal text-[#1A4A83] text-3xl'>January 1, 2024</li>
                        <p className='text-start font-monstereat font-normal text-5xl'>Quisque non tellus orci ac auctor augue mauris et mauris vitae.</p>
                    </ul>
                </ul>

                {/* ------- articles ------- */}
                <ul className='container w-[1700px] pb-[200px]  flex flex-wrap gap-[60px]'>
                    <ul className='flex flex-col gap-2 w-[470px] border-b-2 pb-4 border-[#666666]'>
                        <img src="/items1.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>December 25, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Vitae semper quis lectus nulla at volutpat diam. Et tortor </li>
                    </ul>

                    {/* ------- articles ------- */}
                    <ul className='flex flex-col gap-2 w-[470px] border-b-2 pb-4 border-[#666666]'>
                        <img src="/items2.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>October 15, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Blandit libero volutpat sed cras ornare arcu. In ornare quam viverra orci sagittis. </li>
                    </ul>

                    {/* ------- articles ------- */}
                    <ul className='flex flex-col gap-2 w-[470px] border-b-2 pb-4 border-[#666666]'>
                        <img src="/items3.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>July 31, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Leo vel fringilla est ullamcorper. Fames ac turpis egestas sed. </li>
                    </ul>

                    {/* ------- articles ------- */}
                    <ul className='flex flex-col gap-2 w-[470px] border-b-2 pb-4 border-[#666666]'>
                        <img src="/items4.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>June 17, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Sit amet commodo nulla facilisi nullam. Euismod quis viverra. </li>
                    </ul>

                    {/* ------- articles ------- */}
                    <ul className='flex flex-col gap-2 w-[470px] border-b-2 pb-4 border-[#666666]'>
                        <img src="/items5.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>May 1, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Ipsum dolor sit amet consectetur adipiscing elit duis. </li>
                    </ul>

                    {/* ------- articles ------- */}
                    <ul className='flex flex-col gap-2 w-[470px] border-b-2 pb-4 border-[#666666]'>
                        <img src="/items6.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>February 28, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Quis lectus nulla at volutpat diam uteme venenatis. </li>
                    </ul>
                </ul>

                {/* ------- view more button ------- */}
                <a href="#" className='flex justify-center mb-10'><button className='w-[380px] h-[75px] border-2 border-[#1E72B4] rounded-full font-monstereat font-medium text-2xl text-[#1E72B4] hover:bg-[#1E72B4] hover:text-white duration-200 hover:scale-110 will-change-transform'>View More</button></a>
            </section>

            {/* ==================== Footer Part ==================== */}
            <Footer />
        </>
    )
}

export default Thought_speakers