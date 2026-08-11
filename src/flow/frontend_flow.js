    //* NODES -  id, position{x: Num, y: Num}, data{label: ""}, type, ...nodeDefaults
    //* EDGES -  id (eNum-Num), source, target, animated, type

    import { Position } from "@xyflow/react";
    
    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    };  

    export const frontend_nodes = [     
        //NOT TO FORGET TO ADD SOME NEEDED SKILLS
        //NODES AND EDGES AMOUNT CAN BE CHANGED IN FUTURE
        
        {
            id: '1',
            position: { x: -250, y: 0 },
            data: { 
                label: 'Direction: frontend',
                link: ''
             },
            type: 'default_node',
            ...nodeDefaults
        },
        {
            id: '2',
            position: { x: 0, y: 0 },
            data: { 
                label: 'Useful resources:',
             },
            type: 'default_node',
            ...nodeDefaults
        },
        {
            id: '3',
            position: { x: 300, y: -100  },
            data: { 
                label: 'resource 1',
                link: ''
             },
            type: 'link_node',
            ...nodeDefaults
        },
        {
            id: '4',
            position: { x: 300, y: 0 },
            data: { 
                label: 'resource 2',
                link: ''
             },
            type: 'link_node',
            ...nodeDefaults
        },
        {
            id: '5',
            position: { x: 300, y: 100 },
            data: { 
                label: 'resource 3',
                link: ''
             },
            type: 'link_node',
            ...nodeDefaults
        },
        {
            id: '6',
            position: { x: 0, y: 400 },
            data: { 
                label: 'Needed skills:',
             },
            type: 'default_node',
            ...nodeDefaults
        },
        {
            id: '7',
            position: { x: 200, y: 400 },
            data: { 
                label: 'skills list 1',
             },
            type: 'default_node',
            ...nodeDefaults
        },
        {
            id: '8',
            position: { x: 400, y: 400 },
            data: { 
                label: 'skills list 2',
             },
            type: 'default_node',
            ...nodeDefaults
        },
        {
            id: '9', 
            position: { x: 650, y: 100 },
            data: { 
                label: 'Your vacancies:',
             },
            type: 'default_node',
            ...nodeDefaults
        },
        {
            id: '10',
            position: { x: 950, y: 0},
            data: { 
                label: 'vacancie 1',
                link: ''
             },
            type: 'link_node',
            ...nodeDefaults
        },
        {
            id: '11',
            position: { x: 950, y: 100 },
            data: { 
                label: 'vacancie 2',
                link: ''
             },
            type: 'link_node',
            ...nodeDefaults
        },
        {
            id: '12',
            position: { x: 950, y: 200 },
            data: { 
                label: 'vacancie 3',
                link: ''
             },
            type: 'link_node',
            ...nodeDefaults
        }
    ];

    export const frontend_edges = [
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
            id: 'e5-9',
            source: '5',
            target: '9'
        },
        {
            id: 'e1-6',
            source: '1',
            target: '6'
        },
        {
            id: 'e6-7',
            source: '6',
            target: '7'
        },
        {
            id: 'e7-8',
            source: '7',
            target: '8'
        },
        {
            id: 'e8-9',
            source: '8',
            target: '9'
        },
        {
            id: 'e9-10',
            source: '9',
            target: '10'
        },
        {
            id: 'e9-11',
            source: '9',
            target: '11'
        },
        {
            id: 'e9-12',
            source: '9',
            target: '12'
        }
    ];