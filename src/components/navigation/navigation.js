import '../../visually-hidden/visually-hidden.scss'
import { uniqueId } from '../../utils/utils'
import './navigation.scss'

const navigation = [
    {
        text: 'Автомобили',
    },
    {
        text: 'Контакты',
    },
    {
        text: 'Услуги',
    },
    {
        text: 'Вакансии',
    },
]

function Navigation() {
    return (
        <nav className="nav nav--opened">
            <input
                id="nav-toggle"
                className="visually-hidden nav-toggle"
                type="checkbox"
            />
            <label htmlFor="nav-toggle" className="nav__menu-wrapper">
                <span className="nav__menu">Меню</span>
            </label>

            <ul className="nav__list">
                {navigation.map((item) => (
                    <li key={uniqueId()} className="nav__item">
                        <a
                            className="nav__list-link"
                            aria-label={item.text}
                            href="/"
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
