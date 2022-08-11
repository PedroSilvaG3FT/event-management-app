import React from 'react'
import AppHead from '@/components/common/app-head'
import { Container } from '@/styles/pages/wellcome'

const Wellcome: React.FC = () => {
    return (
        <>
            <AppHead title="Hello World" />
            <Container>Hello World</Container>
        </>
    )
}

export default Wellcome
