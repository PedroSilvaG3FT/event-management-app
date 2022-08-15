export const startsWith = (value: string, initial: string): boolean => {
    if (!value || !initial) return false
    return value.toLowerCase().startsWith(initial.toLowerCase())
}
