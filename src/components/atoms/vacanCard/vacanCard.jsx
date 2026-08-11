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
            <div className="vac_card">
                <div className='card_group'>
                    <Image
                        src={'/next.svg'} // will be changed to {logo}
                        alt='vacancie card'
                        width={300}
                        height={150}
                        className='card_img'
                        loading='eager'
                    />

                    <h3 className='card_title'> {title} </h3>
                    <p className='card_pay'> {pay} </p>
                </div>

                <Link 
                    href={link} 
                    className='vacancies_preview_card_btn'
                > 
                    Check vacancie {">"} 
                <Link className='vac_card_link' href={link}>
                        {"See >"}
                </Link>
            </div>
        )    
    }

    export default VacancieCard;
