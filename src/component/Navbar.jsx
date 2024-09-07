// ========================== All Imports
import React    from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation()

    const forHomepage = location.pathname === "/"

    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <nav className={forHomepage ? "absolute w-full z-[1000] py-4" : "w-full py-4 bg-gradient-to-r from-[#ff8364] via-purple-700 to-[#1794fa] sticky top-0 z-[1000]"}>
                <ul className='w-[1700px] container flex justify-between '>

                    {/* ------------ Logo Part + Goes To Home Page ------------ */}
                    <Link to = '/'><img src="/icon.png" alt="icon_image" /></Link>
                    
                    {/* ------------ All Webpages Link ------------ */}
                    <ul className='flex items-center gap-16 font-monstereat font-medium text-lg text-white'>
                        <Link to="/our_work"      className='hover:scale-110 duration-200 will-change-transform'>OUR WORK</Link>
                        <Link to='/who we are'    className='hover:scale-110 duration-200 will-change-transform'>WHO WE ARE</Link>
                        <Link to='/what_we_do'    className='hover:scale-110 duration-200 will-change-transform'>WHAT WE DO</Link>
                        <Link to='/the spark'     className='hover:scale-110 duration-200 will-change-transform'>THE SPARK</Link>
                        <Link to="/join our team" className='hover:scale-110 duration-200 will-change-transform'>JOIN OUR TEAM</Link>
                    </ul>
                </ul>
            </nav>
        </>
    )
}

export default Navbar