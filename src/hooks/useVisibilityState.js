import { useState } from "react";

function useVisibilityState(initialValue) {
    const [visible, setVisible] = useState(initialValue);

    const handleVisibilityChange = () => {
        setVisible(!visible);
    };

    return { visible, handleVisibilityChange };
};

export default useVisibilityState;