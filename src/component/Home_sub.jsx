// ========================== All Imports
import React    from 'react'
import Navbar   from './Navbar'
import Footer   from './Footer'

const Home_sub = () => {
    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar />

            {/* ==================== Subjected Home Part ==================== */}
            <section className='w-full '>
                <ul className='flex justify-center'>

                    {/* ----------- banner part ----------- */}
                    <img src="/Sub_banner.png" alt="sub_banner_img" />

                    <ul className='absolute top-56 font-monstereat text-white flex flex-col items-center gap-4'>
                        <h1 className='font-semibold text-6xl'>Cursus Turpis Massa Tincidunt</h1>
                        <p className='font-light text-[30px] px-32 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat pellentesque adipiscing commodo elit. Et netus et malesuada fames ac turpis egestas. </p>

                        {/* ------------ all works ------------ */}
                        <ul className='flex flex-wrap gap-14 px-[278px] justify-center mt-20'>
                            <li className='font-monstereat py-8 px-14 bg-[#00000030] text-center rounded-[20px]'>
                                <p className='font-medium text-5xl'>100+</p>
                                <p className='font-normal text-2xl'>Industries Worked In</p>
                            </li>
                            <li className='font-monstereat py-8 px-14 bg-[#00000030] text-center rounded-[20px]'>
                                <p className='font-medium text-5xl'>100+</p>
                                <p className='font-normal text-2xl'>Industries Worked In</p>
                            </li>
                            <li className='font-monstereat py-8 px-14 bg-[#00000030] text-center rounded-[20px]'>
                                <p className='font-medium text-5xl'>100+</p>
                                <p className='font-normal text-2xl'>Industries Worked In</p>
                            </li>
                            <li className='font-monstereat py-8 px-14 bg-[#00000030] text-center rounded-[20px]'>
                                <p className='font-medium text-5xl'>100+</p>
                                <p className='font-normal text-2xl'>Industries Worked In</p>
                            </li>
                            <li className='font-monstereat py-8 px-14 bg-[#00000030] text-center rounded-[20px]'>
                                <p className='font-medium text-5xl'>100+</p>
                                <p className='font-normal text-2xl'>Industries Worked In</p>
                            </li>
                            <li className='font-monstereat py-8 px-14 bg-[#00000030] text-center rounded-[20px]'>
                                <p className='font-medium text-5xl'>100+</p>
                                <p className='font-normal text-2xl'>Industries Worked In</p>
                            </li>
                        </ul>
                        <button className='w-[380px] py-6 font-monstereat font-light text-2xl text-white border-2 border-[#FFC617] hover:bg-[#FFC617] hover:text-black duration-200 rounded-full mt-16'>View Services</button>
                    </ul>
                </ul>
            </section>

            {/* ==================== Subjected Home Section 2 ==================== */}
            <section className='w-full relative flex flex-col items-center'>

                <img src="/Sub_banner2.png" alt="sub_banner2_img" />

                <ul className='flex flex-wrap gap-8 justify-center absolute top-40'>

                    {/* --------- Spark part --------- */}
                    <li className='relative group/suit w-[550px] h-[780px] group/spark1'>
                        <img src="/works1.png" alt="works_img" />
                        <span className='w-full h-[780px] backdrop-blur-md absolute z-10 top-[0px] rounded-2xl px-10 py-[350px] text-center invisible group-hover/spark1:visible'>
                            <p className='font-monstereat font-semibold text-4xl text-white mb-4'>Spark Suit</p>
                            <p className='font-monstereat font-normal text-2xl text-white text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </span>
                    </li>

                    {/* --------- Spark part --------- */}
                    <li className='relative w-[1130px] h-[370px] group/spark2'>
                        <img src="/works2.png" alt="works_img" />
                        <span className='w-full h-[370px] backdrop-blur-md absolute z-10 top-[0px] rounded-2xl py-[120px] px-[200px] text-center invisible group-hover/spark2:visible'>
                            <p className='font-monstereat font-semibold text-4xl text-white mb-4'>Spark Intelligence</p>
                            <p className='font-monstereat font-normal text-2xl text-white text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </span>
                    </li>

                    {/* --------- Spark part --------- */}
                    <li className='relative w-[1130px] h-[370px] group/spark4'>
                        <img src="/works4.png" alt="works_img" />
                        <span className='w-full h-[370px] backdrop-blur-md absolute z-10 top-0 rounded-2xl px-10 py-[150px] text-center invisible group-hover/spark4:visible'>
                            <p className='font-monstereat font-semibold text-4xl text-white mb-2'>Spark Suit</p>
                            <p className='font-monstereat font-normal text-2xl text-white text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </span>
                    </li>

                    {/* --------- Spark part --------- */}
                    <li className='relative group/spark3 w-[545px] h-[780px]'>
                        <img src="/works3.png" alt="works_img" className='translate-y-[-403px]' />
                        <span className='w-full h-full backdrop-blur-md absolute z-10 top-0 rounded-2xl px-10 py-[350px] text-center invisible group-hover/spark3:visible translate-y-[-403px]'>
                            <p className='font-monstereat font-semibold text-4xl text-white mb-2'>Spark Suit</p>
                            <p className='font-monstereat font-normal text-2xl text-white text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </span>
                    </li>

                    {/* --------- Spark part --------- */}
                    <li className='relative group/spark5 w-[545px] h-[370px]'>
                        <img src="/works5.png" alt="works_img" className=' translate-y-[-1215px]' />
                        <span className='w-full h-full backdrop-blur-md absolute z-10 top-0 rounded-2xl py-[150px] text-center invisible group-hover/spark5:visible translate-y-[-1215px]'>
                            <p className='font-monstereat font-semibold text-4xl text-white mb-2'>Spark Suit</p>
                            <p className='font-monstereat font-normal text-2xl text-white text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </span>
                    </li>

                </ul>
                <button className='w-[380px] py-6 border-2 border-[#FFC617] font-monstereat font-light text-2xl text-white absolute bottom-20 rounded-full hover:bg-[#FFC617] hover:text-white'>See All Works</button>
            </section>

            {/* ==================== Subjected Home Section 3 ==================== */}
            <section className='w-full relative '>
                <img src="/Sub_banner3.png" alt="sub_banner_img" />

                <ul className='w-full flex flex-col gap-20 text-center absolute top-0 py-[350px] px-[225px] font-monstereat font-light text-3xl text-white'>
                    <h3>They strive to be at the top of the league when it comes to digital strategies, they understood the changes in different channels such as social media and knew how it would impact our business. Truly, they have a great ability to carry out a vision.</h3>
                    <h4 className='font-bold text-4xl'>Amanda Sheila Whittingham</h4>
                    <p>President Privact Social Sector</p>
                </ul>
            </section>

            {/* ==================== Footer Part ==================== */}
            <Footer />
        </>
    )
}

export default Home_sub