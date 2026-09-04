    'use client'

    import styles from './styles.module.css';
    import { useState, useEffect } from 'react';
    import { useAccount } from '@/context/accountProvider';
    import { supabase } from '@/lib/supabaseClient';
    import { useRouter } from 'next/navigation';

    import WavesBgComponent from '@/components/atoms/wavesBg/wavesBgComp';
    
    const AccountPage = ({ profile_pic_src }) => {
        const { user, loading, logout, } = useAccount();
        const router = useRouter();

        useEffect(() => {
            if(!loading && !user){
                router.push('/login');
            }
        }, [user, loading, router]);

        if (loading) {
            return <div>Загрузка...</div>;
        }

        if(!user){
            return null;
        }

        const handleLogout = async() => {
            await logout();
        }

        return (
            <div className={styles.account_page}>
                <WavesBgComponent />

                <main className={styles.account_page_main}>
                    <div className={styles.profile_card_bg}></div>

                    <img
                        src={profile_pic_src || '/user.png'}
                        alt="profile_picture"
                        className={styles.profile_pic}
                    />

                    <div className={styles.account_info}>
                        <span className={styles.info_email}> Email: <br /> <br /> {user.email} </span>
                        <span className={styles.info_direction}> Направление: <br /> <br /> {user.direction} </span>
                    </div>

                    <button 
                        className={styles.logout_btn} 
                        onClick={() => {handleLogout()}}
                    >
                        Выход
                    </button>
                </main>
            </div>
        );
    };

    export default AccountPage;
