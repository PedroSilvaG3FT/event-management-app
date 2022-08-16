import React from 'react'
import { useRouter } from 'next/router'
import AppHead from '@/components/common/app-head'
import Logo from '@/assets/images/logo/dark-logo.png'
import {
    Form,
    Span,
    Input,
    Label,
    Title,
    Image,
    Button,
    Content,
    Article,
    FormGroup,
    Container
} from '@/styles/pages/login'

const Wellcome: React.FC = () => {
    const router = useRouter()

    const handleSubmit = (e: any) => {
        e.preventDefault
        router.push('/home')
    }

    return (
        <>
            <AppHead title="Login" />
            <Container>
                <Article>
                    <Image src={Logo} alt="AGENDEI" />
                    <Title>AGENDEI</Title>
                </Article>

                <Content>
                    <Form>
                        <FormGroup>
                            <Label>E-mail</Label>
                            <Input />
                            <Span></Span>
                        </FormGroup>

                        <FormGroup>
                            <Label>Senha</Label>
                            <Input />
                            <Span></Span>
                        </FormGroup>

                        <Button type="button" onClick={e => handleSubmit(e)}>
                            Entrar
                        </Button>
                    </Form>
                </Content>
            </Container>
        </>
    )
}

export default Wellcome
