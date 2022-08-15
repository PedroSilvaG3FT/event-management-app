import React from 'react'
import { Container } from '@/styles/pages/group/detail'
import AppHead from '@/components/common/app-head'
import AppCardTitle from '@/components/common/app-card-title'

const GroupDetail: React.FC = () => {
    return (
        <>
            <AppHead title="Detalhes" showHeader backTo="/home" />

            <Container showHeader>
                <AppCardTitle name={'Nome Grupo'} />
                <div> Detalhes do grupo </div>
            </Container>
        </>
    )
}

export default GroupDetail
