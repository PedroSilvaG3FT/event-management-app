import React from 'react'
import { Container } from '@/styles/pages/event'
import AppHead from '@/components/common/app-head'
import EventList from '@/components/event/event-list'
import EventCalendar from '@/components/event/event-calendar'

const Event: React.FC = () => {
    const events = [
        new Date(2022, 7, 7),
        new Date(2022, 7, 14),
        new Date(2022, 7, 21),
        new Date(2022, 7, 28)
    ]

    return (
        <>
            <AppHead title="Eventos" backTo="/home" showHeader />

            <Container showHeader>
                <EventCalendar events={events} />
                <EventList events={events} />
            </Container>
        </>
    )
}

export default Event
