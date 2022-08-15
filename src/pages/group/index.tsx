import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import AppCardTitle from '@/components/common/app-card-title'
import { Container, Content, Button } from '@/styles/pages/group'

const Group: React.FC = () => {
    const router = useRouter()
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

    const goToRegister = () => {
        router.push('/group/register')
    }

    return (
        <>
            <AppHead
                title="Grupos"
                backTo="/home"
                showHeader
                rightSlot={
                    <Button onClick={goToRegister}>
                        Novo
                        <AiOutlineUsergroupAdd />
                    </Button>
                }
            />

            <Container showHeader>
                <Content>
                    {groups.map((item, index) => (
                        <AppCardTitle
                            key={index}
                            name={item.name}
                            imageURL={item.imageURL}
                        />
                    ))}
                </Content>
            </Container>
        </>
    )
}

export default Group
