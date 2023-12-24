import '../ComponentStyles/Library.css'
import Header from './Header.jsx'
import LibraryButton from '../Buttons/LibraryButton.jsx'
import GridWhiteImg from '../assets/GridWhiteImg.png'
import GridBlackImg from '../assets/GridBlackImg.png'

const Library = () => {
    return (
        <div>
            <Header></Header>
            <div className="ml-7">
                <div className="bg-gray-500 bg-opacity-10 w-52 px-4 py-2 rounded">
                    <h1 className="text-3xl font-bold">Your Games</h1>
                    <LibraryButton
                        whiteIcon={GridWhiteImg}
                        blackIcon={GridBlackImg}
                        text="Added Games"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={GridWhiteImg}
                        blackIcon={GridBlackImg}
                        text="Added Games"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={GridWhiteImg}
                        blackIcon={GridBlackImg}
                        text="Added Games"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={GridWhiteImg}
                        blackIcon={GridBlackImg}
                        text="Added Games"
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={GridWhiteImg}
                        blackIcon={GridBlackImg}
                        text="Added Games"
                    ></LibraryButton>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Library
