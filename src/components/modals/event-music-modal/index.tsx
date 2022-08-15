import AppModal from '@/components/common/app-modal'
import { AppModalInterface } from '@/interfaces/modal.interface'
import React from 'react'
import { Container } from './styles'

interface EventMusicModalProps extends AppModalInterface {}

const EventMusicModal: React.FC<EventMusicModalProps> = props => {
    const { isOpen, onBackdropClick, onClose } = props

    return (
        <AppModal
            width="90vw"
            maxWidth={420}
            maxHeight={420}
            isOpen={isOpen}
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
        >
            <Container>Adicionar Musica</Container>
        </AppModal>
    )
}
export default EventMusicModal
