import BackArrowWhiteImg from '../../../Assets/GlobalImages/BackArrowWhiteImg.png'
import DownWhiteImg from '../../../Assets/GlobalImages/DownWhiteImg.png'
import UpWhiteImg from '../../../Assets/GlobalImages/UpWhiteImg.png'
import OrangeTick from '../../../Assets/GlobalImages/OrangeTick.png'
import ImageNotFound from '../../../Assets/GlobalImages/ImageNotFound.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './GameContent.css'

const GameContent = ({ gameData, cart, handleAddToCart }) => {
    const [descriptionActive, setDescriptionActive] = useState(false)
    const [active, setActive] = useState(false)

    // return a price based on what the first letter of game name (doing random prices each time changes price on re render)
    const generateRandomPrice = () => {
        if (Object.keys(gameData.gameDetails).length > 0) {
            const myArray = [
                '4.99',
                '9.99',
                '14.99',
                '19.98',
                '24.50',
                '29.97',
                '35',
                '40',
                '45',
                '59.99',
            ]

            const firstLetter = gameData.gameDetails.name
                .charAt(0)
                .toLowerCase()

            if (['a', 'b', 'c'].includes(firstLetter)) {
                return myArray[0]
            }

            if (['d', 'e', 'f'].includes(firstLetter)) {
                return myArray[1]
            }

            if (['g', 'h', 'i'].includes(firstLetter)) {
                return myArray[2]
            }

            if (['j', 'k', 'l'].includes(firstLetter)) {
                return myArray[3]
            }

            if (['m', 'n', 'o'].includes(firstLetter)) {
                return myArray[4]
            }

            if (['p', 'q', 'r'].includes(firstLetter)) {
                return myArray[5]
            }

            if (['s', 't', 'u'].includes(firstLetter)) {
                return myArray[6]
            }

            if (['v', 'w', 'x'].includes(firstLetter)) {
                return myArray[7]
            }

            if (['y', 'z'].includes(firstLetter)) {
                return myArray[8]
            } else {
                return myArray[9]
            }
        }
    }

    // Check if the current card is in the cart and set active accordingly
    useEffect(() => {
        const isInCart = cart.some(
            (item) => item.name === gameData.gameDetails.name
        )
        setActive(isInCart)
    }, [cart, gameData.gameDetails.name])

    // navigate to library
    const naviagte = useNavigate()
    const navigateToLibrary = () => {
        naviagte('/Library')
    }

    // return the component for images
    const returnImages = () => {
        if (Object.keys(gameData.gameScreenshots).length > 0) {
            if (gameData.gameScreenshots.results.length < 1) {
                return (
                    <div className="rounded-2xl h-full w-full object-cover flex justify-center items-center relative">
                        <img
                            className="w-full h-full rounded-2xl"
                            src={ImageNotFound}
                        ></img>
                        <p className="text-xl absolute">Image not found</p>
                    </div>
                )
            } else
                return (
                    <img
                        className="rounded-2xl w-full h-full object-cover"
                        src={gameData.gameScreenshots.results[0].image}
                    ></img>
                )
        }
    }

    // return the component for genres
    const returnGenres = () => {
        if (Object.keys(gameData.gameDetails).length > 0) {
            const genreNames = gameData.gameDetails.genres.map((item) => {
                return item.name
            })

            return genreNames.length > 0
                ? genreNames.join(', ')
                : 'No genre information available'
        }

        return null // Return null if there are no genres
    }

    // return list of platforms as a string.
    const returnPlatforms = () => {
        if (Object.keys(gameData.gameDetails).length > 0) {
            const platformNames = gameData.gameDetails.platforms.map((item) => {
                return item.platform.name
            })

            return platformNames.length > 0
                ? platformNames.join(', ')
                : 'No platform information available'
        }

        return null // Return null if there are no platforms
    }

    // return the component for developers
    const returnDevelopers = () => {
        if (Object.keys(gameData.gameDetails).length > 0) {
            const developerNames = gameData.gameDetails.developers.map(
                (item) => {
                    return item.name
                }
            )

            return developerNames.length > 0
                ? developerNames.join(', ')
                : 'No developer information available'
        }

        return null // Return null if there are no genres
    }

    // extend and colapse description on click
    const toggleDescription = () => {
        if (descriptionActive == false) {
            setDescriptionActive(true)
        } else {
            setDescriptionActive(false)
        }
    }

    // apply styling to content section when description is active
    useEffect(() => {
        const transition = async () => {
            const delay = (ms) => new Promise((res) => setTimeout(res, ms))

            if (screen.width > 1030) {
                if (descriptionActive) {
                    document.querySelector('.extraGameInfo').style.opacity = '0'
                    await delay(200)
                    document.querySelector('.descriptionPara').style.height =
                        'calc(100vh - 440px)'
                    await delay(5)
                    document.querySelector('.extraGameInfo').style.display =
                        'none'
                } else {
                    document.querySelector('.descriptionPara').style.height =
                        '15rem'
                    await delay(300)
                    document.querySelector('.extraGameInfo').style.display =
                        'flex'
                    await delay(5)
                    document.querySelector('.extraGameInfo').style.opacity = '1'
                }
            }
        }
        transition()
    }, [descriptionActive])

    return (
        <div className="pt-24 px-6 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-12">
                <button
                    onClick={() => navigateToLibrary()}
                    className="flex justify-center items-center hover:scale-110 duration-300"
                >
                    <img className="h-6 lg:h-8" src={BackArrowWhiteImg}></img>
                    <h2 className="text-lg lg:text-2xl ml-1">Library</h2>
                </button>
                <h1 className="text-center text-2xl xs:text-4xl mt-2 lg:text-right lg:text-6xl font-extrabold ">
                    {gameData.gameDetails.name}
                </h1>
            </div>
            <div
                id="gameContentMain"
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 mt-4"
            >
                <div className="imageDiv h-56 sm:h-auto mb-6 lg:mb-0 col-span-2 w-full">
                    {returnImages()}
                </div>

                <div className="relative flex flex-col-reverse lg:flex-col justify-between overflow-hidden col-span-1 lg:rounded-2xl bg-gray-500 bg-opacity-0 lg:bg-opacity-20 lg:p-6 lg:h-full">
                    <div>
                        <div className="bg-gray-500 bg-opacity-20 rounded-xl lg:rounded-t-xl lg:rounded-b-none lg:overflow-y-scroll mb-6 lg:mb-0">
                            <h2 className="px-4 pt-4 text-2xl font-bold mb-2">
                                Description
                            </h2>
                            <p className="descriptionPara px-4 pb-4 duration-300">
                                {gameData.gameDetails.description}
                            </p>
                        </div>
                        <button
                            onClick={() => toggleDescription()}
                            className="descriptionButton hidden lg:flex bg-gray-500 py-4 rounded-b-xl bg-opacity-30 w-full justify-end items-center"
                        >
                            <img
                                className="h-5"
                                src={
                                    descriptionActive
                                        ? UpWhiteImg
                                        : DownWhiteImg
                                }
                            ></img>
                            <p className="text-lg mr-6">
                                {descriptionActive ? 'Less' : 'More'}
                            </p>
                        </button>
                    </div>

                    <div className="extraGameInfo flex flex-col mb-6 mt-2 lg:mb-2 duration-150 overflow-y-scroll no-scrollbar overflow-x-hidden">
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="font-bold mt-4">Genres:</p>
                                <div>{returnGenres()}</div>
                            </div>
                            <div>
                                <p className="font-bold mt-4 text-right">
                                    Price:
                                </p>
                                <p className="text-right">
                                    £{generateRandomPrice()}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold mt-4">Metacritic:</p>
                                <p className="">
                                    {gameData.gameDetails.rating}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold mt-4 text-right">
                                    Age:
                                </p>
                                <p className="text-right">
                                    {gameData.gameDetails.age}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold mt-4">Platforms:</p>
                                <div>{returnPlatforms()}</div>
                            </div>
                            <div>
                                <p className="font-bold mt-4 text-right">
                                    Developers:
                                </p>
                                <div className="text-right">
                                    {returnDevelopers()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        id="addToCartButton"
                        onClick={() => {
                            handleAddToCart(gameData.gameDetails.name, active)
                        }}
                        className="px-2 py-4 w-full rounded-lg bg-gray-500 bg-opacity-30 hover:bg-opacity-50 duration-300 flex justify-center items-center"
                        style={{ color: active ? '#FF8B1B' : 'white' }}
                    >
                        <p>{active ? 'Added' : 'Add to cart +'}</p>
                        <img
                            style={{
                                display: active ? 'block' : 'none',
                            }}
                            className="w-4 ml-1"
                            src={OrangeTick}
                        ></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GameContent
