import styled from 'styled-components'
import tw from 'twin.macro'

export const Backdrop = styled.section`
    ${tw`fixed w-full h-full top-0 left-0 flex flex-col justify-center items-center z-[90]`}
    background: #0f1a26cc;
`

export const Label = styled.label`
    ${tw`font-bold `}
    color: ${({ theme }) => theme.colors.text};
`
