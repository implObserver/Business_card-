import { useDescriptionContext } from "@/entities/description/lib/context/Context"
import styles from './styles/TopSlice.module.css'
import { useEffect, useRef, useState } from "react";
import { Line } from "@/shared/ui/line";

export const TopSlice = () => {
    const context = useDescriptionContext();
    const parameters = context.parameters;
    const description = context.description;
    const containerRef = useRef<HTMLDivElement>();
    const [scrollDirection, setScrollDirection] = useState(null); // Направление скролла
    const prevScrollY = useRef(0); // Предыдущее значение скролла

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Определяем направление прокрутки
            if (currentScrollY > prevScrollY.current) {
                setScrollDirection('down'); // Скроллим вниз
            } else if (currentScrollY < prevScrollY.current) {
                setScrollDirection('up'); // Скроллим вверх
            }

            prevScrollY.current = currentScrollY; // Обновляем предыдущую позицию скролла
        };

        // Навешиваем обработчик скролла
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Убираем обработчик при размонтировании компонента
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <div ref={containerRef}
            className={`${styles.container} ${scrollDirection === 'down'
                ? `${styles.scroll_down}`
                : scrollDirection === 'up'
                    ? `${styles.scroll_up}`
                    : ''}`}>
            <div className={styles.slice}>
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