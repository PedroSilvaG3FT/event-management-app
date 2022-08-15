import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AppInputImage from '@/components/common/app-input-image'
import {
    Form,
    FormGroup,
    Article,
    Label,
    Input,
    Span,
    Select,
    Option
} from './styles'
interface IGroupForm {
    name: string
    groupType: number
}
const GroupForm: React.FC = () => {
    const groupTypes = [
        { id: 1, name: 'Banda' },
        { id: 2, name: 'Simples' }
    ]

    const groupForm = yup.object().shape({
        name: yup.string().required('Insira o nome do grupo'),
        groupType: yup.number().required('Insira o tipo do grupo')
    })

    const {
        register,
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

            <FormGroup>
                <Label>Tipo do grupo</Label>
                <Select {...register('groupType')}>
                    {groupTypes.map((item, index) => (
                        <Option key={index} value={item.id}>
                            {item.name}
                        </Option>
                    ))}
                </Select>
                <Span>{errors.groupType?.message}</Span>
            </FormGroup>
        </Form>
    )
}

export default GroupForm
