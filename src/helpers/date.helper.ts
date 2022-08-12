import { ptBR } from 'date-fns/locale'

export const getMonthsLabel = () => {
    const monthLabels: string[] = []
    for (let i = 0; i < 12; i++) monthLabels.push(ptBR.localize?.month(i))

    return monthLabels
}
