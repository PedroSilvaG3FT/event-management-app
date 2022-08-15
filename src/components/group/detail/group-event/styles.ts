import { AppTitle } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`mt-4`}
`

export const Title = styled(AppTitle)``

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
