import GameCard from './GameCard/GameCard'
import Loading from './Loading/Loading'

const GamesSection = ({
    gamesData,
    heading,

    handleAddToCart,
    cart,
}) => {
    return (
        <div id="gamesSection" className="w-full rounded-2xl mt-24">
            <h1 className="font-extrabold text-center text-[2.5rem] pt-3 mb-8 md:text-7xl xs:text-5xl xs:text-left">
                {heading}
            </h1>
            <div className=" grid grid-cols-1 grid-rows-2 gap-8 mb-7 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 sm:mr-10">
                {gamesData.map((item) => {
                    return (
                        <GameCard
                            key={item.name}
                            cardData={item}
                            handleAddToCart={handleAddToCart}
                            cart={cart}
                        ></GameCard>
                    )
                })}
            </div>
            <Loading></Loading>
        </div>
    )
}

export default GamesSection
