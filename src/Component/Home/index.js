
import './index.css'
import Logosubtitle from '../../asserts/img/Logosubtitle.png'
import { Link } from 'react-router-dom'









const Home = () => {

    return (
        <div className='container home-page'>
            <div className="text-zone">

                <h1> Hi, <br />Im'
                    <img id='myimg' src={Logosubtitle} alt='developer' />
                    ehul Chapaneri

                </h1>





                <h2>Frontend developer / Compititive programer</h2>
                <Link to="/Contact" className='flat-button'>CONTACT ME</Link>
            </div>





        </div>
    )
}

export default Home