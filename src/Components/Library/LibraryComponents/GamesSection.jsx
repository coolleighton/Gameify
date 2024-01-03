import GameCard from './GamesComponents/GameCard'
import Loading from './GamesComponents/Loading/Loading'

const GamesSection = ({ gamesData, heading, handleLoadMore, searchAmount }) => {
    return (
        <div className="rounded-2xl mt-24 sm:mr-7">
            <h1 className="font-extrabold text-7xl mb-8">{heading}</h1>
            <div className="grid grid-cols-1 grid-rows-2 gap-8 mb-7 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {gamesData.map((item) => {
                    return <GameCard key={item.name} cardData={item}></GameCard>
                })}
            </div>
            <Loading
                searchAmount={searchAmount}
                handleLoadMore={handleLoadMore}
            ></Loading>
        </div>
    )
}

export default GamesSection
