import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import EventMusicModal from '@/components/modals/event-music-modal'
import EventMemberModal from '@/components/modals/event-member-modal'
import { Container, Footer, Button } from '@/styles/pages/event/register'
import EventRegisterDetail from '@/components/event/register/event-register-form'
import EventRegisterMember from '@/components/event/register/event-register-member'
import EventRegisterMusic from '@/components/event/register/event-register-music'

const EventDetail: React.FC = () => {
    const router = useRouter()
    const [isMusicModalOpen, setIsMusicModalOpen] = useState(false)
    const [isMemberModalOpen, setIsMemberModalOpen] = useState(false)

    const musics: any[] = []
    const members: any[] = []

    const handleSave = () => {
        router.push('/home')
    }

    return (
        <>
            <AppHead
                showHeader
                title="Evento"
                backTo="/event/register/event-type"
            />

            <Container showHeader>
                <EventRegisterDetail />
                <EventRegisterMember
                    members={members}
                    onClickAction={() => setIsMemberModalOpen(true)}
                />
                <EventRegisterMusic
                    musics={musics}
                    onClickAction={() => setIsMusicModalOpen(true)}
                />
            </Container>

            <Button onClick={handleSave}>Salvar</Button>

            <EventMemberModal
                isOpen={isMemberModalOpen}
                onClose={() => setIsMemberModalOpen(false)}
                onBackdropClick={() => setIsMemberModalOpen(false)}
            />

            <EventMusicModal
                isOpen={isMusicModalOpen}
                onClose={() => setIsMusicModalOpen(false)}
                onBackdropClick={() => setIsMusicModalOpen(false)}
            />
        </>
    )
}

export default EventDetail
