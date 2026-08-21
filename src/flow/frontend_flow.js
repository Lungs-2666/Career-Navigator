    import { Position } from "@xyflow/react";
    
    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left
    };  

    export const frontend_nodes = [
        {
            id: '1',
            position: { x: 0, y: 0 },
            data: { 
                label: 'HTML:',
                items: [
                    "Semantic HTML",
                    "Document Structure",
                    "Forms + Forms validation",
                    "Links",
                    "Images",
                    "Tables",
                    "Metadata",
                    "HTML accessibility"
                ],
                label_color: 'orangered'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '2',
            position: { x: 300, y: 0 },
            data: {
                label: 'CSS:',
                items: [
                    "Selectors",
                    "Cascade",
                    "Inheritance",
                    "Box model",
                    "Display",
                    "Positioning",
                    "Pseudo-classes",
                    "CSS variables",
                    "Transitions + Animations"
                ],
                label_color: '#5246f5'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '3',
            position: { x: 600, y: 0 },
            data: {
                label: 'JavaScript:',
                items: [
                    "Variables",
                    "Data types",
                    "Functions",
                    "Arrays + Objects",
                    "Destructuring",
                    "Spread operator",
                    "Modules",
                    "Document Object Model - DOM",
                    "Events",
                    "Promises",
                    "Async/await",
                    "Fetch API",
                    "Error handling"
                ],
                label_color: '#d8c200'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '4',
            position: { x: 950, y: 0 },
            data: {
                label: 'Quality:',
                items: [
                    "Git + GitHub",
                    "Accessibility",
                    "Lazy loading",
                    "SEO",
                    "Deployment"
                ],
                label_color: '#26b809'
            },
            type: 'skills_node',
            ...nodeDefaults
        },
        {
            id: '5',
            position: { x: 950, y: 300 },
            data: {
                label: 'Additionally:',
                items: [
                    "NodeJS",
                    "Node Package Manager - NPM",
                    "Angular",
                    "React",
                    "NextJS",
                    "Vue",
                    "Component Librarys"
                ],
                label_color: '#23bbcf'
                // handle_source: '',
                // handle_target: Position.Right
            },
            type: 'skills_node',
            ...nodeDefaults
        }
    ];

    export const frontend_edges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2',
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3',
        },
        {
            id: 'e3-4',
            source: '3',
            target: '4',
        },
        {
            id: 'e3-5',
            source: '3',
            target: '5'
        }
    ];
