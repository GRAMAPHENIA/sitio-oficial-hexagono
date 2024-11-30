// hooks/useScrollToForm.ts
import { useCallback } from "react";

export const useScrollToForm = () => {
    return useCallback(() => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
};
