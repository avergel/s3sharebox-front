
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import fileReducer from './reducers/fileReducer'

const reducers = combineReducers({
  user: userReducer,
  notification: notificationReducer,
  bucket: fileReducer
})

// const customMiddleWare = store => next => action => {
//   console.log("Middleware triggered:", action);
//   next(action);
// }

const store = createStore(reducers,
  composeWithDevTools(
    // applyMiddleware(customMiddleWare, thunk)
    applyMiddleware(thunk)
  )
)

// store.subscribe(() => saveUser(store.getState()))
export default store