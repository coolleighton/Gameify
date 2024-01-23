import WindowsWhiteImg from '../../../../../../Assets/PlatformImages/WindowsWhiteImg.png'
import XboxWhiteImg from '../../../../../../Assets/PlatformImages/XboxWhiteImg.png'
import PlaystationWhiteImg from '../../../../../../Assets/PlatformImages/PlaystationWhiteImg.png'
import LinuxWhiteImg from '../../../../../../Assets/PlatformImages/LinuxWhiteImg.png'
import MacWhiteImg from '../../../../../../Assets/PlatformImages/MacWhiteImg.png'
import NintendoWhiteImg from '../../../../../../Assets/PlatformImages/NintendoWhiteImg.png'

const PlatformImg = (platform) => {
    let imageSrc = ''
    if (platform.platform === 'pc') {
        imageSrc = WindowsWhiteImg
    } else if (platform.platform === 'xbox') {
        imageSrc = XboxWhiteImg
    } else if (platform.platform === 'playstation') {
        imageSrc = PlaystationWhiteImg
    } else if (platform.platform === 'mac') {
        imageSrc = MacWhiteImg
    } else if (platform.platform === 'linux') {
        imageSrc = LinuxWhiteImg
    } else if (platform.platform === 'nintendo') {
        imageSrc = NintendoWhiteImg
    }

    return <img className="h-4 xs:h-5 ml-1" src={imageSrc}></img>
}

export default PlatformImg
