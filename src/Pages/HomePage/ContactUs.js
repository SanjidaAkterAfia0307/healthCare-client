import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-teal-500 py-6 text-white rounded-xl my-24'>
            <h1 className='text-4xl font-bold my-5  text-center'>Contact Me</h1>
            <div className='md:flex px-3 justify-center'>
                <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" className='flex  flex-col mt-12' action="https://formspree.io/f/xrgdnroz" method="post">

                    <label className='mt-5 mb-2 text-lg' htmlFor="full-name">Full Name</label>
                    <input className="input input-bordered w-full max-w-xs"  type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                    <label className='mt-5 mb-2 text-lg' htmlFor="email-address">Email Address</label>
                    <input className="input input-bordered w-full max-w-xs" type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                    <label className='mt-5 mb-2 text-lg' htmlFor="message">Message</label>
                    <textarea className="textarea w-full textarea-bordered md:w-96" name="message" id="message" placeholder="Your Text" required=""></textarea>

                    <div >
                        <input className='flex my-5 bg-white border-none text-teal-500 btn text-lg' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;