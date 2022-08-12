import AppCalendar from '@/components/common/app-calendar'
import React from 'react'

interface EventCalendarProps {
    events: any[]
}

const EventCalendar: React.FC<EventCalendarProps> = props => {
    const { events } = props
    const dates = events

    return <AppCalendar activeDates={dates} />
}

export default EventCalendar
