    'use client'

    import './resourSnip.css';
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
        {
            id: 4,
            title: 'card_test',
            descript: 'Lorem ipsum dolor sit amet.',
            img: '/logos/logo_1',
            link: '/resource/1'
        }
    ]
    
    const ResourcesSnippets = () => {
        const [resSnips, setResSnips] = useState(test_card); //First 4-5 resources
        
        return (
            <div className="resources_main">
                <Link className='res_link' href="/resources">Resources {'>>'}</Link>

                <div className="res_cards">
                    { resSnips.map((card) => {
                        return (
                            // * There'll be "resource" card with another props
                            <ResourceCard
                                key={card.id}
                                title={card.title}
                                descript={card.descript}
                                img={card.img}
                                link={card.link}
                            />
                        )
                    }) }
                </div>
            </div>
        )
    }

    export default ResourcesSnippets;