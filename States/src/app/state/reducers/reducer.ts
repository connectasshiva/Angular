import { ActionReducer, Action } from '@ngrx/store';
import { State, initialState } from 'app/state/state/state';
import { INCREMENT, DECREMENT } from 'app/state/actions/action';
export const mainReducer: ActionReducer<State> = (state = initialState, action: Action) => {

    console.log('Action came in ' + action.type);

    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }

        case DECREMENT:
            return {
                counter: state.counter - 1
            }

        default:
            return state;
    }


};