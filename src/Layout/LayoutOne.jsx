// ========================== All Imports
import React      from 'react'
import Navbar     from '../component/Navbar'
import Footer     from '../component/Footer'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {

    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar/>

            {/* ==================== Outlet Part ==================== */}
            <Outlet />

            {/* ==================== Footer Part ==================== */}
            <Footer />
        </>
    )
}

export default LayoutOne