// ========================== All Imports
import React  from 'react'
import Navbar from './Navbar'
import Form   from './Form'

const Job_apply = () => {
    return (
        <>
            {/* ==================== Navbar Part ==================== */}
            <Navbar />

            {/* ==================== Apply Part ==================== */}
            <section className='container w-[1700px] py-20 flex justify-between'>
                <ul className='font-monstereat text-black'>
                    <li className='font-normal text-2xl'>Apply as a</li>
                    <li className='font-bold text-[40px] mt-10'>Client Success Manager</li>
                </ul>

                {/* ==================== Footer Part ==================== */}
                <Form />
            </section>
        </>
    )
}

export default Job_apply