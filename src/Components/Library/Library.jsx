import Header from '../Header/Header.jsx'
import GamesSection from './LibraryComponents/GamesSection.jsx'
import CategoryButtonsSection from './LibraryComponents/CategoryButtonsSection.jsx'
import MobileMenu from '../MobileMenu/MobileMenu.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

const Library = () => {
    const [ApiData, setApiData] = useState([])
    const [gameGenre, setGameGenre] = useState('')
    const [gamePlatform, setGamePlatform] = useState('')
    const [searchAmount, setSearchAmount] = useState(12)
    const [heading, setHeading] = useState('All games')

    // handle when user has scrolled to bottom of the games section and increase search amount
    const increaseSearchAmount = (amount) => {
        // add 20 to current search amount
        let newSearchAmount = amount + 4
        // set search amount state to the new amount
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
        setGamePlatform('&platforms=' + genre)
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
            // function that will fetch data, change it abit and set 'ApiData' with that data
            const fetchData = async () => {
                // wait for fetch of data
                const response = await fetch(ApiUrl)

                // wait for data then turn into JSON
                const data = await response.json()

                // create a new array with only the data we need
                let displayData = []
                const dataResult = data.results
                displayData = dataResult.map((item) => {
                    return {
                        name: item.name,
                        image: item.background_image,
                        platforms: item.parent_platforms,
                    }
                })

                setApiData(displayData)
            }

            // calls fetchData Function
            fetchData()
        } catch (error) {
            // logs error message if error
            console.error('Error fetching data from Rawg:', error)
        }

        console.log(ApiUrl)
    }, [gameGenre, gamePlatform, searchAmount])

    return (
        <div className="relative w-full">
            <Header headerBgColour={'#04020b'}></Header>
            <div className="grid grid-cols-1 relative w-10/12 mx-auto sm:grid-cols-2 sm:grid-cols-[auto_auto] sm:w-full">
                <div className="hidden w-64 sm:mr-2 sm:block"></div>
                <CategoryButtonsSection
                    handlePlatformClick={handleGamePlatformChange}
                    handleCategoryClick={handleGameGenreChange}
                ></CategoryButtonsSection>
                <GamesSection
                    handleLoadMore={increaseSearchAmount}
                    searchAmount={searchAmount}
                    heading={heading}
                    gamesData={ApiData}
                ></GamesSection>
            </div>
            <MobileMenu></MobileMenu>
        </div>
    )
}
export default Library
