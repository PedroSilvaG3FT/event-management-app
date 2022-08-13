import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    > article,
    > div {
        ${tw`w-full text-sm`}
    }

    .react-calendar {
        ${tw`rounded-xl`}
        background: ${({ theme }) => theme.colors.bgSecondary};
        border-color: ${({ theme }) => theme.colors.bgSecondary};
    }

    button:hover,
    button:focus,
    button:active {
        background: none !important;
    }

    /* #region header */
    .react-calendar__navigation__arrow,
    .react-calendar__navigation__label__labelText {
        ${tw`uppercase text-sm font-bold`}
        color: ${({ theme }) => theme.colors.primary};
    }

    .react-calendar__navigation__next2-button,
    .react-calendar__navigation__prev2-button {
        ${tw`hidden`}
    }
    /* #endregion header */

    /* #region days */
    .react-calendar__tile--now {
        background: none !important;
    }

    .react-calendar__month-view__weekdays__weekday > abbr {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
    }

    .react-calendar__tile--active {
        background: ${({ theme }) => theme.colors.bgSecondary} !important;
        border: 1px solid ${({ theme }) => theme.colors.primary} !important;
        ${tw`font-bold rounded-lg`}
    }

    .active-day {
        background: ${({ theme }) => theme.colors.primary} !important;
        ${tw`font-bold rounded-lg`}

        > abbr {
            color: ${({ theme }) => theme.colors.bgSecondary} !important;
        }
    }

    .react-calendar__month-view__days__day {
        border: 1px solid ${({ theme }) => theme.colors.bgSecondary};

        > abbr {
            color: ${({ theme }) => theme.colors.white};
        }
    }

    .react-calendar__month-view__days__day--weekend > abbr {
        color: ${({ theme }) => theme.colors.red};
    }

    .react-calendar__month-view__days__day--neighboringMonth > abbr {
        color: ${({ theme }) => theme.colors.gray};
    }
    /* #endregion days */

    /* #region month */
    .react-calendar__year-view__months__month > abbr {
        color: ${({ theme }) => theme.colors.primary};
    }
    .react-calendar__tile--hasActive {
        ${tw`rounded-lg`}
        background: ${({ theme }) => theme.colors.bgPrimary};
    }
    /* #endregion month */

    /* #region year */
    .react-calendar__decade-view__years__year,
    .react-calendar__century-view__decades__decade {
        color: ${({ theme }) => theme.colors.primary};
    }
    /* #endregion year */
`
