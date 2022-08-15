import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../../css/ts/components'

export const Container = styled(AppContainer)``

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
