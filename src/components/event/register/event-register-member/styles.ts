import { AppTitle } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section``

export const Title = styled(AppTitle)`
    ${tw`my-6`}
`

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.article`
    ${tw`py-3 pb-5 w-full flex overflow-x-auto`}
    scroll-snap-type: x mandatory;

    > article {
        ${tw`mr-4`}
        scroll-snap-align: center;

        &:last-of-type {
            ${tw`mr-0`}
        }
    }
`

export const Text = styled.p`
    ${tw`w-full text-center`}
    color: ${({ theme }) => theme.colors.gray};
`
