import Icons from './description-icons/icons';
import './description.scss';
import Button from '../button/button';
import { ButtonType } from '../../constsnts/constants';

function Description() {
    return (
        <div className="description">
            <h2 className="description__title">Марпех 11</h2>
            <div className="description__icons">
                <Icons />
            </div>
            <div className="description__price">
                <span className="description__actual-price">2 300 000 ₽</span>
                <span className="description__old-price">2 400 000 ₽</span>
            </div>
            <div className="description__buttons">
                <div className="description__primary">
                    <Button label="Оставить заявку" />
                </div>
                <Button
                    label="В кредит от 11 000 ₽"
                    type={ButtonType.OUTLINE}
                />
            </div>
        </div>
    );
}

export default Description;
