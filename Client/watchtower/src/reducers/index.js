import { combineReducers } from 'redux'
//combines all reducers from folder into 'reducers' obj
import indicatorReducer from './indicatorReducer'
import sideNavReducer from './sideNavReducer'
import rootReducer from './rootReducer'



const rootStore = combineReducers({
    indicator: indicatorReducer,
    sideNav: sideNavReducer,
    root: rootReducer
})

export default rootStore