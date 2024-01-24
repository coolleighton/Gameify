import CloseImgWhite from '../../Assets/GlobalImages/CloseImgWhite.png'

const Cart = ({ cart, setCart, removeItemFromCart }) => {
    // handle when a user wants to clear the cart
    const clearCart = ({ setCart }) => {
        const clearedCart = []
        setCart(clearedCart)
        window.localStorage.setItem('storedCart', JSON.stringify(clearedCart))
    }

    // calculate the total of all game prices
    const CalculateTotal = (cart) => {
        let sum = 0
        cart.forEach((el) => (sum += Number(el.price)))
        return parseFloat(sum).toFixed(2)
    }

    // close Cart
    const toggleCartOff = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // re-enable body scrolling
        document.querySelector('body').style.overflowY = 'auto'

        // hide cart
        document.querySelector('#Cart').style.opacity = '0'

        // wait 0.5s then remove from Page
        await delay(300)
        document.querySelector('#Cart').style.display = 'none'
    }

    // close cart if user clicks outside card
    document.addEventListener('click', (e) => {
        if (e.target.id === 'Cart') {
            toggleCartOff()
        }
    })

    // render the cart
    return (
        <div
            id="Cart"
            className="hidden opacity-0 fixed w-screen h-screen backdrop-brightness-50 backdrop-blur-sm z-50 top-0 right-0 duration-300"
        >
            <div className="fixed bg-[#04020b] h-screen top-0 right-0 w-10/12 z-50 sm:w-4/12 lg:w-3/12 2xl:w-2/12">
                <div className="fixed flex flex-col justify-between h-screen bg-gray-500 bg-opacity-20 w-10/12 sm:w-4/12 lg:w-3/12 2xl:w-2/12">
                    <div className="flex justify-between pt-8 pb-8 px-8">
                        <h2 className="text-3xl font-bold">
                            {cart.length} Games
                        </h2>
                        <button onClick={() => toggleCartOff()}>
                            <img className="w-8" src={CloseImgWhite}></img>
                        </button>
                    </div>
                    <div className=" w-100 overflow-y-scroll no-scrollbar mx-10 rounded-xl">
                        {cart.map((item) => {
                            return (
                                <div
                                    id={item.name + 'cart'}
                                    key={item.name}
                                    className="bg-gray-500 bg-opacity-20 mb-5 rounded-xl "
                                >
                                    <img
                                        className="rounded-t-xl h-32 w-full object-cover"
                                        src={item.image}
                                    ></img>
                                    <div className="px-4 py-3">
                                        <p className="font-bold text-lg">
                                            {item.name}
                                        </p>
                                        <div className="flex justify-between">
                                            <p className="">£{item.price}</p>
                                            <button>
                                                <img
                                                    className="w-5 h-5"
                                                    src={CloseImgWhite}
                                                    onClick={() =>
                                                        removeItemFromCart(
                                                            item.name
                                                        )
                                                    }
                                                ></img>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <div className="flex flex-col justify-between py-8 px-8 z-50">
                            <p className="bg-gray-500 bg-opacity-40 py-1 px-3 mb-4 rounded-xl w-auto ml-auto">
                                Total: £{CalculateTotal(cart)}
                            </p>
                            <div className="flex justify-between">
                                <button
                                    className="bg-gray-500 bg-opacity-40 py-1 px-3 rounded-xl hover:bg-opacity-80 duration-300"
                                    onClick={() => clearCart({ setCart })}
                                >
                                    Clear
                                </button>
                                <button
                                    className="bg-gray-500 bg-opacity-40 py-1 px-3 rounded-xl hover:bg-opacity-80 duration-300"
                                    onClick={() => clearCart({ setCart })}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Cart
