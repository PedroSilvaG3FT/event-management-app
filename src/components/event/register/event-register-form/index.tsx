import React from 'react'
import AppCalendar from '@/components/common/app-calendar'
import { Container, FormGroup, Label, Input } from './styles'

const EventRegisterForm: React.FC = () => {
    return (
        <Container>
            <AppCalendar />

            <FormGroup>
                <Label>Horário</Label>
                <Input />
            </FormGroup>

            <FormGroup>
                <Label>Nome</Label>
                <Input />
            </FormGroup>
        </Container>
    )
}

export default EventRegisterForm
