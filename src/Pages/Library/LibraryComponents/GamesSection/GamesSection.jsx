import GameCard from './GameCard/GameCard'
import Loading from './Loading/Loading'
import Filters from './Filters/Filters'
import IncorrectSearchMessage from '../../../../GlobalComponents/IncorrectSearchMessage/IncorrectSearchMessage.jsx'
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
    loadingScreenPlayed,
    setIsFadingOut,
}) => {
    useEffect(() => {
        if (loadingScreenPlayed) {
            if (gamesData.length < 1) {
                document.querySelector('#modal').style.display = 'block'
            }
        }
    }, [gamesData])

    return (
        <div id="gamesSection" className="w-full rounded-2xl mt-24">
            <h1 className="font-extrabold text-center text-[2.5rem] pt-3 mb-5 md:text-7xl xs:text-5xl sm:text-left">
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
                            setIsFadingOut={setIsFadingOut}
                        ></GameCard>
                    )
                })}
            </div>

            <Loading></Loading>
            <IncorrectSearchMessage></IncorrectSearchMessage>
        </div>
    )
}

export default GamesSection
