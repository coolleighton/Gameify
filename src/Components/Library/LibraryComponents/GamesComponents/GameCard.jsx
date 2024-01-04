import { useState, useEffect } from 'react'
import PlatformImg from './PlatformImg'

const GameCard = ({ cardData, handleAddToCart, cart }) => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        // Check if the current card is in the cart and set active accordingly
        const isInCart = cart.some((item) => item.name === cardData.name)
        setActive(isInCart)
    }, [cart, cardData.name])

    return (
        <div className="max-w-2xl rounded-2xl bg-gray-500 bg-opacity-20 cursor-pointer hover:scale-105 duration-300">
            <img
                className="rounded-t-2xl h-56 w-full object-cover"
                src={cardData.image}
            ></img>
            <div className="p-4">
                <div className="flex justify-between">
                    <button
                        onClick={() => handleAddToCart(cardData.name)}
                        className="px-2 py-1 w-36 rounded-lg bg-gray-500 bg-opacity-30 hover:bg-opacity-50 duration-200"
                        style={{ color: active ? 'orange' : 'white' }}
                    >
                        {active ? 'Added' : 'Add to cart +'}
                    </button>
                    <p className="text-center px-2 py-1 w-24 rounded-lg bg-gray-500 bg-opacity-30">
                        £9.99
                    </p>
                </div>

                <div className="flex mt-4 mb-3">
                    {cardData.platforms.map((item) => {
                        return (
                            <PlatformImg
                                key={item.platform.slug}
                                platform={item.platform.slug}
                            ></PlatformImg>
                        )
                    })}
                </div>
                <h2 className="text-xl font-bold">{cardData.name}</h2>
            </div>
        </div>
    )
}

export default GameCard
