import { buttonTypes } from '../../constsnts/constants'
import './button.scss'

function Button({ label, clickHandler, type = buttonTypes.Primary }) {
    return (
        <button className={`button button--${type}`} onClick={clickHandler}>
            {label}
        </button>
    )
}

export default Button
