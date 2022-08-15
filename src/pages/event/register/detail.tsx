import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { Container, Footer, Button } from '@/styles/pages/event/register'
import EventRegisterDetail from '@/components/event/register/event-register-form'
import EventRegisterMember from '@/components/event/register/event-register-member'
import EventRegisterMusic from '@/components/event/register/event-register-music'

const EventDetail: React.FC = () => {
    const router = useRouter()

    const musics: any[] = []
    const members: any[] = []

    return (
        <>
            <AppHead
                showHeader
                title="Evento"
                backTo="/event/register/event-type"
            />

            <Container showHeader>
                <EventRegisterDetail />
                <EventRegisterMember members={members} />
                <EventRegisterMusic musics={musics} />
            </Container>

            <Footer>
                <Button>Salvar</Button>
            </Footer>
        </>
    )
}

export default EventDetail
