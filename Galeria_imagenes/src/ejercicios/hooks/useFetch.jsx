import { useEffect, useState } from "react";

export function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        //En este caso no haria falta el useEffect ya que al cambiar la url se ejecuta automaticamente,
        //pero para probar como seria.
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);

            }).catch(error => {
                setError(error);
                setLoading(false);
            });

    }, [url]);


    return { data, loading, error }
}