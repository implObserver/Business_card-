import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from '../styles/App.module.css'
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export const MainLayout: React.FC = () => {
    const { pathname } = useLocation();
    const mainLayoutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (mainLayoutRef.current) {
                mainLayoutRef.current.style.backgroundPositionY = `${0}px`;
            }
        };

        const handleResize = () => {
            // Обновление при изменении высоты
            if (mainLayoutRef.current) {
                mainLayoutRef.current.style.backgroundPositionY = 'center';
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <div ref={mainLayoutRef} className={styles.main_layout}>
            <div className={styles.plug}>
                <header className={styles.header}>
                    <Header />
                </header>
                <div className={styles.outlet}>
                    <Outlet />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};