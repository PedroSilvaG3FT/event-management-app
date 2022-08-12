import React from 'react'
import GroupCard from './group-card'
import { BsChevronCompactRight } from 'react-icons/bs'
import { Container, Title, Content, Link } from './styles'

const GroupList: React.FC = () => {
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

    return (
        <Container>
            <Title>
                Grupos
                <Link>
                    Ver todos
                    <BsChevronCompactRight />
                </Link>
            </Title>
            <Content>
                {groups.map((item, index) => (
                    <GroupCard group={item} key={index} />
                ))}
            </Content>
        </Container>
    )
}

export default GroupList
