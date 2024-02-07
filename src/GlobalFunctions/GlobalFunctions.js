const GlobalFunctions = {
    // function to provide a delay in micro seconds in async functions
    delay: (ms) => new Promise((res) => setTimeout(res, ms)),

    // function to display the cart
    toggleCartOn: async () => {
        document.querySelector('#Cart').style.display = 'block'

        if (window.innerWidth > 640) {
            // stop user from scrolling the body on anything bigger than mobile
            document.querySelector('body').style.overflowY = 'clip'
        }

        await GlobalFunctions.delay(50)
        // show cart
        document.querySelector('#Cart').style.opacity = '1'
    },

    // return a price based on what the first letter of game name (doing random prices each time changes price on re render)
    generateRandomPrice: (name) => {
        const myArray = [
            '4.99',
            '9.99',
            '14.99',
            '19.98',
            '24.50',
            '29.97',
            '35',
            '40',
            '45',
            '59.99',
        ]

        const firstLetter = name.charAt(0).toLowerCase()

        if (['a', 'b', 'c'].includes(firstLetter)) {
            return myArray[0]
        }

        if (['d', 'e', 'f'].includes(firstLetter)) {
            return myArray[1]
        }

        if (['g', 'h', 'i'].includes(firstLetter)) {
            return myArray[2]
        }

        if (['j', 'k', 'l'].includes(firstLetter)) {
            return myArray[3]
        }

        if (['m', 'n', 'o'].includes(firstLetter)) {
            return myArray[4]
        }

        if (['p', 'q', 'r'].includes(firstLetter)) {
            return myArray[5]
        }

        if (['s', 't', 'u'].includes(firstLetter)) {
            return myArray[6]
        }

        if (['v', 'w', 'x'].includes(firstLetter)) {
            return myArray[7]
        }

        if (['y', 'z'].includes(firstLetter)) {
            return myArray[8]
        } else {
            return myArray[9]
        }
    },
}

export default GlobalFunctions
