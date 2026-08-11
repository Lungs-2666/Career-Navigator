    import { Position } from "@xyflow/react";
    
    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    };

    export const design_nodes = [     //NOT TO FORGET TO ADD SOME NEEDED SKILLS
        {
            id: '1',
            position: { x: -200, y: 0 },
            data: { label: 'Direction: web-design' },
            type: '',
            ...nodeDefaults
        },
        {
            id: '2',
            position: { x: 0, y: 0 },
            data: { label: 'Useful resources:' },
            type: '',
            ...nodeDefaults
        },
        {
            id: '3',
            position: { x: 200, y: 0  },
            data: { label: 'resource 1' },
            type: '',
            ...nodeDefaults
        },
        {
            id: '4',
            position: { x: 200, y: 100 },
            data: { label: 'resource 2' },
            type: '',
            ...nodeDefaults
        },
        {
            id: '5',
            position: { x: 200, y: 200 },
            data: { label: 'resource 3' },
            type: '',
            ...nodeDefaults
        },
        {
            id: '6',
            position: { x: 400, y: 200 },
            data: { label: 'Your vacancies:' },
            type: '',
            ...nodeDefaults
        },
        {
            id: '7',
            position: { x: 600, y: 200},
            data: { label: 'vacancie 1' },
            type: '',
            ...nodeDefaults
        },
        {
            id: '8',
            position: { x: 600, y: 300 },
            data: { label: 'vacancie 2' },
            type: '',
            ...nodeDefaults
        },
        {
            id: '9',
            position: { x: 600, y: 400 },
            data: { label: 'vacancie 3' },
            type: '',
            ...nodeDefaults
        }
    ];

    export const design_edges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            //animated: ''
            //type: ''
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3'
        },
        {
            id: 'e2-4',
            source: '2',
            target: '4'
        },
        {
            id: 'e2-5',
            source: '2',
            target: '5'
        },
        {
            id: 'e5-6',
            source: '5',
            target: '6'
        },
        {
            id: 'e6-7',
            source: '6',
            target: '7'
        },
        {
            id: 'e6-8',
            source: '6',
            target: '8'
        },
        {
            id: 'e6-9',
            source: '6',
            target: '9'
        }
    ];