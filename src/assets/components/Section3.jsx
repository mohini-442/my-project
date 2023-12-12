import React from 'react'
import cartoon1 from '../images/cartoon1.png'
import cartoon2 from '../images/cartoon2.png'
import cartoon3 from '../images/cartoon3.png'

const Section3 = () => {
    return (
        <div>
            <section id="Team" className='bg-blue2'>
                <div className='my-container pb-5'>
                    <h2 className='ff-poppins fs-xl fw-semibold lh-136 text-white text-center pb-26'>Our Team</h2>
                    <div className='row pt-4 justify-content-center'>
                        <div className='col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center flex-column'>
                            <img className='w-img' src={cartoon1} alt="cartoon1" />
                            <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4 mb-0'>Prime Bullister</p>
                            <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Pruduct Designer</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center flex-column pt-5 pt-md-0'>
                            <img className='w-img' src={cartoon2} alt="cartoon2" />
                            <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4 mb-0'>Solvador Bulli</p>
                            <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Artist</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center flex-column pt-5 pt-lg-0'>
                            <img className='w-img' src={cartoon3} alt="cartoon3" />
                            <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4 mb-0'>Meta Bully</p>
                            <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Developer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section3
