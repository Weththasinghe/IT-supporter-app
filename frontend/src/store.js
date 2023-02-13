import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { supListReducer, supporterCreateReducer } from './reducers/supporterReducer'


const reducer = combineReducers({
   supporterCreate:supporterCreateReducer,
   supporterList:supListReducer
})

const initialState = {
    
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store