import { createContext, useContext } from "react";

export const PreviewContext = createContext<undefined | string[]>(undefined);

export const usePreviewContext = () => {
    const props = useContext(PreviewContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PreviewContext');
    }
    return props;
}