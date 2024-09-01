// ========================== All Imports
import React  from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaArrowRightLong } from 'react-icons/fa6'

const Spark_intel = () => {
    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar />

            {/* ==================== What We Do Part ==================== */}
            <section className='container w-[1700px] mt-[60px] mb-[100px]'>
                <p className='font-monstereat font-extralight italic text-base'>What We Do / Spark Intelligence</p>
                <ul className='flex flex-col gap-20 items-center text-center'>
                    <img src="/saprk_intel_banner.png" alt="banner_image_spark" className='h-[500px]' />
                    <p className='font-monstereat font-medium text-4xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra elementum feugiat. Vivamus ultrices, nibh eget maximus volutpat, dui arcu tincidunt lectus, ac consectetur ipsum nunc vitae mauris. Vivamus neque massa, dapibus ac varius at, blandit eget leo. Nam dapibus mauris sit amet turpis rhoncus malesuada. Etiam non ante feugiat, sollicitudin lacus ac, mattis metus. Donec ullamcorper cursus neque. Quisque dui erat, pharetra sed nunc sit amet, finibus laoreet lectus. Sed commodo, dui eu placerat faucibus, dolor magna efficitur nisl, id egestas turpis mauris sed est.</p>
                    <img src="/workIntel.png'" alt="work_img" />
                    <p className='font-monstereat font-medium text-4xl '>Phasellus non orci sapien. Suspendisse congue ex at tortor sagittis, quis pulvinar erat dignissim. Vivamus vitae arcu ac quam pharetra euismod. Curabitur faucibus magna a accumsan pellentesque. Vivamus neque massa, dapibus ac varius at, blandit eget leo. Nam dapibus mauris sit amet turpis rhoncus malesuada. Etiam non ante feugiat, sollicitudin lacus ac, mattis metus. Donec ullamcorper cursus neque. Quisque dui erat, pharetra sed nunc sit amet, finibus laoreet lectus. Sed commodo, dui eu placerat faucibus, dolor magna efficitur nisl, id egestas turpis mauris sed est.</p>
                </ul>

                {/* ==================== Case Study Part ==================== */}
                <ul className='border-y-2 border-[#1A4A82] py-20 px-[108px] mt-20 flex gap-10 items-end'>
                    <ul className='flex flex-col gap-[60px]'>
                        <li className='font-monstereat font-semibold text-[30px] text-black'>Sample Case Study:</li>
                        <li className='font-monstereat font-bold text-5xl text-[#1A4A82]'>Hugo Boss Enters the Metaverse with a Virtual Showroom</li>
                        <li className='font-monstereat flex flex-col gap-4'>
                            <p className='font-normal text-xl'>Classification: <span className='font-bold'>Spark Intelligence</span></p>
                            <p className='font-normal text-xl'>Type: <span className='font-bold'>Brand Safety</span></p>
                            <p className='font-normal text-xl'>Client: <span className='font-bold'>Hugo Boss</span></p>
                            <p className='font-normal text-xl'>Deliverables: <span className='font-bold'>Brand Strategy, Concept, Design, Report</span></p>
                        </li>
                        <a href="#" className='font-monstereat font-semibold text-2xl text-[#1A4A83] flex items-center gap-4 hover:text-[#a9c2e0]'>Learn More <FaArrowRightLong /></a>
                    </ul>
                    <img src="/sparkIntelWorkBoos.png" alt="spark_workImg" className='w-[800px] h-[500px]' />
                </ul>
            </section>

            {/* ==================== Footer Part ==================== */}
            <Footer />
        </>
    )
}

export default Spark_intel