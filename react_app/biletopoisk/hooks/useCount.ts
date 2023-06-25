import { useCallback, useState } from "react";

export function useCount(init: number = 0){
    let [count, setCount] = useState(init);

    let decrement = useCallback(() => {setCount((curCount) => curCount === 0 ? 0 : curCount - 1)}, []);
    let increment = useCallback(() => {setCount((curCount) => curCount + 1)}, []);

    return {count, decrement, increment}

}