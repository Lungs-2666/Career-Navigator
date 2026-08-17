    'use client'

    import { createContext, useContext, useState, useEffect } from "react";
    import { supabase } from "@/lib/supabaseClient";

    const AccountContext = createContext();

    export function AccountProvider({ children }){
        const [user, setUser] = useState({ email: '', direction: '' });
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const getSession = async() => {
                const {data: {session}} = await supabase.auth.getSession();

                if(!session?.user){
                    setUser(null);
                    setLoading(false);
                    return;
                }

                const authUser = session.user;

                const {data: profile} = await supabase
                    .from('profiles')
                    .select('email', 'direction')
                    .eq('id', authUser.id)
                    .single();

                // console.log('Profile from Supabase:', profile);


                setUser({
                    // id: authUser.id
                    email: profile?.email || authUser.email,
                    direction: profile.direction
                });

                // console.log('User in context:', {
                //     id: authUser.id,
                //     email: profile?.email || authUser.email,
                //     direction: profile?.direction || null,
                // });

                setLoading(false);
            };

            getSession();

            const {data: subscription} = supabase.auth.onAuthStateChange(async(event, session) => {
                if(!session?.user){
                    setUser(null);
                    setLoading(false);
                    return;
                }

                const authUser = session.user;

                const {data: profile} = await supabase
                    .from('profiles')
                    .select('direction')
                    .eq('id', authUser.id)
                    .single();

                setUser({
                    // id: authUser.id
                    email: profile?.email || authUser.email,
                    direction: profile.direction
                });

                setLoading(false);
            });

            return() => {
                subscription?.unsubscribe();
            }
        }, []);

        return (
            <AccountContext.Provider value={{ user, loading, setUser }}>
                {children}
            </AccountContext.Provider>
        );
    }

    export function useAccount(){
        const ctx = useContext(AccountContext);

        if(!ctx){
            throw new Error('useAccount must be used within Provider');
        };

        return ctx;
    }