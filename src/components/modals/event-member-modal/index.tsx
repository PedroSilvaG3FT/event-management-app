import React from 'react'
import { Container } from './styles'
import AppModal from '@/components/common/app-modal'
import { AppModalInterface } from '@/interfaces/modal.interface'

interface EventMemberModalProps extends AppModalInterface {}

const EventMemberModal: React.FC<EventMemberModalProps> = props => {
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
            <Container>Adicionar Membros</Container>
        </AppModal>
    )
}

export default EventMemberModal
