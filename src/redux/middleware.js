import { CREATE_POST } from './types';
import { showAlert } from './actions';

const forbidden = ['funck', 'spam', 'php']

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter((word) => action.payload.title.includes(word))
                console.log(found)
                if (found.length) {
                    return dispatch(showAlert('Нельзя ругаться'))
                }
            }
            return next(action);
        }
    }
}
