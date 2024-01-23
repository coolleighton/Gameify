import { useState, useEffect } from 'react'
import PlatformImg from './PlatformImg/PlatformImg'
import OrangeTick from '../../../../../Assets/GlobalImages/OrangeTick.png'
import ImageNotFound from '../../../../../Assets/GlobalImages/ImageNotFound.png'
import RatingWhiteImage from '../../../../../Assets/GlobalImages/RatingWhiteImg.png'

const GameCard = ({ cardData, handleAddToCart, cart }) => {
    const [active, setActive] = useState(false)

    // render image not found if no images available
    const RenderImageNotFound = (imageSrc) => {
        if (imageSrc === null) {
            return (
                <div className="rounded-t-2xl h-56 w-full object-cover flex justify-center items-center relative">
                    <img
                        className="w-full h-full rounded-t-2xl"
                        src={ImageNotFound}
                    ></img>
                    <p className="text-xl absolute">Image not found</p>
                </div>
            )
        } else
            return (
                <img
                    className="rounded-t-2xl h-56 w-full object-cover"
                    src={imageSrc}
                ></img>
            )
    }

    // show "no rating" if game doesnt have rating
    const RenderRating = (rating) => {
        if (rating === null) {
            return (
                <div className="flex justify-between items-center">
                    <img
                        className="h-4 xs:h-5 mr-1 "
                        src={RatingWhiteImage}
                    ></img>
                    <p className="text-lg xs:text-xl font-light">0%</p>
                </div>
            )
        } else
            return (
                <div className="flex justify-between items-center">
                    <img
                        className="h-4 xs:h-5 mr-1 "
                        src={RatingWhiteImage}
                    ></img>
                    <p className="text-lg xs:text-xl font-light">{rating}%</p>
                </div>
            )
    }

    useEffect(() => {
        // Check if the current card is in the cart and set active accordingly
        const isInCart = cart.some((item) => item.name === cardData.name)
        setActive(isInCart)
    }, [cart, cardData.name])

    return (
        <div className=" max-w-2xl rounded-2xl bg-gray-500 bg-opacity-20 cursor-pointer hover:scale-105 duration-300">
            {RenderImageNotFound(cardData.image)}
            <div className="p-4">
                <div className="flex justify-between">
                    <button
                        onClick={() => handleAddToCart(cardData.name, active)}
                        className="text-sm xs:text-md px-2 py-1 w-36 rounded-lg bg-gray-500 bg-opacity-30 hover:bg-opacity-50 duration-200 flex justify-center items-center"
                        style={{ color: active ? '#FF8B1B' : 'white' }}
                    >
                        <p>{active ? 'Added' : 'Add to cart +'}</p>
                        <img
                            style={{ display: active ? 'block' : 'none' }}
                            className="w-4 ml-1"
                            src={OrangeTick}
                        ></img>
                    </button>
                    <p className="text-center px-2 py-1 ml-2 w-24 rounded-lg bg-gray-500 bg-opacity-30">
                        £{cardData.price}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    {RenderRating(cardData.rating)}
                    <div className="flex mt-4 mb-3 mr-1">
                        {cardData.platforms.map((item) => {
                            return (
                                <PlatformImg
                                    key={item.platform.slug}
                                    platform={item.platform.slug}
                                ></PlatformImg>
                            )
                        })}
                    </div>
                </div>

                <h2 className="leading-none text-[1.4rem] font-bold">
                    {cardData.name}
                </h2>
            </div>
        </div>
    )
}

export default GameCard
