import { Title, TitleContext } from "@/shared/ui/title";

export const Contacts = () => {
    const titleContext: string = '3.Контакты';
    return (
        <div>
            <TitleContext.Provider value={titleContext}>
                <Title></Title>
            </TitleContext.Provider>
            <a href="https://github.com/implObserver">ссылка гитхаб</a>
            <a href="mailto:sitnikov1vs@gmail.com">ссылка почта</a>
        </div>
    )
}