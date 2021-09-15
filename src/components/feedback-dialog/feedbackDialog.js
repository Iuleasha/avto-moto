import './feedbackDialog.scss';
import FeedbackForm from '../feedback-form/feedback-form';
import { FeedbackDialogType } from '../../types/types';
import { useCallback, useEffect, useRef } from 'react';

function FeedbackDialog({ onCloseEvent }) {
    const dialogEl = useRef(null);

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

    const onSetAutoFocusEvent = useCallback(() => {
        dialogEl.current.querySelector('input').focus();
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', onCloseDialogEvent, false);

        return () => {
            document.removeEventListener('keydown', onCloseDialogEvent, false);
        };
    }, [onCloseDialogEvent]);

    return (
        <dialog
            ref={dialogEl}
            className="dialog__overlay"
            onClick={onCloseDialogEvent}
        >
            <div className="dialog__content">
                <h3 className="dialog__title">Оставить отзыв</h3>

                <FeedbackForm onCloseDialogEvent={onCloseEvent} />

                <button
                    className="dialog__close-button"
                    aria-label="Закрыть"
                    onClick={onCloseEvent}
                    onBlur={onSetAutoFocusEvent}
                />
            </div>
        </dialog>
    );
}

FeedbackDialog.propTypes = { onCloseEvent: FeedbackDialogType };
export default FeedbackDialog;
