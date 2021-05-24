import { useCallback, useState } from "react";

const Counter = () => {
    
    //useState안에는 기본값을 넣어준다.
    const [value,setValue] = useState(10)

    //파라미터 안에있는 함수는 매번 생성이 아닌 보관된 상태에서 초기화 후 사용한다.
    const plus = useCallback(() => {
        setValue(value + 1)
    })
    
    const minus = useCallback(() => {
        if (value > 0) { setValue(value - 1) }
    })

    return (  
        <div>
            <h1>COUNT {value}</h1>
            <button onClick={plus}>++</button>
            <button onClick={minus}>--</button>
        </div>
    );
}
 
export default Counter;