import Header from '../../GlobalComponents/Header/Header.jsx'
import GamesSection from './LibraryComponents/GamesSection/GamesSection.jsx'
import CategoryButtonsSection from './LibraryComponents/CategoryButtonsComponents/CategoryButtonsSection.jsx'
import MobileMenu from '../../GlobalComponents/MobileMenu/MobileMenu.jsx'
import Cart from '../../GlobalComponents/Cart/Cart.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

const Library = ({
    cart,
    clearCart,
    setCart,
    setApiData,
    ApiData,
    removeItemFromCart,
}) => {
    const [gameGenre, setGameGenre] = useState('')
    const [gamePlatform, setGamePlatform] = useState('')
    const [searchAmount, setSearchAmount] = useState(12)
    const [heading, setHeading] = useState('All games')

    // return a price based on what the first letter of game name (doing random prices each time changes price on re render)
    const generateRandomPrice = (name) => {
        const myArray = [
            '4.99',
            '9.99',
            '14.99',
            '19.98',
            '24.50',
            '29.97',
            '35',
            '40',
            '45',
            '59.99',
        ]

        const firstLetter = name.charAt(0).toLowerCase()

        if (['a', 'b', 'c'].includes(firstLetter)) {
            return myArray[0]
        }

        if (['d', 'e', 'f'].includes(firstLetter)) {
            return myArray[1]
        }

        if (['g', 'h', 'i'].includes(firstLetter)) {
            return myArray[2]
        }

        if (['j', 'k', 'l'].includes(firstLetter)) {
            return myArray[3]
        }

        if (['m', 'n', 'o'].includes(firstLetter)) {
            return myArray[4]
        }

        if (['p', 'q', 'r'].includes(firstLetter)) {
            return myArray[5]
        }

        if (['s', 't', 'u'].includes(firstLetter)) {
            return myArray[6]
        }

        if (['v', 'w', 'x'].includes(firstLetter)) {
            return myArray[7]
        }

        if (['y', 'z'].includes(firstLetter)) {
            return myArray[8]
        } else {
            return myArray[9]
        }
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

        // replicated in Standard Link Buttons please fix!!!!!!!
        const toggleHamburgerMenuOff = async () => {
            const delay = (ms) => new Promise((res) => setTimeout(res, ms))

            document.querySelector('#hamburgerMenu').style.opacity = '0'

            await delay(500)
            document.querySelector('#hamburgerMenu').style.display = 'none'
        }

        toggleHamburgerMenuOff()
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

        // replicated in Standard Link Buttons please fix!!!!!!!
        const toggleHamburgerMenuOff = async () => {
            const delay = (ms) => new Promise((res) => setTimeout(res, ms))

            document.querySelector('#hamburgerMenu').style.opacity = '0'

            await delay(500)
            document.querySelector('#hamburgerMenu').style.display = 'none'
        }

        toggleHamburgerMenuOff()
    }

    // handle when a user adds an item to the cart
    const handleAddToCart = (id, active) => {
        if (!active) {
            const object = ApiData.find((obj) => obj.name === id)
            const newCart = [...cart, object]
            setCart(newCart)
            window.localStorage.setItem('storedCart', JSON.stringify(newCart))
        }
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
                        price: generateRandomPrice(item.name),
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
            <MobileMenu
                handlePlatformClick={handleGamePlatformChange}
                handleCategoryClick={handleGameGenreChange}
            ></MobileMenu>
            <Cart
                cart={cart}
                setCart={setCart}
                clearCart={clearCart}
                removeItemFromCart={removeItemFromCart}
            ></Cart>
        </div>
    )
}
export default Library
