import React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs'
import { Container, Title, Icon, Content, Subtitle, Badge } from './styles'

const NextEventCard: React.FC = () => {
    return (
        <Container>
            <Badge>14/08</Badge>
            <Content>
                <Title>Nome do evento</Title>
                <Subtitle>Nome do grupo</Subtitle>
            </Content>
            <Icon>
                <BsChevronCompactRight />
            </Icon>
        </Container>
    )
}

export default NextEventCard
