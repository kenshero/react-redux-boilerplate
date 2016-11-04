import counter from '../../components/Counter/reducer' ;
import poster from '../../components/Poster/reducer' ;
import { combineReducers } from 'redux' ;

export default combineReducers({
    counter,
    poster
})
