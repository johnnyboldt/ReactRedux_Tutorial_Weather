import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    if (action.error) {
        alert('City not found! Check city spelling.');
        return state;
      }  

    switch(action.type)
    {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data ]); //We never manipulate old state with something like state.push, we create new state
            return [action.payload.data, ...state]; // [city, city, city]
    }
    return state;
}

