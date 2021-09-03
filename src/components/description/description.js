import Icons from './description-icons/icons';
import './description.scss';

function Description() {
    return (
        <div className="description">
            <h2 className="description__title">Марпех 11</h2>
            <div className="description__icons">
                <Icons/>
            </div>
            <div className="description__price">
                <span className="description__actual-price">2 300 000 ₽</span>
                <span className="description__cancel-price">2 400 000 ₽</span>
            </div>
            <button className="button description__application-button">оставить заявку</button>
            <button className="button description__credit-button">в кредит от 11 000 ₽</button>
        </div>
    );
}

export default Description;
