import './Library.css'
import Header from '../../Header/Header.jsx'
import LibraryButton from '../../Buttons/LibraryButton.jsx'
import GameCard from '../../Library/GameCard.jsx'
import GridWhiteImg from '../../../assets/GridWhiteImg.png'
import GridBlackImg from '../../../assets/GridBlackImg.png'
import WindowsWhiteImg from '../../../assets/WindowsWhiteImg.png'
import WindowsBlackImg from '../../../assets/WindowsBlackImg.png'
import XboxWhiteImg from '../../../assets/XboxWhiteImg.png'
import XboxBlackImg from '../../../assets/XboxBlackImg.png'
import ActionWhiteImg from '../../../assets/ActionWhiteImg.png'
import ActionBlackImg from '../../../assets/ActionBlackImg.png'
import GetRawgData from '../../GetRawgData.jsx'

const Library = () => {
    //console.log(GetRawgData())
    return (
        <div className="relative">
            <Header headerBgColour={'#04020b'}></Header>
            <div className="mx-7 grid grid-cols-2 gap-8 grid-cols-[auto_auto] relative">
                <div className="w-52"></div>
                <div
                    id="categoryButtons"
                    className="bg-gray-500 bg-opacity-10 w-52 px-4 py-2 rounded-2xl h-[87vh] overflow-auto no-scrollbar fixed mt-24 duration-500"
                >
                    <h1 className="text-3xl font-bold mb-2">Your Games</h1>
                    <LibraryButton
                        whiteIcon={GridWhiteImg}
                        blackIcon={GridBlackImg}
                        text="Added Games"
                    ></LibraryButton>

                    <h1 className="text-3xl font-bold mt-6 mb-2">Platforms</h1>
                    <LibraryButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        text="Windows"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={XboxWhiteImg}
                        blackIcon={XboxBlackImg}
                        text="Xbox One"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        text="Windows"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={XboxWhiteImg}
                        blackIcon={XboxBlackImg}
                        text="Xbox One"
                    ></LibraryButton>

                    <h1 className="text-3xl font-bold mt-6 mb-2">Genres</h1>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                    ></LibraryButton>
                </div>
                <div className="rounded-2xl mt-24 w-full">
                    <h1 className="font-extrabold text-7xl mb-8">
                        Best of the year
                    </h1>
                    <div className="grid grid-cols-4 grid-rows-2 gap-8">
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                        <GameCard></GameCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Library
