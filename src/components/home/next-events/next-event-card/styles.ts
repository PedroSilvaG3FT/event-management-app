import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    ${tw`px-3 py-4 mr-4 rounded-lg min-w-[80vw] flex items-center`}
    scroll-snap-align: center;
    background: ${({ theme }) => theme.colors.bgSecondary};

    &:last-of-type {
        ${tw`mr-0`}
    }
`

export const Content = styled.div`
    ${tw`h-full `}
`

export const Title = styled.b`
    ${tw`uppercase`}
`

export const Subtitle = styled.p`
    ${tw`text-sm uppercase`}
    color: ${({ theme }) => theme.colors.gray};
`

export const Badge = styled.span`
    ${tw`px-2 py-1 mr-2 h-full flex items-center justify-center font-extrabold text-[100%] rounded-md`}
    color: ${({ theme }) => theme.colors.bgSecondary};
    background: ${({ theme }) => theme.colors.primary};
`

export const Icon = styled.i`
    ${tw`p-0 ml-auto text-xl relative top-1 left-3`}
    color: ${({ theme }) => theme.colors.primary};
`
