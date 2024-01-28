import BackArrowWhiteImg from '../../../Assets/GlobalImages/BackArrowWhiteImg.png'
import DownWhiteImg from '../../../Assets/GlobalImages/DownWhiteImg.png'
import UpWhiteImg from '../../../Assets/GlobalImages/UpWhiteImg.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './GameContent.css'

const GameContent = ({ gameData }) => {
    const [descriptionActive, setDescriptionActive] = useState(false)
    console.log(gameData)
    // navigate to library
    const naviagte = useNavigate()
    const navigateToLibrary = () => {
        naviagte('/Library')
    }

    // return the component for images
    const returnImages = () => {
        if (Object.keys(gameData.gameScreenshots).length > 0) {
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
            gameData.gameDetails.genres.map((item) => {
                return <p>{item.name}</p>
            })
        }
    }

    // extend and colapse description on click
    const toggleDescription = () => {
        if (descriptionActive == false) {
            setDescriptionActive(true)
        } else {
            setDescriptionActive(false)
        }
    }

    return (
        <div className="pt-24 px-8">
            <div className="flex justify-between items-center">
                <button
                    onClick={() => navigateToLibrary()}
                    className="flex justify-center items-center hover:scale-110 duration-300"
                >
                    <img className="h-8" src={BackArrowWhiteImg}></img>
                    <h2 className="text-2xl ml-1">Library</h2>
                </button>
                <h1 className="text-6xl font-extrabold">
                    {gameData.gameDetails.name}
                </h1>
            </div>
            <div id="gameContentMain" className="grid grid-cols-3 gap-8 mt-2">
                <div className="col-span-2 w-full">{returnImages()}</div>
                <div className="col-span-1 rounded-2xl bg-gray-500 bg-opacity-20 p-6">
                    <div className="bg-gray-500 bg-opacity-20 rounded-xl">
                        <h2 className="px-4 pt-4 text-2xl font-bold mb-2">
                            Description
                        </h2>
                        <p
                            className={`${
                                descriptionActive
                                    ? 'descriptionOpen'
                                    : 'descriptionClosed'
                            } px-4 pb-4 overflow-hidden duration-300`}
                        >
                            {gameData.gameDetails.description}
                        </p>
                        <button
                            onClick={() => toggleDescription()}
                            className="bg-gray-500 py-4 rounded-b-xl bg-opacity-20 w-full flex justify-end items-center hover:bg-opacity-30 duration-300"
                        >
                            <img
                                className="h-5"
                                src={
                                    descriptionActive
                                        ? UpWhiteImg
                                        : DownWhiteImg
                                }
                            ></img>
                            <p className="text-md mr-6">
                                {descriptionActive ? 'Less' : 'More'}
                            </p>
                        </button>
                    </div>
                    <div className="p-2 bg-gray-500 rounded-xl bg-opacity-20">
                        {returnGenres()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameContent
