import CloseImg from '../../Assets/GlobalImages/CloseImg.png'
import GridWhiteImg from '../../Assets/GlobalImages/GridWhiteImg.png'
import HomeWhiteImg from '../../Assets/GlobalImages/HomeWhiteImg.png'
import LibraryWhiteImg from '../../Assets/GlobalImages/LibraryWhiteImg.png'
import ButtonData from '../../Assets/ButtonsData.js'
import StandardCategoryButton from '../StandardCategoryButton/StandardCategoryButton.jsx'
import './MobileMenu.css'
import { useNavigate } from 'react-router-dom'
import GlobalFunctions from '../../GlobalFunctions/GlobalFunctions.js'

const MobileMenu = ({ handleCategoryClick, setSearchAmount }) => {
    const navigate = useNavigate()

    // Navigate to a new page
    const navigateTo = (location) => {
        setSearchAmount(12)
        navigate(location)
    }

    // close hamburger menu with transition
    const toggleHamburgerMenuOff = async () => {
        document.querySelector('#hamburgerMenu').style.opacity = '0'
        await GlobalFunctions.delay(500)
        document.querySelector('#hamburgerMenu').style.display = 'none'
    }

    // set new api info, close menu, if needed go to library
    const MobileHandleCategoryClick = (text, categoryInfo, category) => {
        handleCategoryClick(text, categoryInfo, category)
        toggleHamburgerMenuOff()
        if (!window.location.href.includes('Library')) {
            navigateTo('/Library')
        }
    }

    return (
        <div
            id="hamburgerMenu"
            className="hidden opacity-0 fixed bg-white z-50 inset-0 px-7 py-5 duration-500 overflow-auto"
        >
            <div className="hamburgerMenu grid">
                <div className="hamburgerMenuCol1">
                    <h1 className="text-3xl text-black font-bold mb-2">
                        Quick Links
                    </h1>
                    <StandardCategoryButton
                        key="Home"
                        whiteIcon={HomeWhiteImg}
                        text="Home"
                        handleCategoryClick={() => navigateTo('/')}
                        id="MobileMenuButton"
                    ></StandardCategoryButton>
                    <StandardCategoryButton
                        key="Library"
                        whiteIcon={LibraryWhiteImg}
                        text="Library"
                        handleCategoryClick={() => navigateTo('/Library')}
                        id="MobileMenuButton"
                    ></StandardCategoryButton>

                    <h1 className="text-3xl text-black font-bold mt-6 mb-2">
                        Trending
                    </h1>
                    {ButtonData.Special.map((item) => {
                        return (
                            <StandardCategoryButton
                                key={item.text}
                                whiteIcon={item.whiteIcon}
                                text={item.text}
                                category="special"
                                categoryInfo={item.categoryInfo}
                                handleCategoryClick={MobileHandleCategoryClick}
                                id="MobileMenuButton"
                            ></StandardCategoryButton>
                        )
                    })}

                    <h1 className="text-3xl text-black font-bold mt-6 mb-2">
                        Platforms
                    </h1>
                    {ButtonData.Platforms.map((item) => {
                        return (
                            <StandardCategoryButton
                                key={item.text}
                                whiteIcon={item.whiteIcon}
                                text={item.text}
                                category="platform"
                                categoryInfo={item.categoryInfo}
                                handleCategoryClick={MobileHandleCategoryClick}
                                id="MobileMenuButton"
                            ></StandardCategoryButton>
                        )
                    })}
                </div>
                <div className="hamburgerMenuCol2">
                    <h1 className="text-3xl text-black font-bold mb-2">
                        Genre
                    </h1>
                    {ButtonData.Genres.map((item) => {
                        return (
                            <StandardCategoryButton
                                key={item.text}
                                whiteIcon={item.whiteIcon}
                                text={item.text}
                                category="genre"
                                categoryInfo={item.categoryInfo}
                                handleCategoryClick={MobileHandleCategoryClick}
                                id="MobileMenuButton"
                            ></StandardCategoryButton>
                        )
                    })}
                </div>
            </div>

            <button
                onClick={() => {
                    toggleHamburgerMenuOff()
                }}
            >
                <img src={CloseImg} className="fixed right-10 bottom-10"></img>
            </button>
        </div>
    )
}

export default MobileMenu
