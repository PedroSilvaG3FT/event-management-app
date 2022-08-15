import React from 'react'
import { Container, Title } from './styles'
import { HiUserGroup } from 'react-icons/hi'
import { BsCalendarDate } from 'react-icons/bs'
import AppShortcutsList from '@/components/common/app-shortcuts-list'

const HomeShortcuts: React.FC = () => {
    const goTo = (url: string) => {
        console.log('TO : ', url)
    }

    const shortcuts = [
        {
            name: 'Novo Evento',
            icon: <BsCalendarDate />,
            callback: () => goTo('/event/register')
        },
        {
            name: 'Novo Grupo',
            icon: <HiUserGroup />,
            callback: () => goTo('/group/register')
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
