    'use client'

    import { useState } from "react";
    import Link from "next/link";

    import Card from "@/components/atoms/card/card";
    
    const ResourcesSnippets = () => {
        const [resSnips, setResSnips] = useState([]); //First 4-5 resources
        
        return (
            <main>
                <Link href="/resources">Resources {'>>'}</Link>

                { resSnips.map((card) => {
                    return (
                        // * There'll be "resource" card with another props
                        <Card 
                         title={card.title}
                         pay={card.pay}
                         logo={card.logo}
                         link={card.link}
                        />
                    )
                }) }
            </main>
        )
    }

    export default ResourcesSnippets;