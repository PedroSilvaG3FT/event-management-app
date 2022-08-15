import styled from 'styled-components'
import tw from 'twin.macro'

interface ContainerProps {
    imageURL?: string
}

export const Container = styled.label<ContainerProps>`
    ${tw`w-20 h-20 flex items-center justify-center rounded-full`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    background-image: ${({ imageURL }) => `url(${imageURL})`};
    background-size: cover;
`

export const Input = styled.input`
    ${tw`hidden`}
`
