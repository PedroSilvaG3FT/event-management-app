import { AppTitle } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    > article {
        ${tw`mb-4`}

        &:last-of-type {
            ${tw`mb-0`}
        }
    }
`

export const Title = styled(AppTitle)`
    ${tw`my-6`}
`

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
`
