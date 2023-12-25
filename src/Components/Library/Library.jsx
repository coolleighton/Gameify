import Header from '../Header/Header.jsx'
import GamesSection from './LibraryComponents/GamesSection.jsx'
import CategoryButtonsSection from './LibraryComponents/CategoryButtonsSection.jsx'
import MobileMenu from '../MobileMenu/MobileMenu.jsx'

const Library = () => {
    return (
        <div className="relative w-full">
            <Header headerBgColour={'#04020b'}></Header>
            <div className="grid grid-cols-1 relative w-10/12 mx-auto sm:grid-cols-2 sm:grid-cols-[auto_auto] sm:w-full">
                <div className="hidden w-64 sm:mr-2 sm:block"></div>
                <CategoryButtonsSection></CategoryButtonsSection>
                <GamesSection></GamesSection>
            </div>
            <MobileMenu></MobileMenu>
        </div>
    )
}
// grid grid-cols-2 gap-8 grid-cols-[auto_auto]
export default Library
