// ========================== All Imports
import React      from 'react'
import Navbar     from './Navbar'
import Footer     from './Footer'
import { BiPlus } from 'react-icons/bi'

const Who_we_are = () => {
    return (
        <>
            {/* ==================== Who We Are Part ==================== */}
            <section className='w-full relative'>
                <img src="/Who We Are Banner.png" alt="banner_image" />
                <ul className='absolute bottom-16 font-monstereat px-[80px]'>
                    <li className='font-normal text-[96px] text-white'>WHO WE ARE</li>
                    <li className='font-normal text-4xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra elementum feugiat. Vivamus ultrices, nibh eget maximus volutpat, dui arcu tincidunt lectus, ac consectetur ipsum nunc vitae mauris. Duis sed libero quis mi vehicula bibendum. </li>
                </ul>
            </section>

            {/* ==================== Sparkers Part ==================== */}
            <section className='w-[1700px] container'>
                <p className='font-monstereat font-normal text-[64px] text-[#1A4A82] py-10'>We Are Sparkers</p>

                <ul className='w-[1200px] ml-[350px] pb-10'>
                    <li className='font-monstereat font-normal text-[40px] mb-10'>Imperdiet proin fermentum leo vel orci porta. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Id venenatis a condimentum vitae sapien pellentesque habitant. Elit sed vulputate mi sit amet mauris. Bibendum ut tristique et egestas quis ipsum. Semper viverra nam libero justo laoreet sit. porta nibcras.</li>
                    <li className='flex flex-wrap gap-10 justify-end'>

                        {/* -------- experience -------- */}
                        <ul className='w-[550px] bg-[#A21156] px-10 rounded-2xl font-monstereat'>
                            <li className='font-semibold text-white text-[200px]'>15+</li>
                            <li className='font-medium text-white text-[40px]'>YEARS OF EXPERIENCE</li>
                        </ul>

                        {/* -------- industires -------- */}
                        <ul className='w-[550px] bg-[#1E72B4] px-10 rounded-2xl font-monstereat'>
                            <li className='font-semibold text-white text-[200px]'>100+</li>
                            <li className='font-medium text-white text-[40px]'>INDUSTRIES WORKED IN</li>
                        </ul>

                        {/* -------- campaigns -------- */}
                        <ul className='w-[550px] bg-[#1A4A82] px-10 rounded-2xl font-monstereat'>
                            <li className='font-semibold text-white text-[200px]'>10+</li>
                            <li className='font-medium text-white text-[40px]'>SUCCESSFUL CAMPAIGNS</li>
                        </ul>

                        {/* -------- recognitions -------- */}
                        <ul className='w-[550px] bg-[#D5701D] px-10 rounded-2xl font-monstereat'>
                            <li className='font-semibold text-white text-[200px]'>18+</li>
                            <li className='font-medium text-white text-[40px]'>AWARDS AND RECOGNITION'S</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* ==================== Leaders Part ==================== */}
            <section className='w-full bg-[#F8F8F8] py-16'>
                <div className='container w-[1700px]'>
                    <p className='font-monstereat font-normal text-[64px] text-[#1A4A82]'>OUR LEADEAR</p>
                    <ul className='flex justify-between'>

                        {/* ------- leader 1 ------- */}
                        <li className='font-monstereat w-[450px] h-[680px]'>
                            <img src="/leader1.png" alt="leader_image" />
                            <p className='font-medium text-[30px]'>John Louie Erestain</p>
                            <p className='font-light text-[28px] text-[#666666]'>Chief Operating Officer</p>
                        </li>

                        {/* ------- leader 2 ------- */}
                        <li className='font-monstereat w-[450px] h-[680px]'>
                            <img src="/leader2.png" alt="leader_image" />
                            <p className='font-medium text-[30px]'>Gian Carlo E. Vizcarra</p>
                            <p className='font-light text-[28px] text-[#666666]'>Director Client Success - Globe & Business Development</p>
                        </li>

                        {/* ------- leader 3 ------- */}
                        <li className='font-monstereat w-[450px] h-[680px]'>
                            <img src="/leader3.png" alt="leader_image" />
                            <p className='font-medium text-[30px]'>Jose Rafael G. Del Rosario</p>
                            <p className='font-light text-[28px] text-[#666666]'>Director Client Success - Enterprise Team</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* ==================== Story Part ==================== */}
            <section className='container w-[1700px] py-10'>
                <p className='font-monstereat font-normal text-[64px] text-[#1A4A82]'>OUR STORY</p>
                <ul className='w-[1200px] ml-[375px] mt-10'>
                    <li className='font-monstereat font-normal text-4xl'>Imperdiet proin fermentum leo vel orci porta. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Id venenatis a condimentum vitae sapien pellentesque habitant. Elit sed vulputate mi sit amet mauris. Bibendum ut tristique et egestas quis ipsum. Semper viverra nam libero justo laoreet sit. porta nibcras. <br /> <br />
                        Integer feugiat scelerisque varius morbi. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Vel pharetra vel turpis nunc eget. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Ac auctor augue mauris augue.
                    </li>
                    <li>
                        <img src="/story.png'" alt="image" />
                    </li>
                </ul>
            </section>

            {/* ==================== Spark Values Part ==================== */}
            <section className='w-[1700px] container py-20 mb-10 border-y-2 border-[#1A4A82]'>
                <h4 className='font-monstereat font-normal text-[64px] text-[#1A4A82] pb-10'>Spark Values</h4>

                {/* ------- values ------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-y-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Bulletproof Bravery <span><BiPlus /></span></li>
                </ul>

                {/* ------- values ------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-b-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Fiery Collaboration<span><BiPlus /></span></li>
                </ul>

                {/* ------- values ------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-b-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Super Shifting <span><BiPlus /></span></li>
                </ul>

                {/* ------- values ------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-b-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>Resource in Infinity <span><BiPlus /></span></li>
                </ul>

                {/* ------- values ------- */}
                <ul className='flex justify-end'>
                    <li className='font-monstereat font-bold text-[40px] py-8 border-b-2 border-[#1A4A82] flex items-center justify-between w-[1250px]'>HeartSpark <span><BiPlus /></span></li>
                </ul>
            </section>

            {/* ==================== BCHI Part ==================== */}
            <section className='container w-[1700px] py-20'>
                <h4 className='font-monstereat font-normal text-[64px] text-[#1A4A82] pb-10'>BCHI</h4>
                <p className='font-monstereat font-normal text-4xl'>Aenean et tortor at risus viverra adipiscing at in tellus. Ac ut consequat semper viverra nam. Porta non pulvinar neque laoreet suspendisse. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. <br /> <br />
                    Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Ut sem nulla pharetra diam sit amet. Tortor id aliquet lectus proin nibh nisl condimentum. Neque sodales ut etiam sit amet. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Vulputate enim nulla aliquet porttitor lacus luctus.
                </p>
            </section>
        </>
    )
}

export default Who_we_are