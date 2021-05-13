import { Typography } from "@material-ui/core"

const OddEventDisplay = ({num}) => {

    const getValue = () => {
        if(num %2 == 0){
            return <small>EVEN</small>
        }else{
            return <small>ODD</small>
        }
    }

    return (  
        <div>
            <Typography component="h4" variant="h4">
                {/* {num % 2 == 0 ?'EVEN':'ODD'} */}
                {getValue()}
            </Typography>
        </div>
    );
}
 
export default OddEventDisplay;