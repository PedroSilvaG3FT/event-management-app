import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer, AppTitle } from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`pb-20`}
`

export const Title = styled(AppTitle)`
    ${tw`my-6`}
`

export const Content = styled.div`
    ${tw`grid gap-6 grid-cols-2`}
`

export const Button = styled(AppButton)`
    ${tw`flex items-center bg-transparent`}
    color: ${({ theme }) => theme.colors.primary};

    > svg {
        ${tw`ml-2 text-lg`}
    }
`

export const Footer = styled.footer`
    ${tw`w-full h-16 fixed bottom-0 flex items-center justify-center rounded-t-xl`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`
