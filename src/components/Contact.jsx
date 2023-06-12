import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineSend} from 'react-icons/ai'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7k3ar9s', 'template_phit29o', form.current, 'h4cBV5WvsuEP1ji6i')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        return false;
    };

  return (
    <section id="contact">
        <div className=".section-content">
            <div>
                <div><h2 className="inset">&lt;get-in-touch/&gt;</h2></div>
                <div className='contact'>
                    <div className="email-me">
                        <form className="email-container" ref={form} onSubmit={sendEmail}>
                            <input type="text" placeholder="Name" name='name' required/>
                            <input type="email" placeholder="Email" name='email' required/>
                            <textarea placeholder="Message..." rows={4} name="message" required/>
                            <button type='submit'>
                                <AiOutlineSend className='btn-icon'/>
                                <span>Send</span>
                            </button>
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
