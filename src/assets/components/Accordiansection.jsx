import React from 'react'

const Accordiansection = () => {
    return (
        <div id="Faq" className='bg-blue2 pb-5 position-relative z-1'>
            <div className='accordian-container pb-5'>
                <div className='d-flex align-items-center justify-content-center '>
                    <p className=' text-white text-center max-w-786 pt-4 fw-medium lh-150 fs-2lg ff-poppins'>And this just the begining , the team is working on
                        more
                        suprises for our community. Buddybullies
                        stronger together !!</p>
                </div>
                <div className='d-flex justify-content-center pt-5'>
                    <p className='text-white ff-poppins lh-136  text-white fw-semibold fs-xl pt-5'>FAQs</p>
                </div>
                <div class="accordion margin-x-auto " id="accordionExample">
                    <div data-aos="fade-right" class="accordion-item mb-26">
                        <h2 class="accordion-header">
                            <button class="accordion-button text-white ff-montserrat fw-medium fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> What’s the blockchain the buddybullies call home ? </button></h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body fs-xs  ff-montserrat op-7 fw-medium text-white max-w-800"> Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="accordion-item mb-26">
                        <h2 class="accordion-header"><button class="accordion-button collapsed text-white ff-montserrat fw-medium fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What’s the blockchain the buddybullies call home ?</button></h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body fs-xs ff-montserrat op-7 fw-medium text-white max-w-800">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="accordion-item mb-26">
                        <h2 class="accordion-header"><button class="accordion-button collapsed text-white ff-montserrat fw-medium fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What’s the blockchain the buddybullies call home ? </button></h2>
                        <div id="collapseThree" class="accordion-collapse collapse fs-lg fw-medium ff-monterset text-white" data-bs-parent="#accordionExample">
                            <div class="accordion-body fs-xs ff-montserrat op-7 fw-medium text-white max-w-800">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed text-white ff-montserrat fw-medium fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What’s the blockchain the buddybullies call home ?</button></h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body fs-xs  ff-montserrat op-7 fw-medium text-white max-w-800">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blue-ellipse-3'></div>
        </div>
    )
}

export default Accordiansection
