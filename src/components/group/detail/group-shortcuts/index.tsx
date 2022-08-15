import React from 'react'
import { useRouter } from 'next/router'
import { Container, Title } from './styles'
import AppShortcutsList from '@/components/common/app-shortcuts-list'
import {
    BsCalendarDate,
    BsFillPenFill,
    BsMusicNoteBeamed
} from 'react-icons/bs'

const GroupShortcuts: React.FC = () => {
    const route = useRouter()

    const shortcuts = [
        {
            name: 'Novo Evento',
            icon: <BsCalendarDate />,
            callback: () => console.log('Teste')
        },
        {
            name: 'Musicas Sugeridas',
            icon: <BsMusicNoteBeamed />,
            callback: () => console.log('Teste')
        },
        {
            name: 'Editar',
            icon: <BsFillPenFill />,
            callback: () => route.push('/group/register')
        }
    ]

    return (
        <Container>
            <Title>Atalhos</Title>
            <AppShortcutsList items={shortcuts} />
        </Container>
    )
}

export default GroupShortcuts
