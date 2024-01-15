import StandardCategoryButton from '../../../../GlobalComponents/StandardCategoryButton/StandardCategoryButton.jsx'
import ButtonData from '../../../../Assets/ButtonsData.js'
import './CategoryButtonsSection.css'

const CategoryButtonsSection = ({ handleCategoryClick }) => {
    return (
        <div
            id="categoryButtonsWrapper"
            className="categoryButtonsWrapper hidden w-72 sm:mr-2 sm:flex fixed duration-300 flex"
        >
            <div className="categoryButtons hidden sm:block bg-gray-500 bg-opacity-20 w-56 px-4 py-2 rounded-2xl overflow-auto no-scrollbar">
                <h1 className="text-3xl font-bold mt-1 mb-2">Trending</h1>
                {ButtonData.Special.map((item) => {
                    return (
                        <StandardCategoryButton
                            key={item.text}
                            whiteIcon={item.whiteIcon}
                            categoryInfo={item.categoryInfo}
                            text={item.text}
                            category="special"
                            handleCategoryClick={handleCategoryClick}
                            id="LibraryButton"
                        ></StandardCategoryButton>
                    )
                })}
                <h1 className="text-3xl font-bold mt-4 mb-2">Platforms</h1>
                {ButtonData.Platforms.map((item) => {
                    return (
                        <StandardCategoryButton
                            key={item.text}
                            whiteIcon={item.whiteIcon}
                            categoryInfo={item.categoryInfo}
                            text={item.text}
                            category="platform"
                            handleCategoryClick={handleCategoryClick}
                            id="LibraryButton"
                        ></StandardCategoryButton>
                    )
                })}
                <h1 className="text-3xl font-bold mt-4 mb-2">Genre</h1>
                {ButtonData.Genres.map((item) => {
                    return (
                        <StandardCategoryButton
                            key={item.text}
                            whiteIcon={item.whiteIcon}
                            categoryInfo={item.categoryInfo}
                            text={item.text}
                            category="genre"
                            handleCategoryClick={handleCategoryClick}
                            id="LibraryButton"
                        ></StandardCategoryButton>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryButtonsSection
