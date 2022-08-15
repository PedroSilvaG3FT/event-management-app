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
    ${tw`mt-8 grid gap-6 grid-cols-2`}
`

export const Row = styled.div`
    ${tw`flex items-center justify-between`}

    > div {
        ${tw`w-4/5 mb-0 mr-4`}
    }
`

export const Button = styled(AppButton)`
    ${tw`w-1/5`}
`
