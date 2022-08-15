import AppCardTitle from '@/components/common/app-card-title'
import React from 'react'
import { Container, Title, Content } from './styles'

interface GroupMemberProps {
    members: any[]
}

const GroupMember: React.FC<GroupMemberProps> = props => {
    const { members } = props

    const goToDetail = () => {
        console.log('Detalhes dos membros')
    }

    return (
        <Container>
            <Title>Membros</Title>
            <Content>
                {members.map((item, index) => (
                    <AppCardTitle
                        key={index}
                        name={item.name}
                        onClick={goToDetail}
                        imageURL={item.imageURL}
                    />
                ))}
            </Content>
        </Container>
    )
}

export default GroupMember
