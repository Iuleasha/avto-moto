import './star-rating.scss'
import { RATING_STARS } from '../../constsnts/constants'
import React, { useMemo } from 'react'

function StarRating() {
    const stars = useMemo(() => [...RATING_STARS].reverse(), [RATING_STARS])

    return (
        <div className="star-rating">
            {stars.map((item) => (
                <React.Fragment key={`star-rating-${item}`}>
                    <input
                        className="star-rating__input"
                        id={`star-${item}`}
                        type="radio"
                        name="rating"
                        defaultValue={item}
                    />
                    <label
                        className="star-rating__label"
                        htmlFor={`star-${item}`}
                    >
                        Rating {item}
                    </label>
                </React.Fragment>
            ))}
        </div>
    )
}

export default StarRating
