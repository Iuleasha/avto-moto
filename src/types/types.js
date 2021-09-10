import PropTypes, { string } from 'prop-types'

export const ButtonTypes = PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClickEvent: PropTypes.func.isRequired,
    type: string.isRequired,
})

export const FeedbackDialogType = PropTypes.func.isRequired
export const FeedbackFormType = PropTypes.func.isRequired

export const InputType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.PropTypes.bool,
    error: string.isRequired,
})
export const ArrowType = PropTypes.func.isRequired
export const DisableArrowType = PropTypes.PropTypes.bool
