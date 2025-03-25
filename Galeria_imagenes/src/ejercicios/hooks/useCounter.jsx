import { useState } from "react";

export function useCounter(num) {

    const [contador, setContador] = useState(0);

    const Increment = () => {
        setContador((prevNum) => prevNum + num);
    }

    const Decrement = () => {
        setContador((prevNum) => prevNum - num);
    }

    const Reset = () => {
        setContador(0);
    }

    return { contador, Increment, Decrement, Reset }

}