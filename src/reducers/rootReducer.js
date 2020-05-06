import {FETCH_SPELL, CLOSE_SPELL} from '../actions/types';

const initialState = {
    spells: []
}

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_SPELL:
            return {
                spells: [...state.spells, action.payload]
            }
        case CLOSE_SPELL:
            return {
                spells: [...state.spells.filter(spell => spell.name !== action.payload)]
            }
        default:
            return state;
    }
}

export default rootReducer;