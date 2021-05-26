import { useDispatch } from "react-redux";

const LoginComponent = () => {
    
    const dispatch = useDispatch()

    const sendLogin = () => {
        //payload 메세지 (전달되는 데이터)
        const action = {type: 'LOGIN', payload: {id: 'AAA', pw: 'BBB'}}
        dispatch(action)
    }
    
    return (  
        <div>
            <button onClick={() => sendLogin()}>Login</button>
        </div>
    );
}
 
export default LoginComponent;