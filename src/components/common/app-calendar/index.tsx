import { Container } from './styles'
import React, { useEffect } from 'react'
import { getMonthsLabel } from '@/helpers/date.helper'
import Calendar, { CalendarProps, ViewCallbackProperties } from 'react-calendar'

interface AppCalendarProps extends CalendarProps {
    activeDates?: Date[]
}

const AppCalendar: React.FC<AppCalendarProps> = props => {
    const monthLabelTypes = getMonthsLabel()

    useEffect(() => {
        setActiveDates()
    }, [props.activeDates])

    const setActiveDates = () => {
        if (!props.activeDates) return

        const yearLabel = props.activeDates[0].getFullYear()
        const daysLabels = props.activeDates.map(date => date.getDate())
        const monthLabel = monthLabelTypes[props.activeDates[0].getMonth()]
        const days = document.getElementsByClassName('react-calendar__tile')

        Array.prototype.forEach.call(days, element => {
            const [firstChildren] = element.children
            if (firstChildren.tagName !== 'ABBR') return
            const labelAttr = firstChildren.getAttribute('aria-label')

            if (
                !labelAttr.includes(monthLabel) ||
                !labelAttr.includes(yearLabel)
            )
                return

            const label = firstChildren.innerText
            const isActive = daysLabels.some(value => value == label)

            if (isActive) element.classList.add('active-day')
        })
    }

    const handleChange = (value: any, event: any) => {
        setActiveDates()
        if (props.onChange) props.onChange(value, event)
    }

    const handleActiveStartDateChange = (event: ViewCallbackProperties) => {
        setActiveDates()
        if (props.onActiveStartDateChange) props.onActiveStartDateChange(event)
    }

    return (
        <Container>
            <Calendar
                {...props}
                locale="pt-BR"
                onChange={handleChange}
                onActiveStartDateChange={handleActiveStartDateChange}
            />
        </Container>
    )
}

export default AppCalendar
