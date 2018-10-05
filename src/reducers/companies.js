import {
  RECEIVE_COMPANIES,
  ADD_COMPANY,
} from '../actions/actionTypes'


const companies = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_COMPANIES :
      return {
        ...state,
        ...action.companies
      }
    case ADD_COMPANY:
      return {
        ...state,
        [action.company.id]: {
          ...action.company
        }
      }
    default :
      return state
  }
}

export default companies
