    import './navBar.css';
    import Link from 'next/link';
    import { House, BriefcaseBusiness, BookA, MapPinned, CircleUser, Settings } from 'lucide-react';
    
    const NavBar = () => {
        return (
            <nav className='nav_bar'>
                <div className='nav_bar_1'>
                    <Link href='/' className='nav_item' > <House color='#191314' size={24} strokeWidth={1.5} /> </Link>
                    <Link href='/vacancies' className="nav_item" > <BriefcaseBusiness color='#191314' size={24} strokeWidth={1.5}/> </Link>
                </div>

                <div className='nav_bar_2'>
                    <Link href='/account' className="nav_item" >   <CircleUser color='#191314' size={24} strokeWidth={1.5}/>        </Link>
                    <Link href='/setting' className="nav_item" >   <Settings color='#191314' size={24} strokeWidth={1.5}/>          </Link>
                </div>
            </nav>  
        );
    }

    export default NavBar;
