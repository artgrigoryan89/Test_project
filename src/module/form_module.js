import 'babel-polyfill';
import ls from 'local-storage';

import data from '../data';

export const GET_DATA = 'GET_DATA';
export const GET_SELECTED_PERIOD = 'GET_SELECTED_PERIOD';
export const SET_SELECTED_PERIOD = 'SET_SELECTED_PERIOD';
// ACTIONS

const initialState = {
    data: {},
    selectedPeriod: ''
}

export const getData = () => {
    return {
        type: GET_DATA,
        payload: data
    }
}

export const getSelectedPeriod = () => {
    if (ls.get('time')) {
        return {
            type: GET_SELECTED_PERIOD,
            payload: ls.get('time')
        }
    }
        return {
            type: GET_SELECTED_PERIOD,
            payload: 'all_time'
        }
}

export const setSelectedPeriod = (time) => {
    ls.set('time', time)
    return {
        type: SET_SELECTED_PERIOD,
        payload: time,
    }
}

//REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'GET_SELECTED_PERIOD':
            return {
                ...state,
                selectedPeriod: action.payload
            }
        case 'SET_SELECTED_PERIOD':
            return {
                ...state,
                selectedPeriod: action.payload
            }
        default:
            return {...state}
    }
}

