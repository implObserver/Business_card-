
import { useEffect, useRef } from "react";
import styles from './styles/ExternalReset.module.css';

import { useExternalResetContext } from "../lib/context/Context";
import { Plug, PlugContext } from "@/shared/ui/plug";

export const ExternalReset = ({ children }) => {
    const externalElementRef = useRef<HTMLDivElement>();
    const context = useExternalResetContext();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const element = e.target as HTMLElement;
            console.log(element.className)
            if (element.className.includes('plug')) {
                if (element.className.includes(context.index)) {
                    context.state.setState(false);
                }
            }
        };

        if (context.state.getState()) {
            document.addEventListener('mousedown', handler);
        }

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    },)

    const plugContext: PlugContextType = {
        state: context.state.getState(),
        index: context.index,
    }

    return (
        <div ref={externalElementRef} className={`${context.state.getState() ? `${styles.light} ${context.index}` : `${styles.container}`}`}>
            <PlugContext.Provider value={plugContext}>
                {children}
                <Plug></Plug>
            </PlugContext.Provider>
        </div>
    )
}