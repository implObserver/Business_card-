import { Title, TitleContext } from "@/shared/ui/title";
import { projects } from "@/shared/lib";

export const Projects = () => {
    const titleContext: string = '2.Проекты';
    const fill = () => {
        return Object.entries(projects).map(([key, project]) => (
            <div key={key}>
                <h3>{project.name}</h3>
                <p>{project.description.join(", ")}</p>
                <a href={project.link}>Смотреть проект</a>
            </div>
        ));
    }
    return (
        <div>
            <TitleContext.Provider value={titleContext}>
                <Title></Title>
            </TitleContext.Provider>
            {fill()}
        </div>
    )
}