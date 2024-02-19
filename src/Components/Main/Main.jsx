import React, {useEffect} from 'react'
import './main.css'

// Import images from Assets folder  
import img from '../../Assets/img1.jpg'
import img1 from '../../Assets/img1.webp'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

//Import Icons from React-icon 
import {GrLocation} from 'react-icons/gr'
import {BsClipboardCheck} from 'react-icons/bs'

//Import Aos from Aos cdn
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [

    {
        id:1,
        imgSrc:img,
        destTitle:'Varanasi',
        location:'Uttar Pradesh | India',
        grade:' ART & CULTURE',
        fees:'Rs.12,000',
        description:'Varanasi is regarded as a sacred city in India by Hindus, Buddhists, and Jains since it is a place of pilgrimage for these devotees. It is also known as the City of Temples where it features a serene and tranquil atmosphere perfect for worship.'
    },

    {
        id:2,
        imgSrc:img1,
        destTitle:'Darjeeling',
        location:'West Bengal | India',
        grade:' NATURE & WILDLIFE',
        fees:'Rs.10,000',
        description:'Darjeeling is a town and municipality in the northernmost region of West Bengal, a state in India. Located in the Eastern Himalayas, it has an average elevation of 2,045 metres. To the west of Darjeeling lies the easternmost province of Nepal. '
    },

    {
        id:3,
        imgSrc:img3,
        destTitle:'Jaipur',
        location:'Rajasthan | India',
        grade:' ART & CULTURE',
        fees:'Rs.20,000',
        description:'Jaipur is a regal paradise of culture and legacy, rich with architectural jewels, and is affectionately dubbed "The Pink City" for the pink color of its old structures. City Palace provides you a sense of the opulent lifestyle enjoyed by Jaipur royal family.'
    },

    {
        id:4,
        imgSrc:img5,
        destTitle:'Srinagar',
        location:'Jammu & Kashmir | India',
        grade:' NATURE & WILDLIFE',
        fees:'Rs.25,000',
        description:'Srinagar is the largest city and the summer capital of Jammu and Kashmir, India. It lies in the Kashmir Valley on the banks of the Jhelum River, a tributary of the Indus, and Dal and Anchar lakes. The city is known for its natural environment, gardens, waterfronts and houseboats.'
    },

    {
        id:5,
        imgSrc:img4,
        destTitle:'Varca Beach',
        location:'Goa | India',
        grade:' FOOD & DRINKS',
        fees:'Rs.15,000',
        description:'Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats. It is located between the Indian states of Maharashtra to the north and Karnataka to the east and south.I Love Goa.north and Karnataka.'
    },

    {
        id:6,
        imgSrc:img6,
        destTitle:'Hampi',
        location:'Karnataka | India',
        grade:' ART & CULTURE',
        fees:'Rs.30,000',
        description:'Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi town, Vijayanagara district, east-central Karnataka, India. Hampi was the capital of the Vijayanagara Empire in the 14th century. It was a fortified city.'
    },

    {
        id:7,
        imgSrc:img7,
        destTitle:'Kochi',
        location:'kerala | India',
        grade:' NATURE & CULTURE',
        fees:'Rs.15,000',
        description:'Kochi, Kerala, is famous for its Cherai Beach. Guests should not miss seeing this beach as it features picturesque scenery and a peaceful atmosphere perfect for relaxation. Aside from this, guests can also visit the beautiful Mattancherry Palace. It is a historical place that showcases the citys.'
    },

    {
        id:8,
        imgSrc:img8,
        destTitle:'Leh',
        location:' Ladakh | India',
        grade:' ADVENTURE &NATURE',
        fees:'Rs.25,000',
        description:'Leh is the joint capital and largest city of Ladakh, a union territory of India. Leh, located in the Leh district, was also the historical capital of the Kingdom of Ladakh. The seat of the kingdom, Leh Palace, the former residence of the royal family of Ladakh, was built in the same style and about the same.'
    },

    {
        id:9,
        imgSrc:img9,
        destTitle:'Shillong',
        location:'Meghalaya | India',
        grade:' NATURE & WILDLIFE',
        fees:'Rs.25,000',
        description:'Shillong is a hill station and the capital of Meghalaya, a state in northeastern India, which means "The Abode of Clouds". It is the headquarters of the East Khasi Hills district. Shillong is the 330th most populous city in India with a population of 143,229 according to the 2011 census.'
    },
] 

const Main = () => {

    useEffect(() => {
        Aos.init({duration:2000})
      }, [])

    return(
        <section className='main container section'>
            
            <div className="secTitle">
                
                <h3 data-aos="fade-right" className="title">
                    Most  visited destinations
                </h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) =>{

                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <GrLocation className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <BsClipboardCheck className='icon' />
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Main 