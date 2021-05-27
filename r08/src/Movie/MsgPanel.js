import { Typography } from "@material-ui/core"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMsg } from "./movieSlice";

const MsgPanel = () => {

    const dispatch = useDispatch()
    const msg = useSelector(state => state.movie.msg)

    useEffect(() => {
        setTimeout( () => {
           dispatch(clearMsg())
        }, 5000)
    },[msg])

    return (  
        <div>
            <Typography variant={"h1"}>{msg}</Typography>
        </div>
    );
}
 
export default MsgPanel;