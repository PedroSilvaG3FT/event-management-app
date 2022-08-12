import { AppTitle } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`mt-8`}
`

export const Title = styled(AppTitle)``

export const Content = styled.div`
    ${tw`mt-4`}
`

export const Card = styled.article`
    ${tw`p-4 flex items-center rounded-lg mb-2`}
    background: ${({ theme }) => theme.colors.bgSecondary};

    &:last-of-type {
        ${tw`mb-0`}
    }
`

export const Icon = styled.i`
    ${tw`mr-2 w-6 text-lg`}
    color: ${({ theme }) => theme.colors.gray};
`

export const Text = styled.p`
    ${tw`uppercase text-sm font-bold`}
    color: ${({ theme }) => theme.colors.primary};
`
