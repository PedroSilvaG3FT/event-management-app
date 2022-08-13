import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    ${tw`px-3 py-4 rounded-lg min-w-[35vw] flex flex-col items-center`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Image = styled.img`
    ${tw`w-16 h-16 rounded-full`}
`

export const Text = styled.p`
    ${tw`mt-4 font-bold text-center uppercase text-sm`}
`

export const TitleBadge = styled.span`
    ${tw`w-16 h-16 pb-1 font-bold text-[1.4rem] flex items-center justify-center rounded-full`}
    color: ${({ theme }) => theme.colors.bgSecondary};
    background: ${({ theme }) => theme.colors.primary};
`
