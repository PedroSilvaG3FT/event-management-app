import styled from 'styled-components'
import tw from 'twin.macro'

export const AppTitle = styled.p`
    ${tw`w-full uppercase flex justify-between items-center font-bold tracking-widest`}
    color: ${({ theme }) => theme.colors.primary};
`
