import {FETCH_SPELL, CLOSE_SPELL} from './types';

export const fetchSpell = (qry) => dispatch => {
        fetch(`https://www.dnd5eapi.co/api/spells/${qry}/`)
        .then (res => res.json())
        .then(spell => dispatch({
            type: FETCH_SPELL,
            payload: spell
        }));
}

export const closeSpell = (name) => {
    return {
        type: CLOSE_SPELL,
        payload: name
    }
}
