import { MyDescription } from "@/entities/myDescription";
import { Title, TitleContext } from "@/shared/ui/title";

export const AboutMe = () => {
    const titleContext: string = '1.Обо мне';
    return (
        <div>
            <TitleContext.Provider value={titleContext}>
                <Title></Title>
            </TitleContext.Provider>
            <MyDescription></MyDescription>
            <span>тут будет стэк-скроллер</span>
        </div>
    )
}