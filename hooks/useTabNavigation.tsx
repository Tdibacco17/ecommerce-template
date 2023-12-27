import { useEffect, useRef, useState } from "react";

type KeyboardEventWithTarget = KeyboardEvent & { target: HTMLFormElement };

const useTabNavigation = (formRef: React.RefObject<HTMLFormElement>, inputSelector: string) => {
    const [activeGroup, setActiveGroup] = useState<string | null>(null);

    const handleKeyDown = (e: Event) => {
        const keyboardEvent = e as KeyboardEventWithTarget;

        if (keyboardEvent.key === "Tab") {
            const inputs = formRef.current?.querySelectorAll(inputSelector);
            if (inputs) {
                const activeIndex = Array.from(inputs).findIndex((input) => input === document.activeElement);
                const nextIndex = activeIndex + 1 >= inputs.length ? 0 : activeIndex + 1;

                if (inputs[nextIndex]) {
                    setActiveGroup(inputs[nextIndex].getAttribute("name") || null);
                }
            }
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [formRef, inputSelector]);

    return { activeGroup, setActiveGroup };
};

export default useTabNavigation;