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
<<<<<<< HEAD
                        className='res_img'
                        loading='eager'
=======
                        className='resource_card_img'
>>>>>>> feature/frontend
                    />

                    <h2 className='resources_card_title'> {title} </h2>
                    <p className='resources_card_desc'> {descript} </p>
                </div>

<<<<<<< HEAD
                <h3 className='res_title'> {title} </h3>
                <p className='res_desc'> {descript} </p>

                <Link className='res_card_link' href={link}> {"See >"} </Link>
=======
                <Link className='resource_card_link' href={link}> 
                    {"Watch >"} 
                </Link>
>>>>>>> feature/frontend
            </div>
        )
    }

    export default ResourceCard;
