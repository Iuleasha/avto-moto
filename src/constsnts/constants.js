export const ButtonType = {
    PRIMARY: 'primary',
    OUTLINE: 'outline',
    TABS: 'tabs',
    ACTIVE_TAB: 'active',
}

export const TabType = {
    CHARACTERISTICS: 'characteristics',
    FEEDBACK: 'feedback',
    CONTACTS: 'contacts',
}
export const STARS_LENGTH = 5

export const RATING_STARS = [...Array(STARS_LENGTH).keys()].map((i) => i + 1)

export const Rating = {
    BAD: `Не стоит смотреть`,
    NORMAL: `Не однозначно`,
    GOOD: `Советует`,
    VERY_GOOD: `Хороший`,
    AWESOME: `Великолепный`,
}
