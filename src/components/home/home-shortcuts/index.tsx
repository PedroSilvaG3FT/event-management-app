import React from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { BsCalendarDate } from 'react-icons/bs'
import { Container, Title, Content, Card, Icon, Text } from './styles'

const HomeShortcuts: React.FC = () => {
    const shortcuts = [
        { icon: <BsCalendarDate />, name: 'Novo Evento', route: '' },
        { icon: <HiUserGroup />, name: 'Novo Grupo', route: '' }
    ]

    return (
        <Container>
            <Title>Atalhos</Title>

            <Content>
                {shortcuts.map((item, index) => (
                    <Card key={index}>
                        <Icon>{item.icon}</Icon>
                        <Text>{item.name}</Text>
                    </Card>
                ))}
            </Content>
        </Container>
    )
}

export default HomeShortcuts
