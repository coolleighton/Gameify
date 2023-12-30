import GameCard from './GamesComponents/GameCard'
import GetRawgData from '../../GetRawgData'
import { useState, useEffect } from 'react'

const GamesSection = () => {
    const [ApiData, setApiData] = useState([])

    useEffect(() => {
        // declare API URL
        const ApiUrl =
            'https://api.rawg.io/api/games?key=561d4b7435f64843bd5c65f0b931d7bf'

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
    }, [])

    return (
        <div className="rounded-2xl mt-24 sm:mr-7">
            <h1 className="font-extrabold text-7xl mb-8">Best of the year</h1>
            <div className="grid grid-cols-1 grid-rows-2 gap-8 mb-7 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {ApiData.map((item) => {
                    return <GameCard cardData={item}></GameCard>
                })}
            </div>
        </div>
    )
}

export default GamesSection
