export default function(state={}, action) {
    switch(action.type){
        case 'GET_GALLERY':
            return {...state, gal:action.payload}
        case 'GET_SELECTED_GALLERY':
            return {...state, selected:action.payload}
        case 'CLEAR_SELECTED_GALLERY':
            return {...state, selected:action.payload}
        default:
            return state
    }
}



