    import './navBar.css';
    import Link from 'next/link';
    import { Settings } from 'lucide-react';
    
    const NavBar = () => {
        return (
            <nav className='nav_bar'>
                <div className='nav_items'>
                    <Link href={'/vacancies'} className='nav_item'>Vacancies</Link>
                    <Link href={'/resources'} className='nav_item'>Resources</Link>
                    <Link href={'/skillmap'}  className='nav_item'>Skill map</Link>
                    <Link href={'/account'}   className='nav_item'>Account  </Link>
                </div>
                
                <button className='settings_btn'>
                    <Link className='settings_link' href={'/settigs'}>
                        <Settings 
                            strokeWidth={1.5}
                            color='black'
                            // size={}
                        />

                        <p>    
                            Settings {'>>'}
                        </p>
                    </Link>
                </button>
            </nav>
        );
    }

    export default NavBar;
