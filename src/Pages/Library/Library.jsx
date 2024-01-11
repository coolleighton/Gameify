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
    increaseSearchAmount,
    searchAmount,
    heading,
}) => {
    return (
        <div className="relative w-full">
            <Header headerBgColour={'#04020b'} cart={cart}></Header>
            <div className="grid grid-cols-1 relative w-10/12 mx-auto sm:grid-cols-2 sm:grid-cols-[1fr_10fr] sm:w-full">
                <div className="hidden w-64 sm:mr-2 sm:block"></div>
                <CategoryButtonsSection
                    handleCategoryClick={handleCategoryClick}
                ></CategoryButtonsSection>
                <GamesSection
                    handleAddToCart={handleAddToCart}
                    searchAmount={searchAmount}
                    heading={heading}
                    gamesData={ApiData}
                    cart={cart}
                    increaseSearchAmount={increaseSearchAmount}
                ></GamesSection>
            </div>
            <MobileMenu handleCategoryClick={handleCategoryClick}></MobileMenu>
            <Cart
                cart={cart}
                setCart={setCart}
                removeItemFromCart={removeItemFromCart}
            ></Cart>
        </div>
    )
}
export default Library
