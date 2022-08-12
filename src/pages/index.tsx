import React from 'react'
import AppHead from '@/components/common/app-head'
import {
    Form,
    Span,
    Input,
    Label,
    Title,
    Button,
    Content,
    Article,
    FormGroup,
    Container
} from '@/styles/pages/login'
import { useRouter } from 'next/router'

const Wellcome: React.FC = () => {
    const router = useRouter()

    const handleSubmit = (e: any) => {
        e.preventDefault
        router.push('/home')
    }

    return (
        <>
            <AppHead title="Hello World" />
            <Container>
                <Article>
                    <Title>APP TITLE</Title>
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
