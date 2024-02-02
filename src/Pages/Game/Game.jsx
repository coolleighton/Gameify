import MobileMenu from '../../GlobalComponents/MobileMenu/MobileMenu.jsx'
import Cart from '../../GlobalComponents/Cart/Cart.jsx'
import Header from '../../GlobalComponents/Header/Header.jsx'
import GameContent from './GameContent/GameContent.jsx'
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
                    console.log(data)

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
                    const data = await response.json()
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
            ></Cart>
        </div>
    )
}

export default Game
