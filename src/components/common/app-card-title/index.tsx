import React from 'react'
import { Container, Image, Icon, Text, TitleBadge } from './styles'

interface AppCardTitleProps {
    icon?: any
    name: string
    row?: boolean
    imageURL?: string
    onClick?: Function
}

const AppCardTitle: React.FC<AppCardTitleProps> = props => {
    const { name, icon, row, imageURL, onClick } = props
    const firstLetter = name.split('')[0]

    const handleClick = () => {
        if (onClick) onClick()
    }

    const renderCardFigure = () => {
        if (icon) return <Icon>{icon}</Icon>
        else if (imageURL) return <Image src={imageURL} alt={name} />
        else return <TitleBadge>{firstLetter}</TitleBadge>
    }

    return (
        <Container onClick={handleClick} row={row}>
            {renderCardFigure()}
            <Text>{name}</Text>
        </Container>
    )
}

export default AppCardTitle
