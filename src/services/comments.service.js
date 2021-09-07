export let feedbackArray = []

export function addComments(comments) {
    if (Array.isArray(comments)) {
        feedbackArray = [...comments, ...feedbackArray]
    } else {
        feedbackArray = [...[comments], ...feedbackArray]
    }

    window.localStorage.setItem('feedbackArray', JSON.stringify(feedbackArray))
}

export function getComments() {
    const localFeedbackArray = window.localStorage.getItem('feedbackArray')

    if (!feedbackArray.length && localFeedbackArray) {
        feedbackArray = JSON.parse(localFeedbackArray)
    }

    return feedbackArray
}
