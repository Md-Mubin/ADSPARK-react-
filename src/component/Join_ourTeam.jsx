// ========================== All Imports
import Navbar              from './Navbar'
import Footer              from './Footer'
import Job_info            from './Job_info'
import React, { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

const Join_ourTeam = () => {

    //  ============ useState Hook
    const [show, block] = useState(true)

    //  ============ toggle function
    const toggle = ()=>{
        block(!show)
    }


    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar />

            {/* ==================== Join Part ==================== */}
            <section className='w-full relative'>
                <img src="/join_our_team.png" alt="banner_image" />
                <ul className='font-monstereat text-white absolute bottom-12 mx-[85px]'>
                    <li className='font-normal text-[96px]'>JOIN OUR TEAM</li>
                    <li className='font-normal text-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra elementum feugiat. Vivamus ultrices, nibh eget maximus volutpat, dui arcu tincidunt lectus, ac consectetur ipsum nunc vitae mauris. Duis sed libero quis mi vehicula bibendum. </li>
                </ul>
            </section>

            {/* ==================== Spark Part ==================== */}
            <section className='w-[1700px] container py-16 '>
                <ul className='font-monstereat font-normal text-[64px] text-[#1A4A82]'>What will you Spark?</ul>
                <ul className='w-[1080px] font-monstereat font-normal text-4xl text-black ml-[375px] mt-10'>
                    Imperdiet proin fermentum leo vel orci porta. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Id venenatis a condimentum vitae sapien pellentesque habitant. Elit sed vulputate mi sit amet mauris. Bibendum ut tristique et egestas quis ipsum. Semper viverra nam libero justo laoreet sit. porta nibcras. <br /><br />
                    Integer feugiat scelerisque varius morbi. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Vel pharetra vel turpis nunc eget. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Ac auctor augue mauris augue.
                </ul>
            </section>

            {/* ==================== Job Vacancies Part ==================== */}
            <section className='w-[1700px] container py-20 mb-10 border-y-2 border-[#1A4A82]'>
                <h4 className='font-monstereat font-normal text-[64px] text-[#1A4A82] pb-10'>Job Vacancies</h4>

                {/* --------- social manger --------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-y-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Social Media Manager
                        <span><BiPlus /></span>
                    </li>
                </ul>

                {/* --------- clinet manger --------- */}
                <ul className='flex justify-end '>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-b-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Client Success Manager

                        {/* --------- for toggle --------- */}
                        <span className='cursor-pointer'>
                            {
                                show?
                                <BiPlus onClick={toggle} />
                                :
                                <BiMinus onClick={toggle}/>
                            }
                        </span>
                    </li>
                </ul>

                {/* --------- for toggle the info --------- */}
                <ul className='flex justify-end'>
                    {
                        show?
                        <li className='hidden'><Job_info/></li>
                        :
                        <li className=' block'><Job_info/></li>
                    }
                </ul>

                {/* --------- campaign manger --------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-b-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Campaign Manager
                        <span><BiPlus /></span>
                    </li>
                </ul>

                {/* --------- Product manger --------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-b-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Product Manager
                        <span><BiPlus /></span>
                    </li>
                </ul>

                {/* --------- Data manger --------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-b-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Data Analyst
                        <span><BiPlus /></span>
                    </li>
                </ul>
            </section>

            {/* ==================== Footer Part ==================== */}
            <Footer />
        </>
    )
}

export default Join_ourTeam