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
    if (!feedbackArray.length) {
        feedbackArray = JSON.parse(window.localStorage.getItem('feedbackArray'))
    }

    return feedbackArray
}
