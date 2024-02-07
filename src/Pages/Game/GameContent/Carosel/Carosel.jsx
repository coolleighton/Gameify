import ArrowRightImg from '../../../../Assets/GlobalImages/ArrowRightImg.png'
import ArrowLeftImg from '../../../../Assets/GlobalImages/ArrowLeftImg.png'
import './Carosel.css'
import { useState, useEffect } from 'react'

const Carosel = ({ gameData }) => {
    const [caroselPosition, setCaroselPosition] = useState(0)
    const [imageWidth, setImageWidth] = useState(0)

    const imagesArray = gameData.gameScreenshots.results

    useEffect(() => {
        const calculateImageWidth = () => {
            const imageElement = document.querySelector('#caroselImage')
            if (imageElement) {
                setImageWidth(imageElement.offsetWidth)
            }
        }

        // Call the function to calculate image width when component mounts or imagesArray changes
        calculateImageWidth()

        // Add event listener to recalculate image width when window is resized
        window.addEventListener('resize', calculateImageWidth)

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', calculateImageWidth)
        }
    }, [imagesArray]) // Dependency array to ensure useEffect runs when imagesArray changes

    // move image right
    const moveImageRight = () => {
        const totalWidth = (imagesArray.length + 1) * imageWidth

        if (caroselPosition > totalWidth - imageWidth * 2 === false) {
            const newPosition = caroselPosition + imageWidth
            setCaroselPosition(newPosition)
        } else {
            setCaroselPosition(0)
        }
    }
    // move image Left
    const moveImageLeft = () => {
        const totalWidth = (imagesArray.length + 1) * imageWidth

        if ((caroselPosition === 0) === false) {
            const newPosition = caroselPosition - imageWidth
            setCaroselPosition(newPosition)
        } else {
            setCaroselPosition(totalWidth - imageWidth)
        }
    }

    const positionIndicators = (x) => {
        // Array to hold the JSX elements
        const circles = []

        // Loop through x and push a <div> element for each iteration
        for (let i = 0; i < x + 1; i++) {
            const circleClassName =
                i * imageWidth === caroselPosition ? 'circle white' : 'circle' // Check if this circle corresponds to the current position
            circles.push(
                <div
                    key={i}
                    className={`${circleClassName} duration-300`}
                ></div>
            )
        }
        return circles
    }

    return (
        <div className="relative w-full h-full flex overflow-hidden rounded-2xl">
            <div
                style={{
                    transform: 'translate(-' + caroselPosition + 'px, 0px)',
                }}
                id="caroselImages"
                className="duration-500 ease-in-out rounded-2xl"
            >
                <img
                    key={gameData.gameDetails.name}
                    id="caroselImage"
                    className="rounded-lg lg:rounded-2xl"
                    src={gameData.gameDetails.mainImage}
                ></img>
                {imagesArray.map((item) => {
                    return (
                        <img
                            key={item.id}
                            id="caroselImage"
                            className="rounded-lg lg:rounded-2xl"
                            src={item.image}
                        ></img>
                    )
                })}
            </div>
            <button
                onClick={() => moveImageLeft()}
                className="absolute h-full pr-16 pl-2 lg:pl-5 hover:scale-125 duration-150"
            >
                <img className="h-6 sm:h-12" src={ArrowLeftImg}></img>
            </button>
            <button
                onClick={() => moveImageRight()}
                className="absolute h-full right-0 pr-2 lg:pr-5 pl-16 hover:scale-125 duration-150"
            >
                <img className="h-6 sm:h-12" src={ArrowRightImg}></img>
            </button>
            <div className="absolute bottom-0 flex justify-center w-full">
                <div className="slider flex rounded-xl">
                    {positionIndicators(imagesArray.length)}
                </div>
            </div>
        </div>
    )
}

export default Carosel
