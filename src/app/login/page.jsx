    'use client'
    
    import styles from './styles.module.css';
    import { useState, useEffect } from 'react';
    import { supabase } from '@/lib/supabaseClient';
    import WavesBgComponent from '@/components/atoms/wavesBg/wavesBgComp';
    import Link from 'next/link';
    import { useRouter } from 'next/navigation';
    import { useAccount } from '@/context/accountProvider';

    const SignInPage = () => {
        const router = useRouter();

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [direction, setDirection] = useState(null);
        const [error, setError] = useState('');

        useEffect(() => {
            const handleSession = async() => {
                const {data: {session}, error} = await supabase.auth.getSession();

                if(error){
                    console.log(error)
                }

                if(!session){
                    console.log('No current sessions');
                    return null;
                } else {
                    router.push('/account');
                }
            }

            handleSession();
        }, [router]);
            

        const handleLogin = async(e) => {
            e?.preventDefault();
            setError('');
            setDirection(null);

            //Login
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if(signInError){
                setError(signInError.message);
                return;
            }

            const user = data?.user;
            if(!user){
                setError("Couldn't connect user after logging in");
                return;
            }

            // Get profile

            const {data: profiles, error: profileError} = await supabase
                .from('profiles')
                .select('direction')
                .eq('id', user.id)
                .single();
            
            if(profileError){
                setError(profileError.message);
                return;
            }

            setDirection(profiles.direction);
            console.log(direction);

            // localStorage.setItem('isLogged', 'true');
            setTimeout(() => {
                    router.push('/account');
                }, 2000);
            // return true;
        };

        // const handleToAccountPage = async() => {
        //     const isLogged = await handleLogin();

        //     if( isLogged ){
                
        //     };
        // };

        return (
            <div className={styles.login_page}>
                <WavesBgComponent />

                <main className={styles.login_page_main}>
                    <h1>Login</h1>

                    <form onSubmit={async(e) => {e.preventDefault(); await handleLogin(e)}} className={styles.login_form}>
                        <div className={styles.email_group}>
                            <label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Email'
                                    className={styles.input}
                                />
                            </label>
                        </div>

                        <div className={styles.password_group}>
                            <label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder='Password'
                                    className={styles.input}
                                />
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={styles.login_btn}
                            // onClick={() => {handleToAccountPage()}}
                        >
                            Log in
                        </button>
                        
                        
                        <Link href='/sign-up' className={styles.no_acc_link}> Don't have an account? </Link>
                    </form>

                    {/* {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>} */}
                    {/* {direction && (
                        <p style={{ marginTop: 12 }}>
                            Твоё направление обучения: <b>{direction}</b>
                        </p>
                    )} */}
                </main>
            </div>
        )
    }

    export default SignInPage;
