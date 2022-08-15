import { AppButton, AppTitle } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`mt-8`}
`

export const Title = styled(AppTitle)`
    ${tw`my-8`}
`

export const Content = styled.article`
    > article {
        ${tw`mb-3`}

        &:last-of-type {
            ${tw`mb-0`}
        }
    }
`

export const Row = styled.div`
    ${tw`flex items-center justify-between mb-4`}

    > div {
        ${tw`w-4/5 mb-0 mr-4`}
    }
`

export const Button = styled(AppButton)`
    ${tw`w-1/5`}
`
