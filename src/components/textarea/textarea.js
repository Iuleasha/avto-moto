import './textarea.scss'

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
    )
}

export default Textarea
