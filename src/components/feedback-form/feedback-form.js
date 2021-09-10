import './feedback-form.scss';
import Button from '../button/button';
import Input from '../input/input';
import StarRating from '../star-rating/star-rating';
import Textarea from '../textarea/textarea';
import { addComments } from '../../services/comments.service';
import { useState } from 'react';
import { FeedbackFormType } from '../../types/types';

function FeedbackForm({ onCloseDialogEvent }) {
    const [errorName, setNameError] = useState(false);
    const [errorComment, setCommentError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const data = new FormData(e.target);

        setNameError(false);
        setCommentError(false);

        if (!data.get('name') || !data.get('comment')) {
            if (!data.get('name')) {
                setNameError(true);
            }

            if (!data.get('comment')) {
                setCommentError(true);
            }

            return;
        }

        let object = {};

        data.forEach(function (value, key) {
            if (value) {
                object[key] = value;
                object.date = new Date();
            }
        });

        addComments(object);
        onCloseDialogEvent();
    };

    return (
        <form className="feedback__form" onSubmit={handleSubmit}>
            {(errorComment || errorName) && (
                <span className="error-message">
                    Пожалуйста, заполните поле
                </span>
            )}
            <div className="feedback__form-wrapper">
                <div className="feedback__form-column">
                    <div className="feedback__form-row">
                        <Input
                            name="name"
                            label="Имя"
                            required={true}
                            error={errorName}
                        />
                    </div>
                    <div className="feedback__form-row">
                        <Input name="dignity" label="Достоинства" />
                    </div>
                    <div className="feedback__form-row">
                        <Input name="disadvantages" label="Недостатки" />
                    </div>
                </div>
                <div className="feedback__form-column feedback__form-column--reverse">
                    <div className="feedback__form-row feedback__form-row--stars">
                        <span className="feedback__form-stars">
                            Оцените товар:{' '}
                        </span>
                        <StarRating />
                    </div>
                    <div className="feedback__form-row">
                        <Textarea
                            name="comment"
                            label="Комментарий"
                            required={true}
                            error={errorComment}
                        />
                    </div>
                </div>
            </div>
            <div className="feedback__submit-button">
                <Button label="Оставить отзыв" />
            </div>
        </form>
    );
}

FeedbackForm.propTypes = { onCloseDialogEvent: FeedbackFormType };
export default FeedbackForm;
