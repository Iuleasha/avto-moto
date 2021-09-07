import Button from '../button/button'
import React, { useEffect, useMemo, useState } from 'react'
import { buttonTypes, RATING_STARS } from '../../constsnts/constants'
import './feedback.scss'
import { getRating, getTimeAgo } from '../../utils/utils'
import FeedbackDialog from '../popup/feedbackDialog'
import { getComments } from '../../services/comments.service'

function Feedback() {
    const comments = useMemo(() => getComments(), [])
    const [popupStatus, switchPopup] = useState(false)

    useEffect(() => {
        if (popupStatus) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [popupStatus])

    return (
        <div className="feedback">
            <div className="feedback__button">
                <Button
                    label="оставить отзыв"
                    type={buttonTypes.Outline}
                    clickHandler={() => {
                        switchPopup(true)
                    }}
                />
            </div>
            {comments.map((item) => (
                <div className="feedback__item">
                    <p className="feedback__name">{item.name}</p>
                    {item.dignity && (
                        <>
                            <h5 className="feedback__title feedback__title--plus">
                                Достоинства
                            </h5>
                            <p className="feedback__value feedback__value--space">
                                {item.dignity}
                            </p>
                        </>
                    )}
                    {item.disadvantages && (
                        <>
                            <h5 className="feedback__title feedback__title--minus">
                                Недостатки
                            </h5>
                            <p className="feedback__value feedback__value--space">
                                {item.disadvantages}
                            </p>
                        </>
                    )}
                    <h5 className="feedback__title">Комментарий</h5>
                    <p className="feedback__value">{item.comment}</p>
                    {item.rating && (
                        <div className="feedback__rating">
                            {RATING_STARS.map((ratingItem) => (
                                <span
                                    className={`feedback__rating-star ${
                                        String(ratingItem) === item.rating
                                            ? 'feedback__rating-star--active'
                                            : ''
                                    }  `}
                                >
                                    ★
                                </span>
                            ))}
                            <span className="feedback__status">
                                {getRating(item.rating)}
                            </span>
                        </div>
                    )}

                    <div className="feedback__time">
                        <span className="feedback__date">
                            {getTimeAgo(item.date)}
                        </span>
                        <span className="feedback__status feedback__status--answer">
                            Ответить
                        </span>
                    </div>
                </div>
            ))}
            {popupStatus && (
                <FeedbackDialog clickHandler={() => switchPopup(false)} />
            )}
        </div>
    )
}

export default Feedback
