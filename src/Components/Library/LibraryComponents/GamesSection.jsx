import GameCard from './GamesComponents/GameCard'

const GamesSection = () => {
    return (
        <div className="rounded-2xl mt-24 sm:mr-7">
            <h1 className="font-extrabold text-7xl mb-8">Best of the year</h1>
            <div className="grid grid-cols-1 grid-rows-2 gap-8 mb-7 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
            </div>
        </div>
    )
}

export default GamesSection
