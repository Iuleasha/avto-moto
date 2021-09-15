import './input.scss';
import { InputType } from '../../types/types';

function Input({ name, label, required, autoFocus = false, error }) {
    return (
        <div className={`input-wrapper ${required ? 'input--required' : ''}`}>
            <input
                className={`input ${error ? 'input--error' : ''}`}
                type="text"
                placeholder={label}
                name={name}
                autoFocus={autoFocus}
                id={name}
            />
            <label className="visually-hidden" htmlFor={name}>
                {label}
            </label>
        </div>
    );
}

Input.propType = { InputType };
export default Input;
