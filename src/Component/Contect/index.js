import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Instagram from "../../asserts/img/instagram.png"

import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';










const Contact = () => {



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3c3i7np', 'template_7c99tgp', form.current, 'tCcUnVeSQQw96K3gJ')
            .then((result) => {
                console.log(result.text);
                console.log("massage sent");
                e.target.reset();

            }, (error) => {
                console.log(error.text);
            });
    };







    return (

        <>

            <div className=" contact-page">

                <div className='f-t'>

                    <div className="text-zone t-contect">

                        <h1 className='con-h1'>
                            Contact me
                        </h1>

                        <p id='contect-p'>
                            I am interested in freelance opportunities However, if you have other requests or questions,
                            don't hesitate to contact me using the form .

                        </p>

                    </div>


                    <div className="contect-form">

                        <form ref={form} onSubmit={sendEmail} className='form-detail'   >

                            <p><input placeholder="Name"

                                type="text"
                                className="inputs"
                                id="name"
                                name="user_name" /></p>


                            <p><input placeholder="Email"

                                type="email"
                                className="inputs"
                                id="Email"
                                name="user_email" /></p>

                            <p><textarea placeholder="Message"

                                className="inputs"
                                name="message"
                                id="text" /></p>

                            <p> <input type="submit" id='s' value="SEND MASSAGE" className='flat-button' /></p>
                        </form>
                    </div>

                </div>


                <div className='follow'>

                    <h1 id="follow-text">

                        Follow me on
                    </h1>

                </div>


                <div className='f-section'>



                    <div className='f-mail'>


                        <div className='follow-to'>



                            <a href="mailto:mehulchapaneri8988@gmail.com" className='mailto'>
                                <i className="lnr-envelope"> <FontAwesomeIcon icon={faEnvelope} /></i><span className='Email'>mehulchapaneri8988@gmail.com</span>
                            </a>

                        </div>

                        <div className='follow-to'>



                            <a href="https://goo.gl/maps/5yJZjsVkvPXcjBbe9" className='home-h' rel="noreferrer" target="_blank">
                                <i className=" lnr-home"><FontAwesomeIcon icon={faHome} /></i><span className='home'> Ahmedabad,Gujarat,India</span></a>

                        </div>

                    </div>



                    <div className="follow-link">


                        <ul id='ul-list' >
                            <li className='li-list'> { /* eslint-disable-next-line */}
                                <a target='_blank' rel="noreferrer" href='https://github.com/mehul89' className='a-link'>
                                    <FaGithub color='#ffff' />

                                </a>
                            </li>

                            <li className='li-list'> { /* eslint-disable-next-line */}
                                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/mehul-chapaneri' className='a-link'>
                                    <FaLinkedin color='#0077b5' />

                                </a>
                            </li>

                            <li className='li-list'> { /* eslint-disable-next-line */}
                                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/mehul_8988/' className='a-link'>
                                    <img src={Instagram} alt='instagram' id='instagram' />

                                </a>
                            </li>

                            <li className='li-list'> { /* eslint-disable-next-line */}
                                <a target='_blank' rel="noreferrer" href='https://twitter.com/mehul_chapaneri?t=jQS_3HV_WhdO33BtHkBUvg&s=09' className='a-link'>
                                    <FaTwitter color='#1DA1F2' />

                                </a>
                            </li>


                        </ul>



                    </div>




                </div>

            </div>








        </>
    )

}
export default Contact