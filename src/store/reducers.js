import {combineReducers} from 'redux'

export const signedIn = (state = {}, { type, payload, }) => {
  switch (type) {
    case 'app/getRoutes':
      return state
    default:
      return state
  }
}


const rootReducer = combineReducers({
  signedIn,
});

export default rootReducer