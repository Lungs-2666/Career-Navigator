    import './resCard.css';
    import Image from 'next/image';
    import Link from 'next/link';

    const ResourceCard = ({ img, title, descript, link }) => {
        return (
            <div className='resource_card'>
                <div className='resource_card_group'>
                    <img
                        src={img}
                        alt='resource_image'
                        className='resource_card_img'
                    />

                    <h2 className='resources_card_title'> {title} </h2>
                    <p className='resources_card_desc'> {descript} </p>
                </div>

                <Link className='resource_card_link' href={link}> 
                    {"Watch >"} 
                </Link>
            </div>
        )
    }

    export default ResourceCard;
