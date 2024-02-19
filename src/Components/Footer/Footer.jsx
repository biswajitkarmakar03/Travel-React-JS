import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video(2).mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

//Import Aos from Aos cdn
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({duration:2000})
      }, [])

    return(
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className="secContent container ">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP  IN TOUCH</small>
                        <h2>Travel  with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type='text' placeholder='Enter Email' />
                        <button data-aos="fade-up" data-aos-duration="3000" className='btn flex' type='submit'>
                          SEND  <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href='#' className='logo flex'>
                                <MdOutlineTravelExplore className='icon'/>Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Travel. is India’s leading online travel booking brand providing range of choice for hotels, flights, trains, bus and cars for travelers. Our core value differentiator is the most trusted user experience, be it in terms of quickest search and booking, fastest payments, settlement or refund processes.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiFillInstagram className='icon'/>
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube className='icon'/>
                            <FaTripadvisor className='icon'/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="2500" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Insurance
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Tourism
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Payment
                            </li>
                                 
                        </div>

                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                COX & KINGS
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Yatra.com
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Thomas Cook
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                MakeMyTrip
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Goibibo
                            </li>
                                 
                        </div>

                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                India
                            </li>

                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                U.S.A
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Europe
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Asia
                            </li>
                            
                            <li className="footerlist flex">
                                <FiChevronRight className='icon'/>
                                Oceania
                            </li>
                                 
                        </div>

                        <div className="footerDiv">
                            {/* <small>Copyright Reserved 2023</small> */}
                            <small> Made with ❤️ in India By - Biswajit Karmakar  </small>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer 