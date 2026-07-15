    import './vacanCard.css';
    import Image from 'next/image';
    import Link from 'next/link';
    
    const VacancieCard = ({ title, pay, logo, link }) => {
        return (
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

                <Link className='vac_card_link' href={link}>
                        {"See >"}
                </Link>
            </div>
        )    
    }

    export default VacancieCard;
