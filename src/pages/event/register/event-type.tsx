import React from 'react'
import { useRouter } from 'next/router'
import { FaPeopleCarry } from 'react-icons/fa'
import { GiGuitarBassHead } from 'react-icons/gi'
import { AiOutlineSchedule } from 'react-icons/ai'
import AppHead from '@/components/common/app-head'
import AppCardTitle from '@/components/common/app-card-title'
import { Container, Content, Title } from '@/styles/pages/event/register'

const EventType: React.FC = () => {
    const router = useRouter()

    const eventTypes = [
        { id: 1, name: 'Agenda', icon: <AiOutlineSchedule /> },
        { id: 2, name: 'Escala Banda', icon: <GiGuitarBassHead /> },
        { id: 3, name: 'Escala Comum', icon: <FaPeopleCarry /> }
    ]

    const goToNextStep = (item: any) => {
        router.push('/event/register/detail')
    }

    return (
        <>
            <AppHead title="Evento" backTo="/event/register" showHeader />

            <Container showHeader>
                <Title>Selecione o tipo do evento</Title>

                <Content>
                    {eventTypes.map((item, index) => (
                        <AppCardTitle
                            key={index}
                            name={item.name}
                            icon={item.icon}
                            onClick={() => goToNextStep(item)}
                        />
                    ))}
                </Content>
            </Container>
        </>
    )
}

export default EventType
