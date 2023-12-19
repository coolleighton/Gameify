import '../ComponentStyles/Home.css'
import Background from '../assets/Background.mp4'
import Header from './Header.jsx'
import GithubImg from '../assets/GithubImg.png'
import PortfolioImg from '../assets/PortfolioImg.png'

const Home = () => {
    return (
        <div>
            <Header></Header>

            <div className="flex flex-col">
                <div className="p-8 mb-8 bg-gray-600 bg-opacity-50 text-center w-11/12 container mx-auto rounded-lg backdrop-blur">
                    <h1 className="text-5xl font-bold pb-8">Gameify</h1>
                    <p className="leading-5 font-semibold">
                        This is not a commercial website. You can't buy any of
                        the games and the prices are randomly generated to mimic
                        a real shop.
                        <br></br>
                        <br></br>
                        See my other projects below.
                    </p>
                </div>

                <div className="flex justify-center px-6 py-8 bg-gray-600 bg-opacity-50 text-center w-11/12 container mx-auto rounded-lg backdrop-blur">
                    <a href="https://github.com/coolleighton">
                        <button className="bg-white rounded-lg mx-2">
                            <div className="flex items-center justify-center w-32 py-1">
                                <img src={GithubImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Github
                                </p>
                            </div>
                        </button>
                    </a>

                    <a href="https://leightonjcoughlin.netlify.app/">
                        <button className="bg-white rounded-lg mx-2">
                            <div className="flex items-center justify-center w-32 py-1">
                                <img src={PortfolioImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Portfolio
                                </p>
                            </div>
                        </button>
                    </a>
                </div>
            </div>

            <div className="videoContainer">
                <video autoPlay loop muted>
                    <source src={Background} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}

export default Home
