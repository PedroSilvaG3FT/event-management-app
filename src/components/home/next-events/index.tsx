import React from 'react'
import { useRouter } from 'next/router'
import EventCard from '@/components/common/event-card'
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
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </Content>
        </Container>
    )
}

export default NextEvents
