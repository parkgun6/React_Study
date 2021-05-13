import { Paper } from "@material-ui/core";
import { useState } from "react";
import CountButtons from "./CountButtons"
import CountDisplay from "./CountDisplay"
import OddEventDisplay from "./OddEvenDisplay";

const CountContainer = () => {

    //useState(안에 들어가는값은 초기화된 값이다.)
    const [num, setNum] = useState(0)

    const changeNum = (value) => {
        console.log("click",value)
        setNum(num + value)
    }

    return (  
        <Paper elevation={5}>
            <CountDisplay num={num}></CountDisplay>
            <OddEventDisplay num={num}></OddEventDisplay>
            <CountButtons fn={changeNum}></CountButtons>
        </Paper>
    );
}
 
export default CountContainer;