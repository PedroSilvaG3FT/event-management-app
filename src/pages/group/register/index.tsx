import React from 'react'
import AppHead from '@/components/common/app-head'
import GroupForm from '@/components/group/register/group-form'
import { Container, Footer, Button } from '@/styles/pages/group/register'
import MemberGroupRegister from '@/components/group/register/member-group-register'

const GroupRegister: React.FC = () => {
    const members = [
        { name: 'Pedro Silva', imageURL: '' },
        { name: 'Nicolas Juan', imageURL: '' },
        { name: 'Luan Henrique', imageURL: '' },
        { name: 'Jeferson Andrade', imageURL: '' },
        {
            name: 'Eliudo Junior',
            imageURL:
                'https://i.pinimg.com/736x/d7/73/05/d77305f816c7e2a37dae14b8f32603e5.jpg'
        }
    ]

    const onAddMember = (member: any) => {
        members.push(member)
    }

    return (
        <>
            <AppHead title="Grupo" backTo="/group" showHeader />

            <Container showHeader>
                <GroupForm />
                <MemberGroupRegister
                    members={members}
                    onAddMember={onAddMember}
                />
            </Container>

            <Footer>
                <Button>Salvar </Button>
            </Footer>
        </>
    )
}

export default GroupRegister
