export const buttonTypes = {
    Primary: 'primary',
    Outline: 'outline',
    Tabs: 'tabs',
    ActiveTab: 'active',
}

export const tabsType = {
    Characteristics: 'characteristics',
    Feedback: 'feedback',
    Contacts: 'contacts',
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
