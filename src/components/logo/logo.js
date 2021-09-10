import './logo.scss'
import logo from './img/logo.svg'

function Logo() {
    return (
        <a className="logo" href="/">
            <img
                src={logo}
                className="logo__style"
                width="135"
                height="55"
                alt="Логотип"
            />
        </a>
    )
}

export default Logo
