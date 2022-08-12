import React from 'react'
import { useRouter } from 'next/router'
import NextEventCard from './next-event-card'
import { BsChevronCompactRight } from 'react-icons/bs'
import { Container, Title, Content, Link } from './styles'

const NextEvents: React.FC = () => {
    const router = useRouter()

    return (
        <Container>
            <Title>
                Próximos eventos
                <Link onClick={() => router.push('/event')}>
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
