import { Link } from 'react-router-dom'
import '../ComponentStyles/Home.css'
import Background from '../assets/Background.mp4'
import Header from './Header.jsx'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Link to="/library">Click here to go to the library</Link>
            <div className="videoContainer">
                <video autoPlay loop muted>
                    <source src={Background} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}

export default Home
