import { combineReducers } from 'redux';
import countReducer from './countReducer';
import loginReducer from './loginReducer';

//Reducer가 여러개가 될 경우에는 combineReducers를 반드시 사용해야한다.
export default combineReducers({
    countReducer: countReducer,
    loginReducer: loginReducer
})