import './contacts.scss'

function Contacts() {
    return (
        <section className="content contacts">
            <div className="contacts__wrapper">
                <div className="contacts__display">
                    <p className="contacts__text contacts__text--address">
                        Адрес
                    </p>
                    <p className="contacts__info"> Санкт-Петербург,</p>
                    <p className="contacts__info">
                        набережная реки Карповки, дом 5
                    </p>
                </div>
                <div className="contacts__display contacts__display--hidden">
                    <p className="contacts__text">Режим работы</p>
                    <p className="contacts__info">
                        Ежедневно, с 10:00 до 21:00
                    </p>
                </div>
                <div className="contacts__display">
                    <p className="contacts__text">Телефон</p>
                    <a
                        aria-label="Наш номер телефона 8 (800) 333-55-99"
                        className="contacts__tel"
                        href="tel:8 (800) 333-55-99"
                    >
                        8 (800) 333-55-99
                    </a>
                </div>
                <div className="contacts__display contacts__display--hidden">
                    <p className="contacts__text">E-mail</p>
                    <a
                        aria-label="Наша почта info@avto-moto.ru"
                        className="contacts__email"
                        href="mailto:info@avto-moto.ru"
                    >
                        info@avto-moto.ru
                    </a>
                </div>
            </div>
            <div className="contacts__map">
                <iframe
                    class="contacts__iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8301744005817!2d30.314303316007358!3d59.96814048188689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1630862547786!5m2!1sru!2sru"
                    allowFullScreen=""
                    loading="lazy"
                    title="map"
                ></iframe>
            </div>
        </section>
    )
}

export default Contacts
