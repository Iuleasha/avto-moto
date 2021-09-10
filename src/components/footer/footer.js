import './footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <ul className="content footer__wrapper">
                <li className="footer-item ">
                    <a
                        className="footer__link"
                        aria-label="Корпоративным клиентам"
                        href="/"
                    >
                        Корпоративным клиентам
                    </a>
                </li>
                <li className="footer__item ">
                    <a className="footer__link" aria-label="Клиентам" href="/">
                        Клиентам
                    </a>
                </li>
                <li className="footer__item ">
                    <a
                        className="footer__link"
                        aria-label="Аренда авто"
                        href="/"
                    >
                        Аренда авто
                    </a>
                </li>
                <li className="footer__item ">
                    <a className="footer__link" aria-label="Каршеринг" href="/">
                        Каршеринг
                    </a>
                </li>
                <li className="footer__item ">
                    <a
                        className="footer__link"
                        aria-label="Как продать авто"
                        href="/"
                    >
                        Как продать авто
                    </a>
                </li>
                <li className="footer__item ">
                    <a className="footer__link" aria-label="Trade-in" href="/">
                        Trade-in
                    </a>
                </li>
                <li className="footer__item">
                    <a
                        className="footer__link"
                        aria-label="Test drive"
                        href="/"
                    >
                        Test drive
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
