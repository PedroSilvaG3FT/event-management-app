import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import AppCardTitle from '@/components/common/app-card-title'
import { Container, Title, Content, Link, Text } from './styles'

interface EventRegisterMusicProps {
    musics: any[]
    onClickAction?: () => void
}

const EventRegisterMusic: React.FC<EventRegisterMusicProps> = props => {
    const { musics, onClickAction } = props

    return (
        <Container>
            <Title>
                Musicas
                <Link onClick={onClickAction}>
                    <BsPlusLg />
                </Link>
            </Title>

            <Content>
                {musics.map((item, index) => (
                    <AppCardTitle
                        key={index}
                        name={item.name}
                        imageURL={item.imageURL}
                    />
                ))}

                {!musics.length && <Text>Adicione músicas do evento</Text>}
            </Content>
        </Container>
    )
}

export default EventRegisterMusic
