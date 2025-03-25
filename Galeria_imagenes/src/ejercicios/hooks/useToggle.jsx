import { useCallback, useState } from "react";

export function useToggle() {

    const [toggle, setToggle] = useState(true);

    const HandleToggle = useCallback(() => {
        setToggle(!toggle);
    }, [toggle])

    return [toggle, HandleToggle]

}