import './characteristics.scss';

function Characteristics() {
    return (
        <div className="characteristics">
            <div className="characteristics__item">
                <span className="characteristics__title">Трансмиссия</span>
                <span className="characteristics__text">Роботизированная</span>
            </div>
            <div className="characteristics__item">
                <span className="characteristics__title">
                    Мощность двигателя, л.с.
                </span>
                <span className="characteristics__text">249</span>
            </div>
            <div className="characteristics__item">
                <span className="characteristics__title">Тип двигателя</span>
                <span className="characteristics__text">Бензиновый</span>
            </div>
            <div className="characteristics__item">
                <span className="characteristics__title">Привод</span>
                <span className="characteristics__text">Полный</span>
            </div>
            <div className="characteristics__item">
                <span className="characteristics__title">
                    Объем двигателя, л
                </span>
                <span className="characteristics__text">2.4</span>
            </div>
            <div className="characteristics__item">
                <span className="characteristics__title">
                    Макс. крутящий момент, Нм / об/мин
                </span>
                <span className="characteristics__text">370/4500</span>
            </div>
            <div className="characteristics__item">
                <span className="characteristics__title">
                    Количество цилиндров
                </span>
                <span className="characteristics__text">4</span>
            </div>
        </div>
    );
}

export default Characteristics;
