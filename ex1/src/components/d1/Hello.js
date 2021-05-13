import { Button, Typography } from "@material-ui/core"



const Hello = ({name, fn}) => {

    return (
        //한 개의 컴포넌트는 한 개의 껍데기만 넣을 수 있다.
        <>
            <Typography component="h1" variant="h1">Hello {name}</Typography>
            <Button color="primary" onClick={() => { fn(name) }}>Click</Button>
        </>
    );
}
 

//없다면 외부사용 불가능
export default Hello;
