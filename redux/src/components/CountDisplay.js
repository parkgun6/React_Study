import { useSelector } from "react-redux";
import PageHeader from "./PageHeader";

const CountDisplay = () => {

    //store가 보관하고 있는 state
    const count = useSelector(state => state.countReducer.count)
    console.log(count)

    return (
        <div>
            <PageHeader></PageHeader>
            <h1>{count}</h1>
        </div>
    );
}
 
export default CountDisplay;