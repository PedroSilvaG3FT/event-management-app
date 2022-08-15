import { AppFormGroup } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section``

export const Form = styled.form`
    ${tw`w-full`}

    > div {
        ${tw`w-full`}
    }
`

export const FormGroup = styled(AppFormGroup)`
    &:first-of-type {
        ${tw`mt-4`}
    }
`

export const Input = styled.input``

export const Span = styled.span``

export const Label = styled.label``
