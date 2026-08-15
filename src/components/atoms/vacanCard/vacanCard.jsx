    import './vacanCard.css';
    import Link from 'next/link';
    
    const VacanCard = ({ title, pay, logo, link }) => {
        return (
            <div className='vacancie_card'>
                <img src={logo} alt="vacancie_card_logo"/>
                                    
                <div className='vacancie_card_group'>
                    <h2> {title} </h2>
                    <p> {pay} </p>
                </div>

                <Link 
                    href={link} 
                    className='vacancie_card_btn'
                > 
                    Check vacancie {">"} 
                </Link>
            </div>
        )
    }

    export default VacanCard;
