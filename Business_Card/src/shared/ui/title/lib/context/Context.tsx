import { createContext, useContext } from "react";

export const TitleContext = createContext<undefined | string>(undefined);

export const useTitleContext = () => {
    const props = useContext(TitleContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TitleContext');
    }
    return props;
}