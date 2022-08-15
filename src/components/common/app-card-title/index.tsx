import React from 'react'
import { Container, Image, Text, TitleBadge } from './styles'

interface AppCardTitleProps {
    name: string
    imageURL?: string
}

const AppCardTitle: React.FC<AppCardTitleProps> = props => {
    const { name, imageURL } = props
    const firstLetter = name.split('')[0]

    return (
        <Container>
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
