import './footer.scss'

function Footer() {
    return (
        <footer className="page__footer">
            <ul className="content page__footer-wrapper">
                <li className="page__footer-item ">
                    <a
                        className="page__footer-link"
                        aria-label="Корпоративным клиентам"
                        href="/"
                    >
                        Корпоративным клиентам
                    </a>
                </li>
                <li className="page__footer-item ">
                    <a
                        className="page__footer-link"
                        aria-label="Клиентам"
                        href="/"
                    >
                        Клиентам
                    </a>
                </li>
                <li className="page__footer-item ">
                    <a
                        className="page__footer-link"
                        aria-label="Аренда авто"
                        href="/"
                    >
                        Аренда авто
                    </a>
                </li>
                <li className="page__footer-item ">
                    <a
                        className="page__footer-link"
                        aria-label="Каршеринг"
                        href="/"
                    >
                        Каршеринг
                    </a>
                </li>
                <li className="page__footer-item ">
                    <a
                        className="page__footer-link"
                        aria-label="Как продать авто"
                        href="/"
                    >
                        Как продать авто
                    </a>
                </li>
                <li className="page__footer-item ">
                    <a
                        className="page__footer-link"
                        aria-label="Trade-in"
                        href="/"
                    >
                        Trade-in
                    </a>
                </li>
                <li className="page__footer-item ">
                    <a
                        className="page__footer-link"
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
