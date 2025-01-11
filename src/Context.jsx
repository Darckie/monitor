
import React, { children, createContext, useState } from 'react';

export const ContextX = createContext();

function MyProvider(props) {
    const [isViewOpen, setIsViewOpen] = useState(true);
    return (
        <ContextX.Provider value={{ isViewOpen, setIsViewOpen }}>
            {props.children}
        </ContextX.Provider>
    );
}

export default MyProvider;