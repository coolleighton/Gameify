// handle when a user wants to clear the cart
const clearCart = ({ setCart }) => {
    const clearedCart = []
    setCart(clearedCart)
    window.localStorage.setItem('storedCart', JSON.stringify(clearedCart))
}

export default clearCart
