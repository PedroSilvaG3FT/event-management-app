import React from 'react'
import AppHead from '@/components/common/app-head'
import { Container } from '@/styles/pages/group/detail'
import AppCardTitle from '@/components/common/app-card-title'
import GroupEvent from '@/components/group/detail/group-event'
import GroupMember from '@/components/group/detail/group-member'
import GroupShortcuts from '@/components/group/detail/group-shortcuts'

const GroupDetail: React.FC = () => {
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

    const events = [
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

    return (
        <>
            <AppHead title="Detalhes" showHeader backTo="/home" />

            <Container showHeader>
                <AppCardTitle name={'Nome Grupo'} />
                <GroupEvent events={events} />
                <GroupMember members={members} />
                <GroupShortcuts />
            </Container>
        </>
    )
}

export default GroupDetail
