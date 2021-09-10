import './feedbackDialog.scss';
import FeedbackForm from '../feedback-form/feedback-form';
import { FeedbackDialogType } from '../../types/types';

function FeedbackDialog({ onCloseEvent }) {
    return (
        <div className="dialog__overlay">
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
