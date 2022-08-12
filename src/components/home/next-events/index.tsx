import React from 'react'
import NextEventCard from './next-event-card'
import { BsChevronCompactRight } from 'react-icons/bs'
import { Container, Title, Content, Link } from './styles'

const NextEvents: React.FC = () => {
    return (
        <Container>
            <Title>
                Próximos eventos
                <Link>
                    Ver Todos
                    <BsChevronCompactRight />
                </Link>
            </Title>

            <Content>
                <NextEventCard />
                <NextEventCard />
                <NextEventCard />
                <NextEventCard />
                <NextEventCard />
                <NextEventCard />
            </Content>
        </Container>
    )
}

export default NextEvents
