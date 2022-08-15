import React from 'react'
import { useRouter } from 'next/router'
import { Container, Title } from './styles'
import { HiUserGroup } from 'react-icons/hi'
import { BsCalendarDate } from 'react-icons/bs'
import AppShortcutsList from '@/components/common/app-shortcuts-list'

const HomeShortcuts: React.FC = () => {
    const router = useRouter()

    const shortcuts = [
        {
            name: 'Novo Evento',
            icon: <BsCalendarDate />,
            callback: () => router.push('/event/register')
        },
        {
            name: 'Novo Grupo',
            icon: <HiUserGroup />,
            callback: () => router.push('/group/register')
        }
    ]

    return (
        <Container>
            <Title>Atalhos</Title>
            <AppShortcutsList items={shortcuts} />
        </Container>
    )
}

export default HomeShortcuts
