import tw from 'twin.macro'
import styled from 'styled-components'
import { AppFormGroup } from '@/styles/css/ts/components'

export const Article = styled.article`
    ${tw`mb-3 flex items-center justify-between`}
`

export const Form = styled.form`
    ${tw`w-full`}

    > div {
        ${tw`w-full`}
    }
`

export const FormGroup = styled(AppFormGroup)`
    ${tw`w-4/5 mb-0`}

    &:first-child {
        ${tw`pr-3`}
    }
`

export const Input = styled.input``

export const Span = styled.span``

export const Label = styled.label``

export const Select = styled.select``

export const Option = styled.option``
