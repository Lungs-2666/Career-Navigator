    import './card.css';
    import Image from 'next/image';
    import Link from 'next/link';
    
    const Card = ({ title, pay, logo, link }) => {
        return (
            <div className="card">
                <Image
                 src={logo}
                 alt='vacancie card'
                 width={150}
                 height={150}
                 className='card_img'
                />

                <h3 className='card_title'> {title} </h3>
                <p className='card_pay'> {pay} </p>

                <Link href={link}>
                    <button className='card_link'>
                        {"See >"}
                    </button>
                </Link>
            </div>
        )    
    }

    export default Card;
