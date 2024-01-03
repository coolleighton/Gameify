import PlatformImg from './PlatformImg'

const GameCard = ({ cardData }) => {
    return (
        <div className="max-w-2xl rounded-2xl bg-gray-500 bg-opacity-20 cursor-pointer hover:scale-105 duration-300">
            <img
                className="rounded-t-2xl h-56 w-full object-cover"
                src={cardData.image}
            ></img>
            <div className="p-4">
                <div className="flex justify-between">
                    <button className="px-2 py-1 rounded-lg bg-gray-500 bg-opacity-30 hover:bg-opacity-50 duration-200">
                        Add to cart +
                    </button>
                    <p className="px-2 py-1 rounded-lg bg-gray-500 bg-opacity-30">
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
