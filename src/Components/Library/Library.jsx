import Header from '../Header/Header.jsx'
import GamesSection from './LibraryComponents/GamesSection.jsx'
import CategoryButtonsSection from './LibraryComponents/CategoryButtonsSection.jsx'
import MobileMenu from '../MobileMenu/MobileMenu.jsx'
import GetRawgData from '../../Components/GetRawgData.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

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
export default Library
