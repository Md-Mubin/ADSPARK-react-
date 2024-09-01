// ========================== All Imports
import React          from 'react'
import Navbar         from './Navbar'
import Footer         from './Footer'
import { VscAccount } from 'react-icons/vsc'

const Article_page = () => {
    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar />

            {/* ==================== Article Part ==================== */}
            <section className='w-[1700px] container py-20 '>

                {/* --------- Header --------- */}
                <p className='font-monstereat italic text-base'>The Spark / Thoughtsparkers</p>
                <ul className='mt-20'>
                    <li className='font-monstereat font-normal text-[32px] '>April 18, 2024</li>
                    <li className='font-monstereat font-semibold text-[100px] text-[#1A4A83]'>Nam dapibus mauris sit ame turpis rhoncus malesuada etiam non ante feugiat.</li>
                </ul>

                {/* --------- Article Banner --------- */}
                <img src="/thought_banner.png" alt="banner_image" className='mt-10' />

                {/* infos */}
                <ul className='font-monstereat font-medium text-4xl flex flex-col gap-10 mt-10'>
                    <li className='text-5xl'>Nam dapibus mauris sit amet turpis rhoncus malesuada. Etiam non ante feugiat, sollicitudin lacus ac, mattis metus. Donec ullamcorper cursus neque. Quisque dui erat, pharetra sed nunc sit amet, finibus laoreet lectus. Sed commodo, dui eu placerat faucibus, dolor magna efficitur nisl, egestas turpis mauris sed.</li>
                    <li>Leo vel fringilla est ullamcorper eget. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Justo laoreet sit amet cursus sit amet dictum sit amet. Tristique risus nec feugiat in fermentum posuere urna nec. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Amet luctus venenatis lectus magna fringilla urna porttitor. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Id diam vel quam elementum. Quis viverra nibh cras pulvinar mattis. </li>
                    <li>Suscipit adipiscing bibendum est ultricies. Magna ac placerat vestibulum lectus. Duis tristique sollicitudin nibh sit amet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Dolor sit amet consectetur adipiscing elit duis.</li>
                    <li>Sed turpis tincidunt id aliquet. Cursus sit amet dictum sit amet justo. Elementum facilisis leo vel fringilla est ullamcorper. Facilisi cras fermentum odio eu feugiat. Nisl tincidunt eget nullam non nisi est. Ac tortor dignissim convallis aenean et tortor at risus viverra. Ac placerat vestibulum lectus mauris ultrices. Cursus in hac habitasse platea dictumst quisque sagittis. Nunc scelerisque viverra mauris in. Odio morbi quis commodo odio aenean. Bibendum at varius vel pharetra vel turpis nunc eget. Nam libero justo laoreet sit amet cursus sit. </li>
                </ul>

                {/* adspark team */}
                <ul className='mt-16'>
                    <li className='font-monstereat font-normal text-2xl flex items-center gap-5'><VscAccount className='text-4xl' />Author: AdSpark Team</li>
                </ul>

                {/* --------- Articels --------- */}
                <ul className='flex  justify-between mt-10 relative'>

                    {/* article */}
                    <ul className='flex flex-col gap-2 w-[470px] border-y-2 pt-20 pb-10 border-[#666666]'>
                        <img src="/items4.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>June 17, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Sit amet commodo nulla facilisi nullam. Euismod quis viverra. </li>
                    </ul>

                    {/* article */}
                    <ul className='flex flex-col gap-2 w-[470px] border-y-2 pt-20 pb-10 border-[#666666]'>
                        <img src="/items5.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>May 1, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Ipsum dolor sit amet consectetur adipiscing elit duis. </li>
                    </ul>

                    {/* article */}
                    <ul className='flex flex-col gap-2 w-[470px] border-y-2 pt-20 pb-10 border-[#666666]'>
                        <img src="/items6.png" alt="items_image" className='hover:scale-105 duration-200' />
                        <li className='font-monstereat font-normal text-[#1A4A83] text-2xl'>February 28, 2023</li>
                        <li className='font-monstereat font-semibold text-[40px] text-black'>Quis lectus nulla at volutpat diam uteme venenatis. </li>
                    </ul>

                    {/* For More Articles */}
                    <p className='absolute top-6 font-monstereat font-semibold text-[#1A4A83] text-4xl'>More Articles :</p>
                </ul>
            </section>

            {/* ==================== Footer Part ==================== */}
            <Footer />
        </>
    )
}

export default Article_page