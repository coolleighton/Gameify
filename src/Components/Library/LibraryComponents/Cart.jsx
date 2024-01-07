import CloseImgWhite from '../../../assets/CloseImgWhite.png'

const Cart = ({ cart, clearCart, removeItemFromCart }) => {
    const toggleCartOff = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // re-enable body scrolling
        document.querySelector('body').style.position = 'static'
        document.querySelector('body').style.overflowY = 'auto'

        document.querySelector('#Cart').style.opacity = '0'
        await delay(500)
        document.querySelector('#Cart').style.display = 'none'
    }

    const CalculateTotal = (cart) => {
        let sum = 0
        cart.forEach((el) => (sum += Number(el.price)))

        return parseFloat(sum).toFixed(2)
    }

    return (
        <div
            id="Cart"
            className="hidden opacity-0 fixed w-screen h-screen backdrop-brightness-50 z-50 top-0 right-0 duration-300"
        >
            <div className="fixed bg-[#04020b] h-screen top-0 right-0 w-10/12 z-50 sm:w-4/12 lg:w-3/12 2xl:w-2/12">
                <div className="fixed flex flex-col justify-between h-screen bg-gray-500 bg-opacity-20 w-10/12 sm:w-4/12 lg:w-3/12 2xl:w-2/12">
                    <div className="flex justify-between pt-8 pb-4 px-8">
                        <h2 className="text-2xl font-bold">
                            {cart.length} Games
                        </h2>
                        <button onClick={() => toggleCartOff()}>
                            <img className="w-8" src={CloseImgWhite}></img>
                        </button>
                    </div>
                    <div className="h-[76vh] top-20 absolute overflow-y-scroll no-scrollbar mx-8">
                        {cart.map((item) => {
                            return (
                                <div
                                    key={item.name}
                                    className="bg-gray-500 bg-opacity-20 my-5 rounded-xl "
                                >
                                    <img
                                        className="rounded-t-xl h-32 w-full object-cover"
                                        src={item.image}
                                    ></img>
                                    <div className="p-4">
                                        <p className="font-bold text-lg">
                                            {item.name}
                                        </p>
                                        <div className="flex justify-between mt-2">
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
                        <div className="flex justify-between pb-8 pb-t px-8 z-50">
                            <p className="bg-gray-500 bg-opacity-40 py-1 px-3 rounded-xl">
                                Total: £{CalculateTotal(cart)}
                            </p>
                            <button
                                className="bg-gray-500 bg-opacity-40 ml-2 py-1 px-3 rounded-xl hover:bg-opacity-80 duration-300"
                                onClick={() => clearCart()}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Cart
