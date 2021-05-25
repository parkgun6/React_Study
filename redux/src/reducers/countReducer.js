//import 가 없다. 순수한 함수이다.
//Store에 관리된다.

const initState = { count: 10 }

const countReducer = (state = initState, action) => {
    //console.log("countReducer")
    console.log(action)

    if (action.type === 'INC') {
        return {count: state.count + 1}
    } else if (action.type === 'DEC') { 
        return {count: state.count - 1}
    }

    return state
}

export default countReducer;