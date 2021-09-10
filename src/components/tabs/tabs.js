import Button from '../button/button';
import { ButtonType, TabType } from '../../constsnts/constants';
import './tabs.scss';
import { useState } from 'react';
import Characteristics from '../characteristics/characteristics';
import Feedback from '../feedback/feedback';
import Contacts from '../contacts/contacts';

function Tabs() {
    const [tab, switchTab] = useState(TabType.CHARACTERISTICS);
    return (
        <div className="content tabs">
            <div className="tabs__wrapper">
                <Button
                    label="Характеристики"
                    type={
                        tab === TabType.CHARACTERISTICS
                            ? ButtonType.ACTIVE_TAB
                            : ButtonType.TABS
                    }
                    onClickEvent={() => {
                        switchTab(TabType.CHARACTERISTICS);
                    }}
                />
                <Button
                    label="Отзывы"
                    type={
                        tab === TabType.FEEDBACK
                            ? ButtonType.ACTIVE_TAB
                            : ButtonType.TABS
                    }
                    onClickEvent={() => {
                        switchTab(TabType.FEEDBACK);
                    }}
                />
                <Button
                    label="Контакты"
                    type={
                        tab === TabType.CONTACTS
                            ? ButtonType.ACTIVE_TAB
                            : ButtonType.TABS
                    }
                    onClickEvent={() => {
                        switchTab(TabType.CONTACTS);
                    }}
                />
            </div>
            {tab === TabType.CHARACTERISTICS && <Characteristics />}

            {tab === TabType.FEEDBACK && <Feedback />}
            {tab === TabType.CONTACTS && <Contacts />}
        </div>
    );
}

export default Tabs;
