import React from 'react'

const Contact = () => {
    return (
        <div>
            <section id='contact'>
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='text-center'>Contact Us</h3>
                            <hr className='mx-auto w-25' />

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <img src='/images/contact-us.jpg' alt='contact' className='w-50 m-5' />

                        </div>
                        <div className='col-md-6'>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="name@example.com" />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="message" rows="3">Message...</textarea>
                                </div>
                                <button type="button" class="btn btn-outline-primary">Send Message</button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
