import { Title, TitleContext } from "@/shared/ui/title";
import styles from './styles/Contacts.module.css'
import { Link } from "react-router-dom";

export const Contacts = () => {
    const titleContext: string = 'Контакты';
    return (
        <div id="contacts" className={styles.contacts}>
            <div className={styles.title}>
                <TitleContext.Provider value={titleContext}>
                    <Title></Title>
                </TitleContext.Provider>
            </div>
            <div className={styles.links}>
                <Link className={styles.github} to='https://github.com/implObserver'>
                    <div className={styles.svg}></div>
                </Link>
                <Link className={styles.mail} to='mailto:sitnikov1vs@gmail.com'>
                    <div className={styles.svg}></div>
                </Link>
            </div>
        </div>
    )
}