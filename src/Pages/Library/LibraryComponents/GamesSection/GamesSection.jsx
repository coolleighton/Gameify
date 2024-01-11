import GameCard from './GameCard/GameCard'
import Loading from './Loading/Loading'

const GamesSection = ({
    gamesData,
    heading,
    increaseSearchAmount,
    searchAmount,
    handleAddToCart,
    cart,
}) => {
    return (
        <div className="w-full rounded-2xl mt-24">
            <h1 className="font-extrabold text-7xl mb-8">{heading}</h1>
            <div className=" grid grid-cols-1 grid-rows-2 gap-8 mb-7 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:mr-7">
                {gamesData.map((item) => {
                    return (
                        <GameCard
                            key={item.name}
                            cardData={item}
                            handleAddToCart={handleAddToCart}
                            cart={cart}
                        ></GameCard>
                    )
                })}
            </div>
            <Loading
                searchAmount={searchAmount}
                increaseSearchAmount={increaseSearchAmount}
            ></Loading>
        </div>
    )
}

export default GamesSection
