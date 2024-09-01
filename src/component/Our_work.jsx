// ========================== All Imports
import React    from 'react'
import Navbar   from './Navbar'
import Footer   from './Footer'
import { Link } from 'react-router-dom'

const Our_work = () => {
    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar />

            {/* ==================== Our Works Part ==================== */}
            <section className='w-full relative'>

                {/* ------- header part ------- */}
                <img src="/banner.png" alt="banner_image" className='bg-contain transparent' />
                <ul className='text-white absolute bottom-[38px] px-[60px]'>
                    <h1 className='font-monstereat font-normal text-[96px]'>OUR WORK</h1>
                    <p className='font-monstereat font-normal text-4xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra elementum feugiat. Vivamus ultrices, nibh eget maximus volutpat, dui arcu tincidunt lectus, ac consectetur ipsum nunc vitae mauris. Duis sed libero quis mi vehicula bibendum. Nulla consectetur sollicitudin enim sit amet.</p>
                </ul>
            </section>

            {/* ==================== Forums Part ==================== */}
            <ul className='container w-[1700] flex justify-center gap-[180px] mt-10'>
                <li className='w-[200px] text-center relative group/featured cursor-pointer font-monstereat font-normal text-2xl text-[#666666]'>Featured <span className='w-full h-[2px] bg-black absolute bottom-0 left-0 scale-0 group-hover/featured:scale-100 duration-300 '></span></li>
                <li className='w-[200px] text-center relative group/winnig cursor-pointer font-monstereat font-normal text-2xl text-[#666666]'>Award Winning<span className='w-full h-[2px] bg-black absolute bottom-0 left-0 scale-0 group-hover/winnig:scale-100 duration-300 '></span></li>
                <li className='w-[200px] text-center relative group/studies cursor-pointer font-monstereat font-normal text-2xl text-[#666666]'>Case Studies <span className='w-full h-[2px] bg-black absolute bottom-0 left-0 scale-0 group-hover/studies:scale-100 duration-300 '></span> </li>
            </ul>

            {/* ==================== Brands Part ==================== */}
            <section className='container w-[1700px] mt-[68px] mb-20'>

                {/* ------ corona ------ */}
                <Link to='/Our Work / Spark Suite / Corona Study' className='relative'>
                    <img src="/corona.png" alt="corona_image" className='rounded-3xl hover:scale-[1.01] duration-200 will-change-transform' />
                    <li className='absolute bottom-[62px] left-[76px] font-monstereat text-white'>
                        <p className='font-normal text-[32px]'>Spark Suite / Brand Safety</p>
                        <h6 className='font-semibold text-5xl mt-3'>CORONA</h6>
                    </li>
                </Link>

                <ul className='flex flex-wrap gap-20 mt-20'>

                    {/* ------ nike ------ */}
                    <ul className='relative'>
                        <img src="/nike.png" alt="corona_image" className='rounded-3xl w-[720px]' />
                        <li className='absolute bottom-[62px] left-[76px] font-monstereat text-white'>
                            <p className='font-normal text-[32px]'>Spark Studio / Key Visual Development</p>
                            <h6 className='font-semibold text-5xl mt-3'>NIKE</h6>
                        </li>
                    </ul>

                    {/* ------ brita ------ */}
                    <ul className='relative'>
                        <img src="/biria.png" alt="corona_image" className='rounded-3xl w-[720px]' />
                        <li className='absolute bottom-[62px] left-[76px] font-monstereat text-white'>
                            <p className='font-normal text-[32px]'>Spark Suite / Brand Safety</p>
                            <h6 className='font-semibold text-5xl mt-3'>BIRIA</h6>
                        </li>
                    </ul>

                    {/* ------ hugo boss ------ */}
                    <ul className='relative'>
                        <img src="/hugo.png" alt="corona_image" className='rounded-3xl w-[720px]' />
                        <li className='absolute bottom-[62px] left-[76px] font-monstereat text-white'>
                            <p className='font-normal text-[32px]'>Spark Intelligence / Digital ID AI Report</p>
                            <h6 className='font-semibold text-5xl mt-3'>HUGO BOSS</h6>
                        </li>
                    </ul>

                    {/* ------ rolex ------ */}
                    <ul className='relative'>
                        <img src="/rolex.png" alt="corona_image" className='rounded-3xl w-[720px]' />
                        <li className='absolute bottom-[62px] left-[76px] font-monstereat text-white'>
                            <p className='font-normal text-[32px]'>Spark Rewards / Loyalty Programs</p>
                            <h6 className='font-semibold text-5xl mt-3'>ROLEX</h6>
                        </li>
                    </ul>
                </ul>

                {/* ==================== All CAse Part ==================== */}
                <div className='flex justify-center mt-[78px]'>
                    <button className='w-[350px] py-2 border-2 border-[#1E72B4] rounded-full font-monstereat font-medium text-2xl text-[#1E72B4] hover:bg-[#1E72B4] hover:text-white duration-200'>
                        See All Case Studies
                    </button>
                </div>
            </section>

            {/* ==================== Footer Part ==================== */}
            <Footer />
        </>
    )
}

export default Our_work