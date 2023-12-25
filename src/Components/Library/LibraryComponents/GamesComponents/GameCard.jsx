import Skyrim from '../../../../assets/skyrim.jpg'
import WindowsWhiteImg from '../../../../assets/WindowsWhiteImg.png'
import XboxWhiteImg from '../../../../assets/XboxWhiteImg.png'

const GameCard = () => {
    return (
        <div className="max-w-2xl rounded-2xl bg-gray-500 bg-opacity-10 cursor-pointer hover:scale-105 duration-300">
            <img className="rounded-t-2xl" src={Skyrim}></img>
            <div className="p-4">
                <div className="flex justify-between">
                    <button className="px-2 py-1 rounded-lg bg-gray-500 bg-opacity-30 hover:bg-opacity-50 duration-200">
                        Add to cart +
                    </button>
                    <p className="px-2 py-1 rounded-lg bg-gray-500 bg-opacity-30">
                        £9.99
                    </p>
                </div>
                <div className="flex my-3">
                    <img className="h-5" src={WindowsWhiteImg}></img>
                    <img className="h-5 ml-2" src={XboxWhiteImg}></img>
                </div>
                <h2 className="text-xl font-bold">The Elder Scrolls: Skyrim</h2>
            </div>
        </div>
    )
}

export default GameCard
