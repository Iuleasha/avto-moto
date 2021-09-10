import icon1 from './img/icon.svg'
import icon2 from './img/icon (1).svg'
import icon3 from './img/icon (2).svg'
import icon4 from './img/icon (3).svg'
import './icons.scss'

const icons = [
    {
        icon: icon1,
        text: 'бензин',
    },
    {
        icon: icon2,
        text: 'механика',
    },
    {
        icon: icon3,
        text: '100 л.с.',
    },
    {
        icon: icon4,
        text: '1.4 л',
    },
]

function Icons() {
    return (
        <>
            <ul className="icons">
                {icons.map((item) => (
                    <li key={item.text} className="icons__item">
                        <div className="icons__wrapper">
                            <img
                                src={item.icon}
                                className="icons__image"
                                alt={item.text}
                            />
                        </div>
                        <span className="icons__text"> {item.text}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Icons
