import { useCallback } from "react";
import { useState } from "react";

export function useModal() {

    const [isOpen, setOpen] = useState(false);

    const openModal = useCallback(() => {
        setOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setOpen(false);
    }, []);

    return { isOpen, openModal, closeModal }

}