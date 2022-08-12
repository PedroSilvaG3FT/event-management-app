import React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs'
import {
    Container,
    Image,
    Content,
    Article,
    Title,
    Text,
    Button
} from './styles'

const UserDetails: React.FC = () => {
    return (
        <Container>
            <Content>
                <Image
                    src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
                    alt="Avatar"
                />

                <Article>
                    <Title>Pedro Silva</Title>
                    <Text>Guitarrista</Text>
                </Article>
            </Content>

            <Button>
                <Text>Perfil</Text>
                <BsChevronCompactRight />
            </Button>
        </Container>
    )
}

export default UserDetails
