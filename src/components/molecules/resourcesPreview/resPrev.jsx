    'use client'

    import './resPrev.css';
    import { useState } from "react";
    import Link from "next/link";

    import ResourceCard from "@/components/atoms/resCard/resCard";

    const test_card = [
        {
            id: 1,
            title: 'card_test',
            descript: 'Lorem ipsum dolor sit amet.',
            img: '/logos/logo_1',
            link: '/resource/1'
        },
        {
            id: 2,
            title: 'card_test',
            descript: 'Lorem ipsum dolor sit amet.',
            img: '/logos/logo_1',
            link: '/resource/1'
        },
        {
            id: 3,
            title: 'card_test',
            descript: 'Lorem ipsum dolor sit amet.',
            img: '/logos/logo_1',
            link: '/resource/1'
        },
        // {
        //     id: 4,
        //     title: 'card_test',
        //     descript: 'Lorem ipsum dolor sit amet.',
        //     img: '/logos/logo_1',
        //     link: '/resource/1'
        // }
    ]
    
    const ResourcesPreview = () => {
        const [resPreview, setResPreview] = useState(test_card); //First 4-5 resources
        
        return (
            <div className="resources_preview_main">
                <Link href='/resources' className='resources_preview_link'> Resources {">>"} </Link>

                <div className='resources_preview_cards'>
                    {resPreview.map((item) => {
                        return (
                            <ResourceCard 
                                key={item.id}
                                title={item.title}
                                descript={item.descript}
                                img={item.img}
                                link={item.link}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }

    export default ResourcesPreview;