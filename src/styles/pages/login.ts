import tw from 'twin.macro'
import { fadeIn } from '@/styles/animation'

import styled from 'styled-components'
import {
    AppButton,
    AppContainer,
    AppFormGroup
} from '@/styles/css/ts/components'

export const Container = styled.section`
    ${tw`h-screen p-0`}
`

export const Article = styled.article.attrs(fadeIn.down)`
    ${tw`h-[55%] w-full flex justify-center items-center`}
    color: ${({ theme }) => theme.colors.bgPrimary};
    background: ${({ theme }) => {
        const { primary, bgPrimary } = theme.colors
        return `linear-gradient(177deg, ${primary} 90%, ${bgPrimary} 4%)`
    }};
`

export const Image = styled.img`
    ${tw`w-32`}
`

export const Title = styled.h1`
    ${tw`text-xl font-normal relative top-3`}
`

export const Content = styled(AppContainer).attrs(fadeIn.up)`
    ${tw`h-[45%] px-12 flex justify-center items-center`}
`

export const Form = styled.form`
    ${tw`w-full`}
`

export const FormGroup = styled(AppFormGroup)``

export const Input = styled.input``

export const Label = styled.label``

export const Span = styled.span``

export const Button = styled(AppButton)`
    ${tw`w-full`}
`
