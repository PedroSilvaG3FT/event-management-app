import React from 'react'
import { Container, Icon, Text } from './styles'

interface AppShortcutsListProps {
    items: {
        icon: any
        name: string
        callback: React.MouseEventHandler<HTMLElement>
    }[]
}

const AppShortcutsList: React.FC<AppShortcutsListProps> = props => {
    return (
        <>
            {props.items.map((item, index) => (
                <Container key={index} onClick={item.callback}>
                    <Icon>{item.icon}</Icon>
                    <Text>{item.name}</Text>
                </Container>
            ))}
        </>
    )
}

export default AppShortcutsList
