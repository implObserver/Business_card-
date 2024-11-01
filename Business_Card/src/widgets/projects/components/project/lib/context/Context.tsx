import { createContext, useContext } from "react";

export const ProjectContext = createContext<undefined | Project>(undefined);

export const useProjectContext = () => {
    const props = useContext(ProjectContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ProjectContext');
    }
    return props;
}