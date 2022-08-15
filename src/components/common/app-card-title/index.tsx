import React from 'react'
import { Container, Image, Icon, Text, TitleBadge } from './styles'

interface AppCardTitleProps {
    name: string
    icon?: any
    imageURL?: string
    onClick?: Function
}

const AppCardTitle: React.FC<AppCardTitleProps> = props => {
    const { name, icon, imageURL, onClick } = props
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
        <Container onClick={handleClick}>
            {renderCardFigure()}
            <Text>{name}</Text>
        </Container>
    )
}

export default AppCardTitle
