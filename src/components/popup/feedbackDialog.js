import './feedbackDialog.scss'
import FeedbackForm from '../feedback-form/feedback-form'

function FeedbackDialog({ clickHandler }) {
    return (
        <div className="dialog__overlay">
            <div className="dialog__content">
                <button
                    className="dialog__close-button"
                    aria-label="Закрыть"
                    onClick={clickHandler}
                />

                <h3 className="dialog__title">Оставить отзыв</h3>

                <FeedbackForm closeDialog={clickHandler} />
            </div>
        </div>
    )
}

export default FeedbackDialog
