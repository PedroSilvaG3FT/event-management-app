import React, { useRef, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { Container, Title, Row, Content, Button } from './styles'
import AppCardTitle from '@/components/common/app-card-title'
import AppAutocomplete, {
    AutocompleteHandle
} from '@/components/common/app-autocomplete'
interface MemberGroupRegisterProps {
    members: any[]
    onAddMember?: (member: any) => void
}

const MemberGroupRegister: React.FC<MemberGroupRegisterProps> = props => {
    const { members, onAddMember } = props
    const autoComplete = useRef<AutocompleteHandle>(null)

    const [member, setMember] = useState(null)
    const [memberList, setMemberList] = useState([
        { id: 1, name: 'Pedro' },
        { id: 2, name: 'Henrique' },
        { id: 3, name: 'Souza' },
        { id: 4, name: 'Oliveira' },
        { id: 5, name: 'Silva' }
    ])

    const onSelect = (member: any) => {
        setMember(member)
    }

    const handleAddMember = () => {
        if (!member || !onAddMember) return

        onAddMember(member)
        setMember(null)
        autoComplete.current?.setCustomValue('')
    }

    return (
        <Container>
            <Title>Membros</Title>

            {onAddMember && (
                <Row>
                    <AppAutocomplete
                        labelKey="name"
                        valueKey="name"
                        ref={autoComplete}
                        items={memberList}
                        onSelect={onSelect}
                    />

                    <Button onClick={handleAddMember}>
                        <GrAdd />
                    </Button>
                </Row>
            )}

            <Content>
                {members.map((item, index) => (
                    <AppCardTitle
                        key={index}
                        name={item.name}
                        imageURL={item.imageURL}
                    />
                ))}
            </Content>
        </Container>
    )
}

export default MemberGroupRegister
