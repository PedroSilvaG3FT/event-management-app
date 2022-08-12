import _common from './_common'

const colors = { ..._common }

const background = {
    bgPrimary: '#F7F7F7',
    bgSecondary: '#FFFFFF'
}

const spacing = {
    headerHeight: '5rem'
}

export default {
    spacing,
    colors: {
        text: '#0F3460',
        ...colors,
        ...background
    }
}
