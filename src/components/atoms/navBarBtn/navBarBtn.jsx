    'use client'

    import './navBarBtn.css';
    import { ArrowUpRight, X } from 'lucide-react';
    import { useState } from 'react';

    const NavBarBtn = ({ onToggle }) => {
        //Opening function
        const [clicked, setClicked] = useState(false);

        return (
            <button 
                className='nav_bar_btn'
                onClick={() => {onToggle(); setClicked(prev => !prev)}}
            > {/* Will open NavBar on mobile*/}

                {
                    clicked ? 
                    <X
                        color='black'
                        size={32}
                        strokeWidth={1}
                    /> :
                    <ArrowUpRight
                        color='black'
                        size={32}
                        strokeWidth={1}
                    />
                }
                
            </button>
        )
    }

    export default NavBarBtn;
