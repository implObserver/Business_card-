import { useEffect, useState } from 'react';
import styles from './styles/Carousel.module.css';
import { skills } from '@/shared/lib';

const components = Object.keys(skills).map(key => skills[key]);

export const Carousel = () => {
    const step = 13;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shift, setShift] = useState(step);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, isAnimating])

    const nextSlide = () => {
        if (isAnimating) return; // Не выполнять, если идет анимация
        setIsAnimating(true);
        setShift(shift + step);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % components.length);
            setShift(step); // Возврат к первоначальному смещению
            setIsAnimating(false);
        }, 530);
    };

    const prevSlide = () => {
        if (isAnimating) return; // Не выполнять, если идет анимация
        setIsAnimating(true);
        setShift(shift - step);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + components.length) % components.length);
            setShift(step); // Возврат к первоначальному смещению
            setIsAnimating(false);
        }, 530);
    };

    const visibleComponents = [
        components[currentIndex],
        components[(currentIndex + 1) % components.length],
        components[(currentIndex + 2) % components.length],
        components[(currentIndex + 3) % components.length],
        components[(currentIndex + 4) % components.length],
        components[(currentIndex + 5) % components.length],
        components[(currentIndex + 6) % components.length],
        components[(currentIndex + 7) % components.length],
    ];

    const fill = () => {
        return visibleComponents.map((component, index) => {
            return (
                <div className={styles.container} key={index}>
                    <img className={styles.component} src={component.image} alt="carousel slide" />
                    <span className={styles.span}>{component.name}</span>
                </div>
            )
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.prev} onClick={prevSlide}></div>
            <div className={styles.carousel}>
                <div className={styles.components}
                    style={{
                        right: `calc(var(--responsive-size) * ${shift})`,
                        transition: isAnimating ? 'right 0.3s ease-in-out, left 0.3s ease-in-out' : 'none',
                    }}>
                    {fill()}
                </div>
            </div>
            <div className={styles.next} onClick={nextSlide}></div>
        </div>
    );
};