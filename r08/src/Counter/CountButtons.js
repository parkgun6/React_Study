import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {dec, inc} from "./counterSlice";

const CountButtons = () => {
    
    const dispatch = useDispatch()
    
    const fnInc = () => {
        //dispatch할때 명사가 아닌 함수로 처리한다.
        dispatch(inc())
    }
    
    const fnDec = () => {
        dispatch(dec())
    }

    return (  
        <div>
            <button onClick={fnInc}>++</button>
            <button onClick={fnDec}>--</button>
        </div>
    );
}
 
export default CountButtons;