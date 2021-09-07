import './arrow.scss'

function Arrow({ handleClick, disabled }) {
    return (
        <div
            className={`slider__arrow ${
                disabled ? 'slider__arrow--disabled' : ''
            }`}
            onClick={handleClick}
        >
            <svg
                className="slider__svg"
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128"
                    stroke="#48494D"
                />
            </svg>
        </div>
    )
}

export default Arrow