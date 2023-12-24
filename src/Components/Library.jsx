import '../ComponentStyles/Library.css'
import Header from './Header.jsx'
import LibraryButton from '../Buttons/LibraryButton.jsx'
import GridWhiteImg from '../assets/GridWhiteImg.png'
import GridBlackImg from '../assets/GridBlackImg.png'
import WindowsWhiteImg from '../assets/WindowsWhiteImg.png'
import WindowsBlackImg from '../assets/WindowsBlackImg.png'
import XboxWhiteImg from '../assets/XboxWhiteImg.png'
import XboxBlackImg from '../assets/XboxBlackImg.png'
import ActionWhiteImg from '../assets/ActionWhiteImg.png'
import ActionBlackImg from '../assets/ActionBlackImg.png'
import GetRawgData from './GetRawgData.jsx'

const Library = () => {
    console.log(GetRawgData())
    return (
        <div>
            <Header></Header>
            <div className="ml-7">
                <div className="bg-gray-500 bg-opacity-10 w-52 px-4 py-2 rounded">
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
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Library
