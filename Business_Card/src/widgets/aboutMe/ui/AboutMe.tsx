import { MyDescription } from "@/entities/myDescription";
import { Title, TitleContext } from "@/shared/ui/title";
import styles from './styles/AboutMe.module.css'

export const AboutMe = () => {
    const titleContext: string = '1.Обо мне';
    return (
        <div className={styles.about_me}>
            <TitleContext.Provider value={titleContext}>
                <Title></Title>
            </TitleContext.Provider>
            <MyDescription></MyDescription>
            <span>тут будет стэк-скроллер</span>
        </div>
    )
}