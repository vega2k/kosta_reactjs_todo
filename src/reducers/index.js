import { FETCH_TODOS } from '../actions';

//state 객체
const initialState = {
    todos: [
        {
            id: 0,
            text: '',
            checked: false,
        }
    ]
}

//Reducer 함수
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return Object.assign({}, state, { todos: action.payload });
        default:
            return state;
    }
}