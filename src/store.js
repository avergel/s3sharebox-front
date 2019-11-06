
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'

const reducers = combineReducers({
  user: userReducer,
  notification: notificationReducer
})

const store = createStore(reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

// store.subscribe(() => saveUser(store.getState()))
export default store