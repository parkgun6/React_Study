
const initState = {
    userid: '',
    username: ''
}

const loginReducer = (state = initState, action) => {
    console.log("login reducer...")
    console.log(action)

    if(action.type === 'LOGIN'){
        return {userid:action.payload.id, username:action.payload.pw}
    }

    return state;
}

export default loginReducer