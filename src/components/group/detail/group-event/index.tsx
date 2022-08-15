import EventCard from '@/components/common/event-card'
import React from 'react'
import { Container, Title, Content } from './styles'

interface GroupEventProps {
    events: any[]
}

const GroupEvent: React.FC<GroupEventProps> = props => {
    const { events } = props

    const goToDetail = () => {
        console.log('Detalhes dos membros')
    }

    return (
        <Container>
            <Title>Eventos</Title>
            <Content>
                {events.map((item, index) => (
                    <EventCard key={index} />
                ))}
            </Content>
        </Container>
    )
}

export default GroupEvent
