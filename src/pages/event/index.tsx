import React, { useState } from 'react'
import { Container } from '@/styles/pages/event'
import AppHead from '@/components/common/app-head'
import AppCalendar from '@/components/common/app-calendar'

const Event: React.FC = () => {
    // const [value, onChange] = useState(new Date(2022, 7, 7))
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
                <AppCalendar activeDates={events} />
            </Container>
        </>
    )
}

export default Event
