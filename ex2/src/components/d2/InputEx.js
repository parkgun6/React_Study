import { useState } from "react"

const InputEx = ({name}) => {

    const [nameValue, setNameValue] = useState(name)
    
    const changeValue = (e) => {
        console.log("changeValue: " + e.target.value)
        setNameValue(e.target.value)
    }

    return ( 
        <div>
            <div>
                <h2>Value</h2>
            </div>
            <div>
                <input type="text" value={nameValue} onChange={(e) => {changeValue(e)}}></input>
            </div>
        </div>
    );
}
 
export default InputEx;