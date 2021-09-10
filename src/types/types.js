import PropTypes from 'prop-types';

export const ButtonTypes = PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClickEvent: PropTypes.func,
    type: PropTypes.string,
});

export const FeedbackDialogType = PropTypes.func.isRequired;
export const FeedbackFormType = PropTypes.func.isRequired;

export const InputType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    error: PropTypes.string,
});
export const ArrowType = PropTypes.func.isRequired;
export const DisableArrowType = PropTypes.bool;
