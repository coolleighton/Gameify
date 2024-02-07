import WindowsWhiteImg from '../../../../../../Assets/PlatformImages/WindowsWhiteImg.png'
import XboxWhiteImg from '../../../../../../Assets/PlatformImages/XboxWhiteImg.png'
import PlaystationWhiteImg from '../../../../../../Assets/PlatformImages/PlaystationWhiteImg.png'
import LinuxWhiteImg from '../../../../../../Assets/PlatformImages/LinuxWhiteImg.png'
import MacWhiteImg from '../../../../../../Assets/PlatformImages/MacWhiteImg.png'
import NintendoWhiteImg from '../../../../../../Assets/PlatformImages/NintendoWhiteImg.png'

const PlatformImg = (platform) => {
    let image = ''
    if (platform.platform === 'pc') {
        image = <img className="h-4 xs:h-5 ml-1" src={WindowsWhiteImg}></img>
    } else if (platform.platform === 'xbox') {
        image = <img className="h-4 xs:h-5 ml-1" src={XboxWhiteImg}></img>
    } else if (platform.platform === 'playstation') {
        image = (
            <img className="h-4 xs:h-5 ml-1" src={PlaystationWhiteImg}></img>
        )
    } else if (platform.platform === 'mac') {
        image = <img className="h-4 xs:h-5 ml-1" src={MacWhiteImg}></img>
    } else if (platform.platform === 'linux') {
        image = <img className="h-4 xs:h-5 ml-1" src={LinuxWhiteImg}></img>
    } else if (platform.platform === 'nintendo') {
        image = <img className="h-4 xs:h-5 ml-1" src={NintendoWhiteImg}></img>
    }

    return image
}

export default PlatformImg
