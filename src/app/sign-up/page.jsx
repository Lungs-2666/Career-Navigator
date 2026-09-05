    'use client'

    import styles from './styles.module.css';
    import { useState } from 'react';
    import { supabase } from '@/lib/supabaseClient';
    import WavesBgComponent from '@/components/atoms/wavesBg/wavesBgComp';
    import { useRouter } from 'next/navigation';

    const SignUpPage = () => {
        const router = useRouter();

        const [ email, setEmail ] = useState('');
        const [ password, setPassword ] = useState('');
        const [ direction, setDirection ] = useState('');
        const [ loading, setLoading ] = useState(false);
        const [ error, setError ] = useState('');
        const [ success, setSuccess ] = useState('');

        const handleSignUp = async(e) => {
            e?.preventDefault();
            setError('');
            setSuccess('');
            setLoading(true);

            try {
                const { data, error: signUpError } = await supabase.auth.signUp({
                    email,
                    password
                });

                if(signUpError){
                    setError(signUpError.message);
                    return;
                }

                const user = data?.user;
                if(!user){
                    setError("Couldn't get user after signing up");
                    return;
                }


                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert({
                        id: user.id,
                        email,
                        direction
                    });

                if(profileError){
                    setError(profileError.message);
                    return;
                }

                setSuccess('Account was successfully created');
                setEmail('');
                setPassword('');
                setDirection('');
            } catch (err) {
                setError(err.message || 'Unknown error');
            } finally {
                setLoading(false);
            };

            return true;
        };

        const handleToLoginPage = async() => {
            const isSignedUp = await handleSignUp();
            
            if( isSignedUp /*== true*/ ){
                router.push('/login');
            };
        };

        return (
            <div className={styles.signup_page}>
                <WavesBgComponent />

                <main className={styles.signup_page_main}>
                    <h1 className={styles.signup_page_heading}> Регистрация </h1>

                    <form onSubmit={handleSignUp} className={styles.signup_form}> 
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder='Email'
                                className={styles.input}
                            />

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder='Пароль'
                                className={styles.input}
                            />

                        
                            <input
                                type="text"
                                value={direction}
                                onChange={(e) => setDirection(e.target.value)}
                                placeholder="Направление в обучении"
                                className={styles.input}
                            />

                        <button 
                            type="submit"
                            disabled={loading}
                            className={styles.signup_btn}
                            onClick={() => {handleToLoginPage()}}
                        >
                            {loading ? 'Создание...' : 'Зарегистрироваться'}
                        </button>
                    </form>

                    {/* {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
                    {success && <p style={{ color: 'green', marginTop: 12 }}>{success}</p>} */}
                </main>
            </div> 
        )
    } 

    export default SignUpPage;
