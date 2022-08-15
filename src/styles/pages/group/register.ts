import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../../css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`pb-20`}
`

export const Footer = styled.footer`
    ${tw`w-full h-16 fixed bottom-0 flex items-center justify-center rounded-t-xl`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Button = styled(AppButton)`
    ${tw`w-3/5`}
`
