import './index.css'
import { Link } from 'react-router-dom'

import mehul from '../../asserts/img/mehul.jpeg'





const About = () => {

    return (
        <>







            <div className='home page about-text'>


                <div className="text t-section">
                    <h1 className='t-h1'>
                        About me

                    </h1>

                    <div className="p p-about">

                        <p>
                            I am an enthusiastic fresher with highly motivated and leadership skills Pursuing a bachelor of Computer application degree at Lj university.
                            i Have a strong focus on energy-efficient designs and are open to contributing designs to a design firm's project repository.

                            

                            I always learn and do something new when I have free time. I love to learn more languages as you can be seen in the skills section also make projects posted on Github.
                            also, I like to play Pc-games and watch movies.
                            Seeking a beginner frontend developer role to enhance and explore my technical knowledge
                        </p>




                        <p>
                        visit my <a  href='https://www.linkedin.com/in/mehul-chapaneri' className='contact'>(LinkedIn) </a> 
                        profile for more details or just  contact me.
                        </p>

                    </div>

                    <div className="bt">
                        <Link to="/Skills" className='flat-button '>MY SKILLS</Link>
                    </div>
                </div>

                <div className='bb-img'>
                    <div className="bb">

                        <img className='framed' src={mehul} alt='mehul' />
                    </div>
                </div>




            </div>









        </>

    )
}

export default About