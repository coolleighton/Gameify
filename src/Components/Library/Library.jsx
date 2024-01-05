import Header from '../Header/Header.jsx'
import GamesSection from './LibraryComponents/GamesSection.jsx'
import CategoryButtonsSection from './LibraryComponents/CategoryButtonsSection.jsx'
import MobileMenu from '../MobileMenu/MobileMenu.jsx'
import Cart from './LibraryComponents/Cart.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

const Library = () => {
    const [ApiData, setApiData] = useState([])
    const [gameGenre, setGameGenre] = useState('')
    const [gamePlatform, setGamePlatform] = useState('')
    const [searchAmount, setSearchAmount] = useState(12)
    const [heading, setHeading] = useState('All games')
    const [cart, setCart] = useState([])

    // load cart data from local storage
    useEffect(() => {
        let storedData = JSON.parse(localStorage.getItem('storedCart'))
        // if null set to '[]'
        if (!storedData) {
            storedData = []
        }
        setCart(storedData)
    }, [])

    // handle when a user adds an item to the cart
    const handleAddToCart = (id) => {
        const object = ApiData.find((obj) => obj.name === id)
        const newCart = [...cart, object]
        setCart(newCart)
        window.localStorage.setItem('storedCart', JSON.stringify(newCart))
    }

    // handle when a user wants to clear the cart
    const clearCart = () => {
        const clearedCart = []
        setCart(clearedCart)
        window.localStorage.setItem('storedCart', JSON.stringify(clearedCart))
    }

    // handle when user has scrolled to bottom of the games section and increase search amount
    const increaseSearchAmount = (amount) => {
        let newSearchAmount = amount + 4
        setSearchAmount(newSearchAmount)
    }

    // handle what games we want to display from the API (used for genre search)
    const handleGameGenreChange = (genre, text) => {
        // scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' })
        // append the new API url
        setGameGenre('&genres=' + genre)
        // clear platform search
        setGamePlatform('')
        // reset search amount
        setSearchAmount(12)
        // append title
        setHeading(text)
    }

    // handle what games we want to display from the API (used for platform search)
    const handleGamePlatformChange = (genre, text) => {
        // scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' })
        // append the new API url
        setGamePlatform('&parent_platforms=' + genre)
        // clear genre search
        setGameGenre('')
        // reset search amount
        setSearchAmount(12)
        // append title
        setHeading(text)
    }

    useEffect(() => {
        // declare API URL

        let ApiUrl =
            'https://api.rawg.io/api/games?key=561d4b7435f64843bd5c65f0b931d7bf' +
            gameGenre +
            gamePlatform +
            '&page_size=' +
            searchAmount

        try {
            // function that will fetch data, keep what we need and set 'ApiData' with that data
            const fetchData = async () => {
                const response = await fetch(ApiUrl)
                const data = await response.json()
                const dataResult = data.results

                // create a new array with only the data we need
                let displayData = []
                displayData = dataResult.map((item) => {
                    return {
                        name: item.name,
                        image: item.background_image,
                        platforms: item.parent_platforms,
                    }
                })

                setApiData(displayData)
            }
            fetchData()
        } catch (error) {
            console.error('Error fetching data from Rawg:', error)
        }
    }, [gameGenre, gamePlatform, searchAmount])

    return (
        <div className="relative w-full">
            <Header headerBgColour={'#04020b'} cart={cart}></Header>
            <div className="grid grid-cols-1 relative w-10/12 mx-auto sm:grid-cols-2 sm:grid-cols-[1fr_10fr] sm:w-full">
                <div className="hidden w-64 sm:mr-2 sm:block"></div>
                <CategoryButtonsSection
                    handlePlatformClick={handleGamePlatformChange}
                    handleCategoryClick={handleGameGenreChange}
                ></CategoryButtonsSection>
                <GamesSection
                    handleAddToCart={handleAddToCart}
                    handleLoadMore={increaseSearchAmount}
                    searchAmount={searchAmount}
                    heading={heading}
                    gamesData={ApiData}
                    cart={cart}
                ></GamesSection>
            </div>
            <MobileMenu></MobileMenu>
            <Cart cart={cart} clearCart={clearCart}></Cart>
        </div>
    )
}
export default Library
