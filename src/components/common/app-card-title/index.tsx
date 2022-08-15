import React from 'react'
import { Container, Image, Text, TitleBadge } from './styles'

interface AppCardTitleProps {
    name: string
    imageURL?: string
    onClick?: Function
}

const AppCardTitle: React.FC<AppCardTitleProps> = props => {
    const { name, imageURL, onClick } = props
    const firstLetter = name.split('')[0]

    const handleClick = () => {
        if (onClick) onClick()
    }

    return (
        <Container onClick={handleClick}>
            {imageURL ? (
                <Image src={imageURL} alt={name} />
            ) : (
                <TitleBadge>{firstLetter}</TitleBadge>
            )}
            <Text>{name}</Text>
        </Container>
    )
}

export default AppCardTitle
