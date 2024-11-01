import { useTitleContext } from "../lib/context/Context"
import styles from './styles/Title.module.css'

export const Title = () => {
    const text = useTitleContext();
    return (
        <div className={styles.title}>
            {text}
        </div>
    )
}