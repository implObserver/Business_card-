import { Preview, PreviewContext } from "@/shared/ui/preview";
import { useProjectContext } from "../lib/context/Context"
import { Description, DescriptionContext } from "@/entities/description";
import styles from './styles/Project.module.css'

export const Project = () => {
    const project = useProjectContext();
    const previewContext: string[] = project.preview;
    const descriptionContext: Description = {
        name: project.name,
        description: project.description,
        parameters: project.parameters,
        link: project.link,
    }
    return (
        <div className={styles.project}>
            <PreviewContext.Provider value={previewContext}>
                <Preview></Preview>
            </PreviewContext.Provider>
            <DescriptionContext.Provider value={descriptionContext}>
                <Description></Description>
            </DescriptionContext.Provider>
        </div>
    )
}