export let feedbackArray = [
    {
        name: 'Борис Иванов',
        dignity: 'мощность, внешний вид',
        disadvantages: 'Слабые тормозные колодки (пришлось заменить)',
        comment:
            'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
        rating: 2,
        date: '2021-06-19T08:07:25.804Z',
    },
    {
        name: 'Марсель Исмагилов',
        dignity: 'Cтиль, комфорт, управляемость',
        disadvantages: 'Дорогой ремонт и обслуживание',
        comment:
            'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
        rating: 4,
        date: '2021-06-18T10:20:25.804Z',
    },
]

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
