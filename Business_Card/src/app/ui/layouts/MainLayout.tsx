import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from '../styles/App.module.css'
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export const MainLayout: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className={styles.main_layout}>
            <header>
                <Header />
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};