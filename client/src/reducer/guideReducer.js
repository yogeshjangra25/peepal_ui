import { FETCH_GUIDE, SUB_GUIDE, ADD_GUIDE, DELETE_GUIDE } from '../actions/types'

export default function(state = null, action) {
    //console.log('In guideReducer :'+JSON.stringify(state)+"\n"+JSON.stringify(action))
    switch(action.type) {
        case FETCH_GUIDE :
            return {guide : action.guide || false, curr_guide_id : "root"}
        case SUB_GUIDE :
            return Object.assign({}, state, {  curr_guide_id: action.selected_guide_id  })
        case ADD_GUIDE :
            state.guide.push(action.guide)
            return Object.assign({}, state)
        case DELETE_GUIDE :
            const atIndex = state.guide.findIndex(a => a.id === action.guide.id)
            atIndex !== -1 && state.guide.splice(atIndex , 1)
            return Object.assign({}, state)
        default :
            return state
    }
}