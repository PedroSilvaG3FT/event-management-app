import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    ${tw`rounded-xl py-4 px-3 flex justify-between`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Image = styled.img`
    ${tw`w-14 h-14 mr-4 rounded-full`}
`

export const Content = styled.div`
    ${tw`flex`}
`

export const Article = styled.article`
    ${tw`flex flex-col justify-center`}
`

export const Title = styled.p`
    ${tw`uppercase font-semibold`}
`

export const Text = styled.p`
    ${tw`text-sm`}
`

export const Button = styled(AppButton)`
    ${tw`rounded-xl flex items-center justify-between`}

    > svg {
        ${tw`font-bold`}
    }
`
