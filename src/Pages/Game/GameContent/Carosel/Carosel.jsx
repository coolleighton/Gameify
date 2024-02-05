const Carosel = ({ gameData }) => {
    const imagesArray = gameData.gameScreenshots.results

    console.log(imagesArray)

    return (
        <div className="relative w-full h-full flex overflow-hidden">
            {imagesArray.map((item) => {
                return (
                    <img
                        className=" rounded-lg lg:rounded-2xl w-full h-full object-cover"
                        src={item.image}
                    ></img>
                )
            })}
        </div>
    )
}

export default Carosel

/* 
<img
    className="rounded-lg lg:rounded-2xl w-full h-full object-cover"
    src={gameData.gameScreenshots.results[0].image}
></img>
*/
