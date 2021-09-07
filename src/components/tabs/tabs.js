import Button from '../button/button'
import { buttonTypes, tabsType } from '../../constsnts/constants'
import './tabs.scss'
import { useState } from 'react'
import Characteristics from '../characteristics/characteristics'
import Feedback from '../feedback/feedback'
import Contacts from '../contacts/contacts'

function Tabs() {
    const [tab, switchTab] = useState(tabsType.Characteristics)
    return (
        <div className="content tabs">
            <div className="tabs__wrapper">
                <Button
                    label="Характеристики"
                    type={
                        tab === tabsType.Characteristics
                            ? buttonTypes.ActiveTab
                            : buttonTypes.Tabs
                    }
                    clickHandler={() => {
                        switchTab(tabsType.Characteristics)
                    }}
                />
                <Button
                    label="Отзывы"
                    type={
                        tab === tabsType.Feedback
                            ? buttonTypes.ActiveTab
                            : buttonTypes.Tabs
                    }
                    clickHandler={() => {
                        switchTab(tabsType.Feedback)
                    }}
                />
                <Button
                    label="Контакты"
                    type={
                        tab === tabsType.Contacts
                            ? buttonTypes.ActiveTab
                            : buttonTypes.Tabs
                    }
                    clickHandler={() => {
                        switchTab(tabsType.Contacts)
                    }}
                />
            </div>
            {tab === tabsType.Characteristics && <Characteristics />}

            {tab === tabsType.Feedback && <Feedback />}
            {tab === tabsType.Contacts && <Contacts />}
        </div>
    )
}

export default Tabs
