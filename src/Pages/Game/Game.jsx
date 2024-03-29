import MobileMenu from '../../GlobalComponents/MobileMenu/MobileMenu.jsx'
import Cart from '../../GlobalComponents/Cart/Cart.jsx'
import Header from '../../GlobalComponents/Header/Header.jsx'
import GameContent from './GameContent/GameContent.jsx'
import GlobalFunctions from '../../GlobalFunctions/GlobalFunctions.js'
import UserMessageModal from '../../GlobalComponents/UserMessageModal/UserMessageModal.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Game = ({
    ApiData,
    cart,
    setCart,
    setSearchAmount,
    removeItemFromCart,
    inputValue,
    searchValue,
    setInputValue,
    setSearchValue,
    handleCategoryClick,
    resetSearchCriteria,
    isFadingOut,
    setIsFadingOut,
    handleAddToCart,
}) => {
    const [gameData, setGameData] = useState({})
    const [gameDetails, setGameDetails] = useState({})
    const [gameScreenshots, setGameScreenshots] = useState({})
    const [renderContent, setRenderContent] = useState(false)
    const location = useLocation()
    const gameId = location.state.id

    setTimeout(() => {
        document.querySelector('body').style.opacity = '1'
    }, 300)

    // get request for game data on page mount
    useEffect(() => {
        // API call for game details
        let detailsApiUrl =
            'https://api.rawg.io/api/games/' +
            gameId +
            '?key=561d4b7435f64843bd5c65f0b931d7bf'

        const fetchData = async () => {
            try {
                const fetchDetailsData = async () => {
                    const response = await fetch(detailsApiUrl)
                    const data = await response.json()

                    // check if age has a value
                    const getAge = () => {
                        if (data.esrb_rating) {
                            return data.esrb_rating.name
                        } else {
                            return 'Not found'
                        }
                    }

                    // check if metacritic rating has a value
                    const getRating = () => {
                        if (data.metacritic) {
                            return data.metacritic + '%'
                        } else {
                            return 'Not found'
                        }
                    }

                    // create a new array with only the data we need
                    let displayData = {
                        price: GlobalFunctions.generateRandomPrice(data.name),
                        released: data.released,
                        age: getAge(),
                        name: data.name,
                        mainImage: data.background_image,
                        description: data.description_raw,
                        genres: data.genres,
                        platforms: data.platforms,
                        rating: getRating(),
                        developers: data.developers,
                    }
                    setGameDetails(displayData)
                }
                fetchDetailsData()
            } catch (error) {
                console.error('Error fetching data from Rawg:', error)
            }

            // API call for game screenshots

            let screenshotsApiUrl =
                'https://api.rawg.io/api/games/' +
                gameId +
                '/screenshots?key=561d4b7435f64843bd5c65f0b931d7bf'

            try {
                const fetchScreenshotData = async () => {
                    const response = await fetch(screenshotsApiUrl)
                    let data = await response.json()

                    setGameScreenshots(data)
                }
                fetchScreenshotData()
            } catch (error) {
                console.error('Error fetching data from Rawg:', error)
            }
        }

        fetchData()
    }, [gameId])

    useEffect(() => {
        setGameData({
            gameDetails: gameDetails,
            gameScreenshots: gameScreenshots,
        })
    }, [gameDetails, gameScreenshots])

    useEffect(() => {
        if (Object.keys(gameData).length > 0) {
            setRenderContent(true)
        } else {
            setRenderContent(false)
        }
    }, [gameData])

    return (
        <div
            id="gameScreen"
            className={`screen ${
                isFadingOut ? 'fade-out' : ''
            } relative w-full`}
        >
            <Header
                SearchData={ApiData}
                headerBgColour={'#04020b'}
                cart={cart}
                setSearchAmount={setSearchAmount}
                inputValue={inputValue}
                searchValue={searchValue}
                setInputValue={setInputValue}
                setSearchValue={setSearchValue}
                handleCategoryClick={handleCategoryClick}
                resetSearchCriteria={resetSearchCriteria}
                isFadingOut={isFadingOut}
                setIsFadingOut={setIsFadingOut}
            ></Header>
            {renderContent ? (
                <GameContent
                    gameData={gameData}
                    cart={cart}
                    handleAddToCart={handleAddToCart}
                ></GameContent>
            ) : (
                <></>
            )}

            <MobileMenu
                handleCategoryClick={handleCategoryClick}
                setSearchAmount={setSearchAmount}
            ></MobileMenu>
            <Cart
                cart={cart}
                setCart={setCart}
                removeItemFromCart={removeItemFromCart}
                setIsFadingOut={setIsFadingOut}
            ></Cart>
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

export default Game
