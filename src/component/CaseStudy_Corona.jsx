// ========================== All Imports
import React    from 'react'
import Navbar   from './Navbar'
import Footer   from './Footer'

const CaseStudy_Corona = () => {
    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar />

            {/* ==================== Case Study Part ==================== */}
            <section className='container w-[1700px] py-20'>
                
                <p className='font-monstereat italic text-base text-[#666666]'>Our Work / Spark Suite / Corona Study</p>

                <ul className='font-monstereat py-[50px]'>
                    <li className='font-bold text-[100px] text-[#1A4A82]'>The World's Most <br /> Valuable Beer Brand</li>
                    <li className='font-medium text-[32px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra elementum feugiat. Vivamus ultrices, nibh eget maximus volutpat, dui arcu tincidunt lectus, ac consectetur ipsum nunc vitae mauris. </li>
                </ul>

                {/* ----------- all study ----------- */}
                <ul className='border-t-2 border-[#1A4A82] py-8 flex justify-between'>
                    <li>Classification: Spark Suite</li>
                    <li>Type: Brand Safety</li>
                    <li>Client: Corona Beer</li>
                    <li>Deliverables: Brand Strategy, Concept, Design, Report</li>
                </ul>

                {/* ----------- corona study ----------- */}
                <img src="/corona.png" alt="banner_image" className='rounded-3xl' />

                {/* ----------- CHALLENGE ----------- */}
                <ul className='font-monstereat flex justify-between py-10'>
                    <li className='font-semibold text-xl'>CHALLENGE</li>
                    <li className='font-medium text-4xl w-[1200px]'>In vitae urna congue, suscipit orci eu, euismod ante. Proin eget pulvinar lectus. Duis id diam mauris. Phasellus lectus lacus, egestas et sodales id, gravida id velit. Fusce cursus viverra diam. Donec vulputate eros id viverra finibus. Cras id sem nec odio iaculis ultrices. Praesent leo tellus, bibendum quis ex id, scelerisque consectetur tortor. </li>
                </ul>

                {/* ----------- SOLUTION ----------- */}
                <ul className='font-monstereat flex justify-between py-10'>
                    <li className='font-semibold text-xl'>SOLUTION</li>
                    <li className='font-medium text-4xl w-[1200px]'>Vivamus neque massa, dapibus ac varius at, blandit eget leo. Nam dapibus mauris sit amet turpis rhoncus malesuada. Etiam non ante feugiat, sollicitudin lacus ac, mattis metus. Donec ullamcorper cursus neque. Quisque dui erat, pharetra sed nunc sit amet, finibus laoreet lectus. Sed commodo, dui eu placerat faucibus, dolor magna efficitur nisl, id egestas turpis mauris sed est.</li>
                </ul>

                {/* ----------- RESULT ----------- */}
                <ul className='font-monstereat flex justify-between py-10'>
                    <li className='font-semibold text-xl'>RESULT</li>
                    <li className='font-medium text-4xl w-[1200px]'>Phasellus non orci sapien. Suspendisse congue ex at tortor sagittis, quis pulvinar erat dignissim. Vivamus vitae arcu ac quam pharetra euismod. Curabitur faucibus magna a accumsan pellentesque. Vivamus neque massa, dapibus ac varius at, blandit eget leo. Nam dapibus mauris sit amet turpis rhoncus malesuada. Etiam non ante feugiat, sollicitudin lacus ac, mattis metus. Donec ullamcorper cursus neque. Quisque dui erat, pharetra sed nunc sit amet, finibus laoreet lectus. Sed commodo, dui eu placerat faucibus, dolor magna efficitur nisl, id egestas turpis mauris sed est.</li>
                </ul>

                {/* ----------- other study ----------- */}
                <ul className='flex justify-between py-10'>
                    <img src="/coronaStudy1.png" alt="image" className='w-[750px]' />
                    <img src="/coronaStudy2.png" alt="image" className='w-[750px]' />
                </ul>

                <ul className='font-monstereat font-medium text-4xl'>
                    Nam dapibus mauris sit amet turpis rhoncus malesuada. Etiam non ante feugiat, sollicitudin lacus ac, mattis metus. Donec ullamcorper cursus neque. Quisque dui erat, pharetra sed nunc sit amet, finibus laoreet lectus. Sed commodo, dui eu placerat faucibus, dolor magna efficitur nisl, id egestas turpis mauris sed est. <br /><br /> 
                    Quisque metus massa, aliquet blandit congue et, pellentesque non nibh. Mauris nisi nibh, euismod et nisl non, commodo consequat magna. Maecenas commodo pharetra arcu, vitae euismod turpis eleifend ut. In finibus ipsum neque, non posuere massa sagittis ut. Mauris congue diam vitae orci convallis pellentesque. Mauris eget massa ut risus sollicitudin tincidunt.
                </ul>

            </section>

            {/* ==================== Footer Part ==================== */}
            <Footer />
        </>
    )
}

export default CaseStudy_Corona