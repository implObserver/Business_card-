import { useDescriptionContext } from '@/entities/description/lib/context/Context';
import styles from './styles/Links.module.css'

export const Links = () => {
    const context = useDescriptionContext();
    return (
        <div className={styles.links}>
            <div className={styles.link}>
                <a href={context.link}></a>
            </div>
            <div className={styles.github}>
                <a href={context.link}></a>
            </div>
        </div>
    )
}