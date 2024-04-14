import React from 'react';

function useVisibilityState(initialValue) {
    const [visible, setVisible] = React.useState(initialValue);

    const handleVisibilityChange = () => {
        setVisible(!visible);
    };

    return [visible, handleVisibilityChange];
};

export default useVisibilityState;