import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import AppCardTitle from '@/components/common/app-card-title'
import {
    Container,
    Content,
    Title,
    Button
} from '@/styles/pages/event/register'

const EventRegister: React.FC = () => {
    const router = useRouter()
    const [group, setGroup] = useState<any>(null)

    const groups = [
        { name: 'Edificar', imageURL: '' },
        { name: 'Lídia', imageURL: '' },
        {
            name: 'Cordeirinhos',
            imageURL:
                'https://i.pinimg.com/736x/d7/73/05/d77305f816c7e2a37dae14b8f32603e5.jpg'
        },
        { name: 'Sarça Ardente', imageURL: '' },
        {
            name: 'Ministerio de Louvor',
            imageURL:
                'https://i.pinimg.com/736x/d7/73/05/d77305f816c7e2a37dae14b8f32603e5.jpg'
        }
    ]

    const handleNext = (item: any) => {
        router.push('/event/register/event-type')
    }

    return (
        <>
            <AppHead title="Evento" backTo="/home" showHeader />

            <Container showHeader>
                <Title>Selecione o grupo</Title>

                <Content>
                    {groups.map((item, index) => (
                        <AppCardTitle
                            key={index}
                            name={item.name}
                            imageURL={item.imageURL}
                            onClick={() => setGroup(item)}
                            isActive={item.name === group?.name}
                        />
                    ))}
                </Content>
            </Container>

            <Button onClick={handleNext} disabled={!group}>
                Avançar
            </Button>
        </>
    )
}

export default EventRegister
