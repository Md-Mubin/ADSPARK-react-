// ========================== All Imports
import React    from 'react'
import Navbar   from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='w-full h-screen relative flex justify-center'>

        {/* ==================== Navbar Part ==================== */}
        <ul className='w-full absolute'>
          <Navbar />
        </ul>

        {/* ==================== Banenr Part ==================== */}
        <img src="/home_banner.png" alt="home_banner_img" className='w-full' />

        {/* ==================== Infos Part ==================== */}
        <ul className='absolute top-44 flex flex-col gap-10 items-center mt-40'>
          <h1 className='font-monstereat font-bold text-6xl text-white'>Ideate. Create. Communicate.</h1>
          <p className='font-monstereat font-medium text-5xl text-[#FFC617] mt-3'>From Strategy to Media. Through AdTech and Data. </p>
          <p className='font-monstereat font-light text-5xl text-white mt-3'>We Spark what you need.</p>

          {/* ----------- to go second home ----------- */}
          <Link to='/home_sub'>
            <button className='w-[480px] py-4 border-2 border-[#FFC617] rounded-full mt-20 font-monstereat font-light text-[30px] text-white hover:bg-[#FFC617] duration-200 hover:scale-110 will-change-transform hover:text-black'>SPARK WITH US</button>
          </Link>
        </ul>
      </section>
    </>
  )
}

export default Home