import { useSelector } from "react-redux";

const CountDisplay = () => {

    const count = useSelector(state => state.count)
    console.log(count)

    return (  
        <h1>{count}</h1>
    );
}
 
export default CountDisplay;