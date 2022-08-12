import { fadeScale } from './fade-scale'
import { showLeft } from './show-left'

const fadeIn = {
    up: { className: `animate__animated  animate__fadeInUp` },
    down: { className: `animate__animated  animate__fadeInDown` },
    left: { className: `animate__animated  animate__fadeInLeft` },
    right: { className: `animate__animated  animate__fadeInRight` },
    default: { className: `animate__animated  animate__fadeIn` }
}

export { fadeScale, showLeft, fadeIn }
