import '../ComponentStyles/Home.css'
import Background from '../assets/Background.mp4'
import Header from './Header.jsx'
import GithubImg from '../assets/GithubImg.png'
import PortfolioImg from '../assets/PortfolioImg.png'
import LibraryImg from '../assets/DarkLibraryImg.png'

const Home = () => {
    return (
        <div>
            <Header></Header>

            <div className="mainDiv flex flex-col mx-auto max-w-lg sm:flex-row sm:max-w-full sm:justify-between sm:items-center">
                <div className="sm:max-w-lg sm:ml-5">
                    <div className="p-8 mb-4 bg-gray-600 bg-opacity-50 text-center w-11/12 container mx-auto rounded-lg backdrop-blur">
                        <h1 className="text-7xl font-extrabold pb-5">
                            Gameify
                        </h1>
                        <p className="leading-5 font-semibold">
                            This is not a commercial website. You can't buy any
                            of the games and the prices are randomly generated
                            to mimic a real shop.
                            <br></br>
                            <br></br>
                            See my other projects below.
                        </p>
                    </div>

                    <div className="portfolioLinks flex justify-center px-6 py-8 mb-4 bg-gray-600 bg-opacity-50 text-center w-11/12 container mx-auto rounded-lg backdrop-blur">
                        <a
                            className="w-2/3 bg-white rounded-lg mx-2 hover:scale-105 hover:bg-blue-100 duration-200"
                            href="https://github.com/coolleighton"
                        >
                            <div className="flex items-center justify-center py-1">
                                <img src={GithubImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Github
                                </p>
                            </div>
                        </a>
                        <a
                            className="bottomPortfolioLink w-2/3 bg-white rounded-lg mx-2 hover:scale-105 hover:bg-blue-100 duration-200"
                            href="https://leightonjcoughlin.netlify.app/"
                        >
                            <div className="flex items-center justify-center py-1">
                                <img src={PortfolioImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Portfolio
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="sm:max-w-sm sm:ml-0 sm:mr-6">
                    <div className="flex flex-col justify-center px-6 py-8 mb-4 bg-gray-600 bg-opacity-50 text-center w-11/12 mx-auto rounded-lg backdrop-blur">
                        <h2 className="text-3xl font-bold pb-5 sm:w-sm">
                            Quick Navigation
                        </h2>

                        <button className="flex items-center justify-center bg-white rounded-lg mb-5 hover:scale-105 hover:bg-blue-100 duration-200 ">
                            <div className="flex items-center justify-center py-2">
                                <img className="w-6 h-6" src={LibraryImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Library
                                </p>
                            </div>
                        </button>

                        <button className="flex items-center justify-center bg-white rounded-lg mb-5 hover:scale-105 hover:bg-blue-100 duration-200">
                            <div className="flex items-center justify-center py-2">
                                <img className="w-6 h-6" src={LibraryImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Library
                                </p>
                            </div>
                        </button>

                        <button className="flex items-center justify-center bg-white rounded-lg mb-5 hover:scale-105 hover:bg-blue-100 duration-200">
                            <div className="flex items-center justify-center py-2">
                                <img className="w-6 h-6" src={LibraryImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Library
                                </p>
                            </div>
                        </button>

                        <button className="lastButton flex items-center justify-center bg-white rounded-lg hover:scale-105 hover:bg-blue-100 duration-200">
                            <div className="flex items-center justify-center py-2">
                                <img className="w-6 h-6" src={LibraryImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Library
                                </p>
                            </div>
                        </button>
                    </div>
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
