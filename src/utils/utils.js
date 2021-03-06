import { Rating } from '../constsnts/constants';
import { formatDistanceToNow } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const getRating = (index) => Rating[Object.keys(Rating)[index - 1]];

export const getTimeAgo = (date) =>
    formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru });
