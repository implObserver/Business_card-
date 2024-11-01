import { useDescriptionContext } from '@/entities/description/lib/context/Context';
import styles from './styles/Bottom.module.css'

export const BottomSlice = () => {
    const context = useDescriptionContext();
    const parameters = context.parameters;

    const fillParameters = () => {
        return parameters.map((parameter, index) => {
            return <li key={index}>{parameter}</li>
        })
    }

    return (
        <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.name}>
                {context.name}
            </div>
            <div>
                <a href={context.link}></a>
            </div>
        </div>
        <div className={styles.slice}>
            {context.description}
            {parameters.length > 0
                ? <div className={styles.parameters}>
                    <span>Параметры:</span>
                    <ul>
                        {fillParameters()}
                    </ul>
                </div>
                : <></>
            }
        </div>
    </div>
    )
}