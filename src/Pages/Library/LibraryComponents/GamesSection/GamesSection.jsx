import GameCard from './GameCard/GameCard'
import Loading from './Loading/Loading'
import Filters from './Filters/Filters'
import { useEffect } from 'react'

const GamesSection = ({
    gamesData,
    heading,
    handleAddToCart,
    cart,
    gameGenre,
    gamePlatform,
    gameSpecialCategory,
    handleFilterSpecialCategory,
    handleFilterPlatformCategory,
    handleFilterGenreCategory,
}) => {
    return (
        <div id="gamesSection" className="w-full rounded-2xl mt-20">
            <h1 className="font-extrabold text-center text-[2.5rem] pt-3 mb-6 md:text-7xl xs:text-5xl sm:text-left">
                {heading}
            </h1>
            <Filters
                gameGenre={gameGenre}
                gamePlatform={gamePlatform}
                gameSpecialCategory={gameSpecialCategory}
                handleFilterSpecialCategory={handleFilterSpecialCategory}
                handleFilterPlatformCategory={handleFilterPlatformCategory}
                handleFilterGenreCategory={handleFilterGenreCategory}
            ></Filters>
            <div
                id="GamesGrid"
                className="grid grid-cols-1 grid-rows-2 gap-8 mb-7 mt-48 lg:mt-20 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 sm:mr-10"
            >
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
            <Loading></Loading>
        </div>
    )
}

export default GamesSection
