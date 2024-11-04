import { useDescriptionContext } from '@/entities/description/lib/context/Context';
import styles from './styles/Bottom.module.css'
import { Links } from '../components/links';
import { Line } from '@/shared/ui/line';

export const BottomSlice = () => {
    const context = useDescriptionContext();
    const parameters = context.parameters;
    const description = context.description;
    const fillParameters = () => {
        return parameters.map((parameter, index) => {
            return <li key={index}>{parameter}</li>
        })
    }

    const fillDescription = () => {
        return description.map((span, index) => {
            return <span key={index}>{span}</span>
        })
    }

    return (
        <div className={`${styles.container} ${styles.container_shadow}`}>
            <div className={styles.links}>
                <Links></Links>
            </div>
            <div className={`${styles.slice} ${styles.slice_shadow}`}>
                <div className={styles.header}>
                    <div className={styles.name}>
                        {context.name}
                    </div>
                    <div>
                        <a href={context.link}></a>
                    </div>
                </div >
                <div className={styles.wrapper}>
                    {context.description.length > 0
                        ? <div>
                            <div className={styles.title}>
                                <Line text={'Описание:'}></Line>
                            </div>
                            <div className={styles.description}>
                                {fillDescription()}
                            </div>
                        </div>
                        : <></>
                    }
                    {parameters.length > 0
                        ? <div className={styles.parameters}>
                            <div className={styles.title}>
                                <Line text={'Параметры:'}></Line>
                            </div>
                            <ul className={styles.list}>
                                {fillParameters()}
                            </ul>
                        </div>
                        : <></>
                    }
                </div>
            </div>
        </div>
    )
}