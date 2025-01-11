import { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);
    const incr = () => setCount(count + 1);
    const decr = () => setCount(count -1);
    const reset = () => setCount(0);
    return { count, incr, decr, reset }
}


export default useCounter;
