import { useSelector } from "react-redux";
import { countValue } from "./counterSlice";


const CountDisplay = () => {

    const count = useSelector(countValue)

    console.log(count)

    return (  
        <h1>COUNT: {count}</h1>
    );
}
 
export default CountDisplay;