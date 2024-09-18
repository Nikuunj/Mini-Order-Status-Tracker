'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

const AppContext = createContext<any>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [id, setID] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const handleName = (name: string) => {
        setName(name);
    };

    const handleId = (id: string) => {
        setID(id);
    };

    const handleStatus = (status: string) => {
        setStatus(status);
    };

    const contextValue = {
        id,
        name,
        status,
        handleId,
        handleName,
        handleStatus,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    return useContext(AppContext);
}
