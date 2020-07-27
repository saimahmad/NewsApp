import { combineReducers } from 'redux'
import newsSourceReducer from './newsSource/newsSourceReducer'
import newsListReducer from './newsList/newsListReducer'
import pageReducer from './page/pageReducer'

const rootReducer = combineReducers({
    newsSource: newsSourceReducer,
    newsList: newsListReducer,
    page: pageReducer
})

export default rootReducer