import { Title, TitleContext } from "@/shared/ui/title";

export const Contacts = () => {
    const titleContext: string = '3.Контакты';
    return (
        <div>
            <TitleContext.Provider value={titleContext}>
                <Title></Title>
            </TitleContext.Provider>
        </div>
    )
}