import Header from '../../GlobalComponents/Header/Header.jsx'
import GamesSection from './LibraryComponents/GamesSection/GamesSection.jsx'
import CategoryButtonsSection from './LibraryComponents/CategoryButtonsSection/CategoryButtonsSection.jsx'
import MobileMenu from '../../GlobalComponents/MobileMenu/MobileMenu.jsx'
import Cart from '../../GlobalComponents/Cart/Cart.jsx'

const Library = ({
    cart,
    setCart,
    ApiData,
    removeItemFromCart,
    handleAddToCart,
    handleCategoryClick,
    heading,
    setSearchAmount,
    gameGenre,
    gamePlatform,
    gameSpecialCategory,
    handleFilterSpecialCategory,
    handleFilterPlatformCategory,
    handleFilterGenreCategory,
    inputValue,
    searchValue,
    setInputValue,
    setSearchValue,
    loadingScreenPlayed,
    resetSearchCriteria,
    isFadingOut,
    setIsFadingOut,
}) => {
    setTimeout(() => {
        document.querySelector('body').style.opacity = '1'
    }, 300)

    return (
        <div
            id="Library"
            className={`screen ${
                isFadingOut ? 'fade-out' : ''
            } relative w-full`}
        >
            <Header
                SearchData={ApiData}
                headerBgColour={'#04020b'}
                cart={cart}
                setSearchAmount={setSearchAmount}
                inputValue={inputValue}
                searchValue={searchValue}
                setInputValue={setInputValue}
                setSearchValue={setSearchValue}
                handleCategoryClick={handleCategoryClick}
                resetSearchCriteria={resetSearchCriteria}
                isFadingOut={isFadingOut}
                setIsFadingOut={setIsFadingOut}
            ></Header>
            <div className="grid grid-cols-1 relative w-10/12 mx-auto sm:grid-cols-[1fr_10fr] sm:w-full">
                <div className="hidden w-72 sm:block"></div>
                <CategoryButtonsSection
                    handleCategoryClick={handleCategoryClick}
                ></CategoryButtonsSection>
                <GamesSection
                    handleAddToCart={handleAddToCart}
                    heading={heading}
                    gamesData={ApiData}
                    cart={cart}
                    gameGenre={gameGenre}
                    gamePlatform={gamePlatform}
                    gameSpecialCategory={gameSpecialCategory}
                    handleFilterSpecialCategory={handleFilterSpecialCategory}
                    handleFilterPlatformCategory={handleFilterPlatformCategory}
                    handleFilterGenreCategory={handleFilterGenreCategory}
                    loadingScreenPlayed={loadingScreenPlayed}
                    setIsFadingOut={setIsFadingOut}
                ></GamesSection>
            </div>
            <MobileMenu
                handleCategoryClick={handleCategoryClick}
                setSearchAmount={setSearchAmount}
            ></MobileMenu>
            <Cart
                cart={cart}
                setCart={setCart}
                removeItemFromCart={removeItemFromCart}
                setIsFadingOut={setIsFadingOut}
            ></Cart>
        </div>
    )
}
export default Library
