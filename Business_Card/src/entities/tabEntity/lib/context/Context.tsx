import { createContext, useContext } from "react";

export const TabContext = createContext<undefined | TabContext>(undefined);

export const useTabContext = () => {
    const props = useContext(TabContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TabContext');
    }
    return props;
}