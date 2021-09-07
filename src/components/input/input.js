import './input.scss'

function Input({ name, label, required, error }) {
    return (
        <div className={`input-wrapper ${required ? 'input--required' : ''}`}>
            <input
                className={`input ${error ? 'input--error' : ''}`}
                type="text"
                placeholder={label}
                name={name}
                id={name}
            />
            <label className="visually-hidden" htmlFor={name}>
                {label}
            </label>
        </div>
    )
}

export default Input
