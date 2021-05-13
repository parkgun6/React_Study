import { Typography } from "@material-ui/core";

const CountDisplay = ({num}) => {
    return (

        //num은 props로 불변이다.
        <Typography component="h2" variant="h2">COUNT: {num}</Typography>
    );
}
 
export default CountDisplay;