import React from 'react'
import { Container } from '@/styles/pages/group'
import AppHead from '@/components/common/app-head'
import GroupForm from '@/components/group/group-form'

const GroupRegister: React.FC = () => {
    return (
        <>
            <AppHead title="Grupos" backTo="/group" showHeader />

            <Container showHeader>
                <GroupForm />
            </Container>
        </>
    )
}

export default GroupRegister
