import axios from 'axios'
import { USER_SUBMITED, USER_LOADING, FETCH_USER, FETCH_GUIDE, SUB_GUIDE, ADD_GUIDE, DELETE_GUIDE } from './types'

export const userSubmited = () => async dispatch => {    
    dispatch({type : USER_SUBMITED, login: { submitted: true }});
}

export const userLoading = () => async dispatch => {    
    dispatch({type : USER_LOADING, login: { loading : true }});
}

export const login = (user, history) => async dispatch => {     
    const res = await axios.post('/api/login', user)
    
    if(res.data && res.data.username)
        history.push('/guide');
    dispatch({type : FETCH_USER, login: res.data});    
}

export const fetchGuide = () => async dispatch => {     
    const res = await axios.get('/api/guide')
    dispatch({type : FETCH_GUIDE, guide: res.data});
}

export const selectGuide = (id) => dispatch => {
    dispatch({type : SUB_GUIDE, selected_guide_id: id})
}

export const addGuide = (guide) => async dispatch => {     
    const res = await axios.post('/api/guide', guide)
    dispatch({type : ADD_GUIDE, guide: res.data});
}

export const deleteGuide = (guideId) => async dispatch => { 
    const res = await axios.delete('/api/guide/'+guideId)
    dispatch({type : DELETE_GUIDE, guide: res.data});
}
    