import LuckyImg from '../../../Assets/GlobalImages/LuckyBlackImg.png'
import { useNavigate } from 'react-router-dom'

const ImFeelingLuckyButton = () => {
    const generateRandomId = () => {
        return Math.floor(Math.random() * 20000) + 1
    }

    const navigate = useNavigate()
    const handleLuckyClick = async () => {
        const randomId = generateRandomId()
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
