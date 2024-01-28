import Header from '../../GlobalComponents/Header/Header.jsx'
import MobileMenu from '../../GlobalComponents/MobileMenu/MobileMenu.jsx'
import Cart from '../../GlobalComponents/Cart/Cart.jsx'
import ButtonData from '../../Assets/ButtonsData.js'
import { useNavigate } from 'react-router-dom'

import Background from '../../Assets/Background.mp4'
import GithubImg from '../../Assets/GlobalImages/GithubImg.png'
import PortfolioImg from '../../Assets/GlobalImages/PortfolioImg.png'
import LibraryImg from '../../Assets/GlobalImages/DarkLibraryImg.png'
import RawgWhiteImg from '../../Assets/GlobalImages/RawgWhiteImg.png'
import './Home.css'

import { useEffect } from 'react'

const Home = ({
    cart,
    setCart,
    removeItemFromCart,
    loadingScreenPlayed,
    handleCategoryClick,
    setSearchAmount,
    inputValue,
    searchValue,
    setInputValue,
    setSearchValue,
    resetSearchCriteria,
    isFadingOut,
    setIsFadingOut,
}) => {
    const navigate = useNavigate()

    // if the loading screen has played, play the background video instantly
    useEffect(() => {
        if (loadingScreenPlayed) {
            document.querySelector('#backgroundVideo').play()
        }
    }, [])

    // set new api info, close menu, if needed go to library
    const HandleMenuClick = async (category, categoryInfo, text) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // apply 0.3s fade out transition
        document.querySelector('body').style.transitionDuration = '0.3s'
        document.querySelector('body').style.opacity = '0'
        await delay(300)

        // navigate to page, set search amount, set new api data, scroll to top
        navigate('/Library')
        setSearchAmount(12)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        await handleCategoryClick(category, categoryInfo, text)

        // pag re-shown in api call page
    }

    return (
        <div
            id="home"
            className={`screen ${
                isFadingOut ? 'fade-out' : ''
            } relative inset-0`}
        >
            <Header
                headerBgColour={'#FF'}
                cart={cart}
                setSearchAmount={setSearchAmount}
                inputValue={inputValue}
                searchValue={searchValue}
                setInputValue={setInputValue}
                setSearchValue={setSearchValue}
                handleCategoryClick={handleCategoryClick}
                resetSearchCriteria={resetSearchCriteria}
                isFadingOut={isFadingOut}
                setIsFadingOut={setIsFadingOut}
            ></Header>

            <div className="flex flex-col mx-auto h-[100vh] md:w-[776px] md:flex-row md:justify-start md:items-center">
                <div className="mt-[5.5rem] md:mt-0 md:max-w-lg w-11/12 mx-auto">
                    <div className="p-8 mb-6 md:mb-5 bg-gray-600 bg-opacity-50 text-center sm:w-9/12 md:w-11/12 mx-auto rounded-lg backdrop-blur">
                        <h1 className="title break-words sm:text-7xl font-extrabold pb-5">
                            Gameify
                        </h1>
                        <p className="leading-5 font-semibold">
                            This is not a commercial website. You can't buy any
                            of the games and the prices are randomly generated
                            to mimic a real shop.
                            <br></br>
                            <br></br>
                            See my other projects and the Rawg API below.
                        </p>
                    </div>

                    <div className="p-6 mb-6 bg-gray-600 bg-opacity-50 text-center mx-auto sm:w-9/12 md:w-11/12 rounded-lg backdrop-blur">
                        <div className="portfolioLinks flex justify-center">
                            <a
                                className="mr-2 bg-white h-10 flex mb-4 justify-center xs:w-11/12 sm:w-full items-center rounded-lg hover:scale-105 hover:bg-blue-100 duration-200"
                                href="https://github.com/coolleighton"
                            >
                                <div className="flex items-center justify-center py-1 ">
                                    <img src={GithubImg}></img>
                                    <p className="text-black pl-2 font-semibold">
                                        Github
                                    </p>
                                </div>
                            </a>
                            <a
                                className="ml-2 bg-white h-10 flex xs:w-11/12 sm:w-full justify-center items-center rounded-lg hover:scale-105 hover:bg-blue-100 duration-200"
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

                        <a href="https://rawg.io/apidocs">
                            <div className="h-10 flex justify-center items-center py-1 mt-4 bg-white rounded-lg hover:scale-105 hover:bg-blue-100 duration-200">
                                <img className="h-5" src={RawgWhiteImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Rawg API
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="sm:ml-0 md:mr-6 flex">
                    <div className="w-11/12 mx-auto md:w-full">
                        <div className="flex flex-col justify-center p-6 mb-8 bg-gray-600 bg-opacity-50 text-center mx-auto rounded-lg backdrop-blur sm:w-9/12 md:w-[240px]">
                            <h2 className="text-3xl font-bold pb-5">
                                Quick Navigation
                            </h2>

                            {ButtonData.Special.map((item) => {
                                return (
                                    <button
                                        className="flex py-2 items-center justify-center bg-white rounded-lg mb-4 hover:scale-105 hover:bg-blue-100 duration-200"
                                        key={item.text}
                                        onClick={() =>
                                            HandleMenuClick(
                                                'special',
                                                item.categoryInfo,
                                                item.text
                                            )
                                        }
                                    >
                                        <img
                                            className="w-6 h-6"
                                            src={item.BlackIcon}
                                        ></img>
                                        <p className="text-black pl-2 font-semibold">
                                            {item.text}
                                        </p>
                                    </button>
                                )
                            })}
                            <button className="flex py-2 items-center justify-center bg-white rounded-lg hover:scale-105 hover:bg-blue-100 duration-200">
                                <img className="w-6 h-6" src={LibraryImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    I'm Feeling Lucky
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="videoContainer">
                <video id="backgroundVideo" loop muted>
                    <source src={Background} type="video/mp4"></source>
                </video>
            </div>
            <MobileMenu
                handleCategoryClick={handleCategoryClick}
                setSearchAmount={setSearchAmount}
            ></MobileMenu>
            <Cart
                cart={cart}
                setCart={setCart}
                removeItemFromCart={removeItemFromCart}
            ></Cart>
        </div>
    )
}

export default Home
