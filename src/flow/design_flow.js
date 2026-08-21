    import { Position } from "@xyflow/react";
    
    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    };

    export const design_nodes = [
        {
            id: '1',
            position: { x: 0, y: 0 },
            data: {
                label: 'Design Fundamentals',
                items: [
                    "Design principles",
                    "Typography",
                    "Color theory",
                    "Layout & grid",
                    "Visual Hierarchy"
                ],
                label_color: '#d8ca50'
            },
            type: 'skills_node',
            ...nodeDefaults 
        },
        {
            id: '2',
            position: { x: 300, y: 0 },
            data: {
                label: 'UX Foundations',
                items: [
                    "What is UX?",
                    "User research",
                    "Personas & empathy maps",
                    "User journeys & flows",
                    "Information architecture",
                    "Wireframing"
                ],
                label_color: '#376de2'
            },
            type: 'skills_node',
            ...nodeDefaults 
        },
        {
            id: '3',
            position: { x: 600, y: 0 },
            data: {
                label: 'Tools',
                items: [
                    "Figma basics",
                    "Component & variants",
                    "Auto layout",
                    "Prototyping",
                    "Design systems",
                    "Developer handoff"
                ],
                label_color: '#f5751f'
            },
            type: 'skills_node',
            ...nodeDefaults 
        },
        {
            id: '4',
            position: { x: 900, y: 0 },
            data: {
                label: 'Advanced UX/UI',
                items: [
                    "Usability testing",
                    "Accessibility (ally)",
                    "Mobile-first & responsive",
                    "Micro-interactions",
                    "Design sprints"
                ],
                label_color: '#34b334'
            },
            type: 'skills_node',
            ...nodeDefaults 
        },
        {
            id: '5',
            position: { x: 1200, y: 0 },
            data: {
                label: 'Portfolio & career',
                items: [
                    "Case studies",
                    "Portfolio",
                    "Soft skills",
                    "AI for designers"
                ],
                label_color: '#c93f3f'
            },
            type: 'skills_node',
            ...nodeDefaults 
        },
    ];

    export const design_edges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2'
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3'
        },
        {
            id: 'e3-4',
            source: '3',
            target: '4'
        },
        {
            id: 'e4-5',
            source: '4',
            target: '5'
        }
    ];
