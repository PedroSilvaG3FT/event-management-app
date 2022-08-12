import React from 'react'
import { Container, Image, Text, TitleBadge } from './styles'

interface GroupCardProps {
    group: any
}

const GroupCard: React.FC<GroupCardProps> = props => {
    const { group } = props
    const firstLetter = group.name.split('')[0]

    return (
        <Container>
            {group.imageURL ? (
                <Image src={group.imageURL} alt={group.name} />
            ) : (
                <TitleBadge>{firstLetter}</TitleBadge>
            )}
            <Text>{group.name}</Text>
        </Container>
    )
}

export default GroupCard
