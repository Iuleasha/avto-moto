import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import './header.scss';

function Header() {
    return (
        <header className="page__header">
            <div className="content page__header-wrapper">
                <Logo/>

                <Navigation/>
            </div>
        </header>
    );
}

export default Header;
