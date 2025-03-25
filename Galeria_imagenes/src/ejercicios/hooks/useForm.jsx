import { useState } from "react"

export function useForm(valoresForm) {

    const [valores, setValores] = useState(valoresForm);

    const handleChange = (e) => {
        const { name, value } = e.target; //Del e.target donde llamemos al handleChange estamos pillando su name y value
        setValores({ ...valores, [name]: value });
    };

    const resetForm = () => {
        setValores(valoresForm);
    };

    return { valores, handleChange, resetForm }

}