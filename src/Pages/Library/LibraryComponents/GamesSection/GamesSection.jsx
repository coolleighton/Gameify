import GameCard from './GameCard/GameCard'
import Loading from './Loading/Loading'
import Filters from './Filters/Filters'
import { useEffect } from 'react'
import GlobalFunctions from '../../../../GlobalFunctions/GlobalFunctions.js'
import UserMessageModal from '../../../../GlobalComponents/UserMessageModal/UserMessageModal.jsx'

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
    // display no games found modal
    useEffect(() => {
        if (loadingScreenPlayed) {
            if (gamesData.length < 1) {
                const displayMessage = async () => {
                    document.querySelector(
                        '.emptySearchMessage'
                    ).style.display = 'block'
                    await GlobalFunctions.delay(50)
                    document.querySelector(
                        '.emptySearchMessage'
                    ).style.opacity = '1'
                }
                displayMessage()
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
            <UserMessageModal
                title={'No games found'}
                message={
                    'Sorry, but no games were found with this set of search criteria. Please try searching for something else or try removing filters.'
                }
                classID={'emptySearchMessage'}
            ></UserMessageModal>
            <UserMessageModal
                title={'Thank you for using Gameify'}
                message={
                    "This is only a dummy website and you can't actually purchase games here. To purchase the games or see more about the RawgAPI that was used on this site visit https://rawg.io/. "
                }
                classID={'checkoutMessage'}
            ></UserMessageModal>
        </div>
    )
}

export default GamesSection
