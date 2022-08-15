import React, { useState } from 'react'
import { startsWith } from '@/helpers/string.helper'
import { Container, Input, Item, Group } from './styles'

interface AutocompleteProps {
    ref?: any
    items: any[]
    value?: string
    labelKey: string
    valueKey?: string
    onSelect: (item: any) => void
}

export type RefProps = {
    setCustomValue: (value: string) => void
    setInitialState: (value: string | number) => void
}

const AppAutocomplete: React.ForwardRefRenderFunction<
    RefProps,
    AutocompleteProps
> = (props, ref) => {
    React.useImperativeHandle(ref, () => ({ setCustomValue, setInitialState }))

    const { items, labelKey, valueKey, onSelect } = props
    const [searchTerm, setSearchTerm] = useState('')
    const [showGroup, setShowGroup] = useState(false)
    const [isFocus, setIsFocus] = useState(false)

    const setCustomValue = (value: string) => {
        console.log(setCustomValue)
        setSearchTerm(value)
    }

    const setInitialState = (value: string | number) => {
        if (!valueKey || !items.length) return

        const currentItem = items.find(item => item[valueKey] == value)
        if (currentItem) setSearchTerm(currentItem[labelKey])
    }

    const filteredItems = items.filter(item => {
        if (!valueKey) return

        return startsWith(item[valueKey], searchTerm)
    })

    const onSearchTermChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget

        setSearchTerm(value)
        setShowGroup(!!value)
    }

    const handleSelect = (item: any) => {
        setSearchTerm(item[labelKey])
        onSelect(item)
        setShowGroup(false)
    }

    const onBlur = () => {
        setTimeout(() => {
            setIsFocus(false)
            setShowGroup(false)
        }, 250)
    }

    return (
        <Container>
            <Input
                value={searchTerm}
                onChange={onSearchTermChange}
                onFocus={() => setIsFocus(true)}
                onBlur={onBlur}
            />
            <Group style={{ display: showGroup || isFocus ? 'flex' : 'none' }}>
                {filteredItems.map((item, index) => (
                    <Item
                        id="option"
                        key={index}
                        onClick={() => handleSelect(item)}
                    >
                        {item[labelKey]}
                    </Item>
                ))}
            </Group>
        </Container>
    )
}

const AutoCompleteComponent = React.forwardRef(AppAutocomplete)

export default AutoCompleteComponent
export type AutocompleteHandle = React.ElementRef<typeof AutoCompleteComponent>
