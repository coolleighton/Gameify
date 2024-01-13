const StandardLinkButton = ({
    whiteIcon,
    category,
    categoryInfo,
    text,
    handleCategoryClick,
    id,
}) => {
    // renders button
    return (
        <button
            className="flex flex-row items-center mb-2 hover:cursor-pointer"
            onClick={() => handleCategoryClick(category, categoryInfo, text)}
            id={id}
        >
            <img
                className=" w-11 p-2 bg-gray-500 bg-opacity-40 rounded-md duration-500"
                src={whiteIcon}
            ></img>
            <p className="pl-3 font-semibold">{text}</p>
        </button>
    )
}

export default StandardLinkButton
