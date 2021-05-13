import { Button } from "@material-ui/core"

const CountButtons = ({fn}) => {
    return (  
        <div>
            <Button onClick={() => fn(+1)}>PLUS</Button>
            <Button onClick={() => fn(-1)}>MINUS</Button>
        </div>
    );
}
 
export default CountButtons;