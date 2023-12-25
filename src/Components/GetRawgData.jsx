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
            // function that will fetch data and set 'ApiData' with that data
            const fetchData = async () => {
                const response = await fetch(ApiUrl)
                const data = await response.json()
                setApiData(data)
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
