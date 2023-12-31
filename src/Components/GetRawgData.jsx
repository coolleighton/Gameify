// API URL

import { useState } from 'react'
import { useEffect } from 'react'

const GetRawgData = () => {
    // declare API Data state
    const [ApiData, setApiData] = useState({})

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
                        platforms: item.platforms,
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

    return ApiData
}

export default GetRawgData
