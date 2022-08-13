import EventCard from '@/components/common/event-card'
import React from 'react'
import { Container, Title } from './styles'

interface EventListProps {
    events: any[]
}

const EventList: React.FC<EventListProps> = props => {
    const { events } = props

    return (
        <Container>
            <Title>Eventos</Title>

            {events.map((event, index) => (
                <EventCard key={index} />
            ))}
        </Container>
    )
}

export default EventList
