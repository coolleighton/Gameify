import GlobalFunctions from '../../GlobalFunctions/GlobalFunctions'

// toggle the cart on
export const toggleCartOn = async () => {
    document.querySelector('#Cart').style.display = 'block'

    if (window.innerWidth > 640) {
        // stop user from scrolling the body on anything bigger than mobile
        document.querySelector('body').style.overflowY = 'clip'
    }

    await GlobalFunctions.delay(50)
    // show cart
    document.querySelector('#Cart').style.opacity = '1'
}
