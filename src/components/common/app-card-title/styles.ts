import styled from 'styled-components'
import tw from 'twin.macro'

interface IContainerProps {
    row?: boolean
}
export const Container = styled.article<IContainerProps>`
    ${tw`rounded-lg min-w-[35vw] flex items-center`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};

    ${({ row }) => (row ? tw`p-2` : tw`px-3 py-4`)};

    > span,
    > img,
    > i {
        ${({ row }) => (row ? tw`w-12 h-12` : tw`w-16 h-16`)};
    }

    > p {
        ${({ row }) => (row ? tw`mt-0 ml-4` : tw`mt-4 `)};
    }
`

export const Icon = styled.i`
    ${tw`text-xl flex items-center justify-center rounded-full`}
    background: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.primary};
`

export const Image = styled.img`
    ${tw`rounded-full`}
`

export const Text = styled.p`
    ${tw`font-bold text-center uppercase text-sm`}
`

export const TitleBadge = styled.span`
    ${tw`pb-1 font-bold text-[1.4rem] flex items-center justify-center rounded-full`}
    color: ${({ theme }) => theme.colors.bgSecondary};
    background: ${({ theme }) => theme.colors.primary};
`
