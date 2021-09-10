import './textarea.scss';
import { InputType } from '../../types/types';

function Textarea({ name, label, required, error }) {
    return (
        <div
            className={`textarea-wrapper ${
                required ? 'textarea--required' : ''
            }`}
        >
            <textarea
                className={`textarea ${error ? 'textarea--error' : ''}`}
                name={name}
                placeholder={label}
            />
        </div>
    );
}

Textarea.propType = { InputType };
export default Textarea;
