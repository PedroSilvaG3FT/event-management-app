import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { Container, Title, Link } from './styles'
import EventCard from '@/components/common/event-card'
import { useRouter } from 'next/router'

interface EventListProps {
    events: any[]
}

const EventList: React.FC<EventListProps> = props => {
    const { events } = props
    const router = useRouter()

    const goToRegister = () => {
        router.push('/event/register')
    }

    return (
        <Container>
            <Title>
                Eventos
                <Link onClick={goToRegister}>
                    <BsPlusLg />
                </Link>
            </Title>

            {events.map((event, index) => (
                <EventCard key={index} />
            ))}
        </Container>
    )
}

export default EventList
