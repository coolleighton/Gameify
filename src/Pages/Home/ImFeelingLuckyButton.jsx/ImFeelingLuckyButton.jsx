import LuckyImg from '../../../Assets/GlobalImages/LuckyBlackImg.png'
import GlobalFunctions from '../../../GlobalFunctions/GlobalFunctions'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ImFeelingLuckyButton = ({ handleCategoryClick }) => {
    const [GameName, setGameName] = useState('')
    const [randomId, setGameId] = useState(
        Math.floor(Math.random() * 20000) + 1
    )

    // get request for game data on page mount
    useEffect(() => {
        // API call for game details
        let detailsApiUrl =
            'https://api.rawg.io/api/games/' +
            randomId +
            '?key=561d4b7435f64843bd5c65f0b931d7bf'

        console.log(randomId)
        const fetchData = async () => {
            try {
                const fetchGameName = async () => {
                    const response = await fetch(detailsApiUrl)
                    const data = await response.json()

                    let name = data.name
                    setGameName(name)
                }
                fetchGameName()
            } catch (error) {
                console.error('Error fetching data from Rawg:', error)
            }
        }

        fetchData()
    }, [])

    const navigate = useNavigate()
    const handleLuckyClick = async () => {
        handleCategoryClick('search', GameName, GameName)

        document.querySelector('body').style.opacity = '0'
        await GlobalFunctions.delay(300)

        console.log(randomId)

        navigate('/Game/' + randomId, { state: { id: randomId } })
    }

    return (
        <button
            onClick={() => handleLuckyClick()}
            className="flex py-2 items-center justify-center bg-white rounded-lg hover:scale-105 hover:bg-blue-100 duration-200"
        >
            <img className="w-6 h-6" src={LuckyImg}></img>
            <p className="text-black pl-2 font-semibold">I'm Feeling Lucky</p>
        </button>
    )
}

export default ImFeelingLuckyButton
