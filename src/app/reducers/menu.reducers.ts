import { Action } from '@ngrx/store'
import { Menu } from '../../models/movie.model';
import * as MenuActions from '../actions/menu.actions'


// Section 1
const initialState: Menu = {
    name: 'Theater',
    url:'/',
    visible: true
};

export function reducer(state: Menu[] = [initialState], action: MenuActions.Actions) {

    switch(action.type) {
        case MenuActions.ADD_MENU :
            return [...state, action.payload];
        case MenuActions.UPDATE_MENU :
            return [...state, action.payload];
        case MenuActions.RESET_MENU :
            return state = undefined;
        default:
            return state;
    }
}
