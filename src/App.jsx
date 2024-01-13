import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './Pages/Home/Home.jsx'
import Library from './Pages/Library/Library.jsx'
import ErrorPage from './GlobalComponents/ErrorPage/ErrorPage.jsx'

const App = () => {
    const [cart, setCart] = useState([])
    const [ApiData, setApiData] = useState([])
    const [loadingScreenPlayed, setLoadingScreenPlayed] = useState(false)
    const [gameGenre, setGameGenre] = useState('')
    const [gamePlatform, setGamePlatform] = useState('')
    const [searchAmount, setSearchAmount] = useState(12)
    const [heading, setHeading] = useState('All games')

    // load cart data from local storage
    useEffect(() => {
        let storedData = JSON.parse(localStorage.getItem('storedCart'))
        // if null set to '[]'
        if (!storedData) {
            storedData = []
        }
        setCart(storedData)
    }, [])

    // handle removing an item from the cart
    const removeItemFromCart = (name) => {
        const newArray = cart.filter((item) => item.name !== name)
        window.localStorage.setItem('storedCart', JSON.stringify(newArray))
        setCart(newArray)
    }

    // loading animation while wait for page to load
    const authenticate = () =>
        new Promise((resolve) => setTimeout(resolve, 1000))

    useEffect(() => {
        // prevent scrolling
        document.querySelector('body').style.overflowY = 'hidden'
        authenticate().then(() => {
            const ele = document.querySelector('.pageLoader')

            if (ele) {
                // tell app loading screen has played and play background video if on the home page
                setLoadingScreenPlayed(true)

                setTimeout(() => {
                    // hide from DOM and play video
                    ele.style.transition = '0.5s'
                    ele.style.opacity = '0'
                    if (document.querySelector('#backgroundVideo')) {
                        document.querySelector('#backgroundVideo').play()
                    }
                    setTimeout(() => {
                        // remove from DOM
                        ele.style.display = 'none'
                        // re-enable scrolling
                        document.querySelector('body').style.overflowY = 'auto'
                    }, 500)
                }, 1000)
            }
        })
    }, [])

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

    // set search amount to 12 when re-rendering library
    const setSearchAmountDefault = () => {
        setSearchAmount(12)
    }

    // handle what games we want to display when clicking a category button
    const handleCategoryClick = (category, categoryInfo, text) => {
        console.log(category, categoryInfo, text)

        // scroll to top, set heading and reset search amount
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setHeading(text)
        setSearchAmount(12)

        // check which type of button has been clicked and set api info
        if (category === 'genre') {
            setGameGenre('&genres=' + categoryInfo)
            setGamePlatform('')
        } else if (category === 'platform') {
            setGameGenre('')
            setGamePlatform('&parent_platforms=' + categoryInfo)
        }
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

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Home
                    cart={cart}
                    setCart={setCart}
                    loadingScreenPlayed={loadingScreenPlayed}
                    removeItemFromCart={removeItemFromCart}
                    handleCategoryClick={handleCategoryClick}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: 'Library',
            element: (
                <Library
                    heading={heading}
                    cart={cart}
                    setCart={setCart}
                    handleAddToCart={handleAddToCart}
                    removeItemFromCart={removeItemFromCart}
                    ApiData={ApiData}
                    setApiData={setApiData}
                    handleCategoryClick={handleCategoryClick}
                    searchAmount={searchAmount}
                    increaseSearchAmount={increaseSearchAmount}
                />
            ),
            errorElement: <ErrorPage />,
        },
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default App
