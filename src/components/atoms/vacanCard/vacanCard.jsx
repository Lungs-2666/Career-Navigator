    import './vacanCard.css';
    import Link from 'next/link';
    
    const VacancieCard = ({ title, pay, logo, link }) => {
        return (
            <div className='vacancies_preview_card'>
                <div>
                    <img src={logo} alt="vacancie_logo"/>
                                    
                    <div className='card_group_1'>
                        <h2> {title} </h2>
                        <p> {pay} </p>
                    </div>
                </div>

                <Link 
                    href={link} 
                    className='vacancies_preview_card_btn'
                > 
                    Check vacancie {">"} 
                </Link>
            </div>
        )    
    }

    export default VacancieCard;
