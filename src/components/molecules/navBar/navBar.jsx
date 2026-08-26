    'use client'
    
    import './navBar.css';
    import Link from 'next/link';
    import { House, BriefcaseBusiness, BookA, MapPinned, CircleUser, Settings } from 'lucide-react';
    import { useState } from 'react';
    
    const NavBar = ({ isOpen }) => {
        return (
            <nav className={`nav_bar ${isOpen ? 'nav_bar_opened' : ''}`}>
                <div className='nav_bar_1'>
                    <Link href='/' className='nav_item' > <House color='#191314' size={24} strokeWidth={1.5} /> </Link>
                    <Link href='/vacancies' className="nav_item" > <BriefcaseBusiness color='#191314' size={24} strokeWidth={1.5}/> </Link>
                    {/* <Link href='/resources' className="nav_item" > <BookA color='#191314' size={24} strokeWidth={1.5}/>             </Link> */}
                    <Link href='/skillmap' className="nav_item" >  <MapPinned color='#191314' size={24} strokeWidth={1.5}/>         </Link>
                </div>

                <div className='nav_bar_2'>
                    <Link href='/login' className="nav_item" >   <CircleUser color='#191314' size={24} strokeWidth={1.5}/>        </Link>
                    <Link href='/setting' className="nav_item" >   <Settings color='#191314' size={24} strokeWidth={1.5}/>          </Link>
                </div>
            </nav>  
        );
    }

    export default NavBar;
