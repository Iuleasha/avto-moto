import { ButtonType } from '../../constsnts/constants';
import './button.scss';
import { ButtonTypes } from '../../types/types';

function Button({ label, onClickEvent, type = ButtonType.PRIMARY }) {
    return (
        <button className={`button button--${type}`} onClick={onClickEvent}>
            {label}
        </button>
    );
}

Button.propTypes = { ButtonTypes };
export default Button;
