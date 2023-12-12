import React from 'react'

const Timeline = () => {
  return (
    <div>
      <div className='bg-blue2 position-relative z-1'>
        <div className='container pt-5'>
          <div className='d-flex align-items-center justify-content-center'>
            <p className='text-white fs-xl fw-semibold lh-136 pb-63 ff-poppins pb-5'>Roadmap</p>
          </div>
          <div className='timeline'>
            <div className='content right'>
              <div className=''>
                <p className='fs-2lg fw-semibold ff-poppins lh-150 text-white'>Q-4, 2021</p>
                <p className='mb-0 text-white fs-xs ff-poppins max-width-404 op-7 fw-normal lh-182'>Blandit sed penatibus elit tortor fermentum
                  velit
                  donec. Id eleifend
                  volutpat dolor netus auctor at. Volutpat sed auctor
                  non in commodo, felis viverra risus tristique.</p>
              </div>
            </div>
            <div className='content-2 left'>
              <div className=' max-width-404'>
                <p className='fs-2lg fw-semibold ff-poppins lh-150 text-white text-white  text-align-sm-right'>Q-1, 2022</p>
                <p className='mb-0 text-white fs-xs ff-poppins op-7 text-align-sm-right fw-normal lh-182'>Blandit sed penatibus elit tortor
                  fermentum velit
                  donec. Id eleifend volutpat
                  dolor netus auctor at. Volutpat sed auctor
                  non in commodo, felis viverra risus tristique.</p>
              </div>
            </div>
          </div>
          <div className='pl-70 pl-sm-0'>
            <div className='content right'>
              <div className=''>
                <p className='fs-2lg fw-semibold ff-poppins lh-150 text-white text-white'>Q-2, 2022</p>
                <p className='mb-0 text-white fs-xs ff-poppins max-width-404 op-7 fw-normal lh-182'>Blandit sed penatibus elit tortor fermentum velit
                  donec. Id
                  eleifend
                  volutpat
                  dolor netus auctor at. Volutpat sed auctor
                  non in commodo, felis viverra risus tristique.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='blue-ellipse-2'></div>
      </div>
    </div>
  )
}

export default Timeline
