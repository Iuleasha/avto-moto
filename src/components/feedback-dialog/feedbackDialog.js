import './feedbackDialog.scss';
import FeedbackForm from '../feedback-form/feedback-form';
import { FeedbackDialogType } from '../../types/types';
import { useCallback, useEffect } from 'react';

function FeedbackDialog({ onCloseEvent }) {
    const onCloseDialogEvent = useCallback(
        (evt) => {
            if (
                evt.keyCode === 27 ||
                evt.target.className.includes('dialog__overlay')
            ) {
                onCloseEvent();
            }
        },
        [onCloseEvent]
    );

    useEffect(() => {
        document.addEventListener('keydown', onCloseDialogEvent, false);

        return () => {
            document.removeEventListener('keydown', onCloseDialogEvent, false);
        };
    }, [onCloseDialogEvent]);

    return (
        <div className="dialog__overlay" onClick={onCloseDialogEvent}>
            <div className="dialog__content">
                <button
                    className="dialog__close-button"
                    aria-label="Закрыть"
                    onClick={onCloseEvent}
                />

                <h3 className="dialog__title">Оставить отзыв</h3>

                <FeedbackForm onCloseDialogEvent={onCloseEvent} />
            </div>
        </div>
    );
}

FeedbackDialog.propTypes = { onCloseEvent: FeedbackDialogType };
export default FeedbackDialog;
