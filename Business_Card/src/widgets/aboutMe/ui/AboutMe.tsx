import { MyDescription } from "@/entities/myDescription";
import { Title, TitleContext } from "@/shared/ui/title";
import styles from './styles/AboutMe.module.css'
import { Line } from "@/shared/ui/line";
import { Carousel } from "@/entities/carousel";

export const AboutMe = () => {
    const titleContext: string = 'Обо мне';
    return (
        <div id="about" className={styles.about_me}>
            <TitleContext.Provider value={titleContext}>
                <Title></Title>
            </TitleContext.Provider>
            <Line text={''}></Line>
            <MyDescription></MyDescription>
            <Carousel></Carousel>
        </div>
    )
}