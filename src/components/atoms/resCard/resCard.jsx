    import './resCard.css';
    import Image from 'next/image';
    import Link from 'next/link';

    const ResourceCard = ({ img, title, descript, link }) => {
        return (
            <div className='res_card'>
                <div className='res_card_group'>
                    <Image 
                        src={'/next.svg'} //will be changed to {img}
                        width={300}
                        height={150}
                        alt='resource_image'
                        className='res_img'
                    />
                </div>

                <h3 className='res_title'> {title} </h3>
                <p className='res_desc'> {descript} </p>

                <Link className='res_card_link' href={link}> {"See >>"} </Link>
            </div>
        )
    }

    export default ResourceCard;
