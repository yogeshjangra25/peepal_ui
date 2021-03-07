import { FETCH_USER, USER_LOADING } from '../actions/types'

export default function(state = null, action) {
    console.log('In authReducer :'+JSON.stringify(state)+"\n"+JSON.stringify(action))
    switch(action.type) {
        case USER_LOADING:
            return {...action.user || false}
        case FETCH_USER :  
            return Object.assign({}, state, {...action.user})    
        default :
            return state
    }
}