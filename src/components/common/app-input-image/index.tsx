import React from 'react'
import { Container, Input } from './styles'
import { BsCameraFill } from 'react-icons/bs'

interface AppInputImageProps {
    imageURL?: string
}

const AppInputImage: React.FC<AppInputImageProps> = props => {
    const { imageURL } = props

    return (
        <>
            <Container htmlFor="file" imageURL={imageURL}>
                {imageURL ? <></> : <BsCameraFill />}
            </Container>

            <Input type="file" name="arquivo" id="file" />
        </>
    )
}

export default AppInputImage
