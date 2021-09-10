import Logo from '../logo/logo'
import Navigation from '../navigation/navigation'
import './header.scss'

function Header() {
    return (
        <header className="header">
            <div className="content header-wrapper">
                <Logo />

                <Navigation />
            </div>
        </header>
    )
}

export default Header
