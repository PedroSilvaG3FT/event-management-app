import common from './_common'

const colors = { ...common }

const background = {
    bgPrimary: '#101010',
    bgSecondary: '#1C1C1C'
}

const spacing = {
    headerHeight: '5rem'
}

export default {
    spacing,
    colors: {
        text: '#FFF',
        ...colors,
        ...background
    }
}
