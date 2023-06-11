import React from 'react'
import {AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id="contact">
        <div className=".section-content">
            <div>
                <div><h2 className="inset">&lt;get-in-touch/&gt;</h2></div>
                <div className='contact'>
                    <div className="email-me">
                        <form className="email-container" action='/message' method='POST'>
                            <input type="text" placeholder="Name" required/>
                            <input type="email" placeholder="Email" required/>
                            <textarea placeholder="Message..." rows={4} name="message" required/>
                            <button type='submit'><a href='#'>Send</a></button>
                        </form>
                    </div>
                    <div className='socials'>
                        <div>
                            <div>
                                <p>
                                    Find me on Instagram:
                                </p>
                                <h3>
                                    @fizoneechan
                                </h3>
                                <a href='https://www.instagram.com/fizo_neechan/'>
                                    <AiOutlineInstagram className='btn-icon'/>
                                    <span>Send a Message</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>
                                    Message me on Whatsapp:
                                </p>
                                <h3>
                                    +92 3358296937
                                </h3>
                                <a href='https://wa.me/923358296937'>
                                    <AiOutlineWhatsApp className='btn-icon'/>
                                    <span>Send a Message</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>
                                    Email me:
                                </p>
                                <h3>
                                    fizoneechan@gmail.com
                                </h3>
                                <a href='mailto:fizoneechan@gmail.com'>
                                    <AiOutlineMail className='btn-icon'/>
                                    <span>Send an Email</span>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
