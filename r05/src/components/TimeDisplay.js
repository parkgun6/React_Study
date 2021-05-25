import axios from "axios";
import { useEffect, useState } from "react";

const TimeDisplay = () => {
    
    const [time, setTime] = useState('')
    const [flag, setFlag] = useState(false)

    const getTime = async () => {
        const res = await axios.get("http://localhost:8080/todo/now")
        console.log(res)
        setTime(res.data)
    }

    //useEffect를 안 썼을 때 1초마다 갱신된다.
    //getTime()

    useEffect(() => {
        getTime()
    },[flag])

    return (  
        <div>
            <h1>{time}</h1>
            <button onClick={()=>{setFlag(!flag)}}>time</button>
        </div>
    );
}
 
export default TimeDisplay;