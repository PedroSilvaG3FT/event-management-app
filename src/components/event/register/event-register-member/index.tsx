import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import AppCardTitle from '@/components/common/app-card-title'
import { Container, Title, Content, Link, Text } from './styles'

interface EventRegisterMemberProps {
    members: any[]
}

const EventRegisterMember: React.FC<EventRegisterMemberProps> = props => {
    const { members } = props

    return (
        <Container>
            <Title>
                Membros
                <Link>
                    <BsPlusLg />
                </Link>
            </Title>

            <Content>
                {members.map((item, index) => (
                    <AppCardTitle
                        key={index}
                        name={item.name}
                        imageURL={item.imageURL}
                    />
                ))}

                {!members.length && <Text>Adicione os membros do evento</Text>}
            </Content>
        </Container>
    )
}

export default EventRegisterMember
