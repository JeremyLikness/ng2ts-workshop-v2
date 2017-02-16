import { State } from './state';
import { IColorChangeAction } from './actions';

export const colorReducer = (state: State, action: IColorChangeAction) => {
    if (action && ['red', 'green', 'blue'].indexOf(action.type) !== -1) {
        let newAction = {
            red: state.red,
            blue: state.blue,
            green: state.green
        };
        newAction[action.type] = action.value;
        return newAction;
    }
    return state || {
        red: 64,
        green: 128,
        blue: 192
    };
}
