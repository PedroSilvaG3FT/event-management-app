import React, { useState } from 'react'
import * as yup from 'yup'
import { Form, FormGroup, Article, Button, Input, Span } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AppInputImage from '@/components/common/app-input-image'

interface IGroupForm {
    name: string
}
const GroupForm: React.FC = () => {
    const groupForm = yup.object().shape({
        weight: yup.number().required('Insira o seu peso')
    })

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<IGroupForm>({ resolver: yupResolver(groupForm) })

    const handleSubmitForm = (form: IGroupForm) => {
        console.log('FORM :', form)
    }

    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Article>
                <FormGroup>
                    <Input {...register('name')} placeholder="Nome do grupo" />
                    <Span>{errors.name?.message}</Span>
                </FormGroup>

                <AppInputImage />
            </Article>
        </Form>
    )
}

export default GroupForm
