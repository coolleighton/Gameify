import './StandardLinkButton.css'

const StandardLinkButton = ({
    whiteIcon,
    blackIcon,
    style,
    textStyle,
    category,
    categoryInfo,
    text,
    handleCategoryClick,
}) => {
    // hides white image
    const HandleCategoryMouseEnter = (target) => {
        target.children[1].style.opacity = '1'
        target.children[0].style.opacity = '0'
    }

    // hides black image
    const HandleCategoryMouseLeave = (target) => {
        target.children[1].style.opacity = '0'
        target.children[0].style.opacity = '1'
    }

    // renders button
    return (
        <button
            className="categoryButton flex flex-row items-center my-3 hover:cursor-pointer py-2"
            onMouseEnter={(e) => HandleCategoryMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => HandleCategoryMouseLeave(e.currentTarget)}
            onClick={() => handleCategoryClick(category, categoryInfo, text)}
        >
            <img
                className="categoryButtonImg w-11 p-2 bg-gray-500 bg-opacity-40 rounded-md duration-500"
                style={style}
                src={whiteIcon}
            ></img>
            <img
                className="categoryButtonImg opacity-0 w-11 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                style={style}
                src={blackIcon}
            ></img>
            <p className="pl-14 font-semibold" style={textStyle}>
                {text}
            </p>
        </button>
    )
}

export default StandardLinkButton
