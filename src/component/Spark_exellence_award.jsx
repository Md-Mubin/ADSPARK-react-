// ========================== All Imports
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Spark_exellence_award = () => {
    return (
        <>
            {/* ==================== Award Part ==================== */}
            <section className='container w-[1700px] mb-10'>

                {/* ------- header ------- */}
                <h1 className='font-monstereat font-bold text-[100px] text-[#1A4A82] py-28 border-b-2 border-[#1A4A82] '>Globe Group's AdSpark Wins Two Golds at 2023 Marketing Excellence Awards</h1>

                {/* ------- awards ------- */}
                <ul className='flex justify-between font-monstereat font-normal text-base py-16'>
                    <li>Award-Giving Body: <span className='font-bold'>Marketing Excellence Awards</span></li>
                    <li>Award/Recognition: Gold - <span className='font-bold'>Excellence in Performance Marketing</span></li>
                    <li>Client: <span className='font-bold'>Globe Telecom</span></li>
                    <li>Campaign: <span className='font-bold'>DGPON Acquisition</span></li>
                </ul>

                {/* ------- awards image ------- */}
                <img src="/award.png" alt="award_image" />

                {/* ------- date ------- */}
                <p className='font-monstereat font-normal text-2xl text-[#666666] py-14'>AdSpark Team   |   December 6, 2023</p>

                <p className='font-monstereat font-medium text-4xl'>Nam dapibus mauris sit amet turpis rhoncus malesuada. Etiam non ante feugiat, sollicitudin lacus ac, mattis metus. Donec ullamcorper cursus neque. Quisque dui erat, pharetra sed nunc sit amet, finibus laoreet lectus. Sed commodo, dui eu placerat faucibus, dolor magna efficitur nisl, id egestas turpis mauris sed est. <br /> <br /> Quisque metus massa, aliquet blandit congue et, pellentesque non nibh. Mauris nisi nibh, euismod et nisl non, commodo consequat magna. Maecenas commodo pharetra arcu, vitae euismod turpis eleifend ut. In finibus ipsum neque, non posuere massa sagittis ut. Mauris congue diam vitae orci convallis pellentesque. Mauris eget massa ut risus sollicitudin tincidunt. </p> <br />
                <a href="#" className='font-monstereat font-bold text-4xl'>Check full story here</a>
                <ul className='mt-20 flex justify-center gap-[200px] pb-10'>
                    <button className='font-monstereat font-medium text-4xl text-[#666666] '>Back</button>
                    <button className='font-monstereat font-medium text-4xl text-[#666666] '>Next</button>
                </ul>
            </section>
        </>
    )
}

export default Spark_exellence_award