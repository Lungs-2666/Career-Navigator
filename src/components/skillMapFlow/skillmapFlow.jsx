    'use client'
    
    import './skillmapFlow.css';
    import { useState, useCallback, useEffect } from 'react';
    import { 
        ReactFlow,
        Background,
        applyNodeChanges,
        applyEdgeChanges,
        Handle,
        Position,
        Controls,
        useReactFlow,
        ReactFlowProvider
    } from '@xyflow/react';
    import '@xyflow/react/dist/style.css';
    import LinkNode from './linkNode';
    import DefaultNode from './defaultNode';

    import { frontend_edges, frontend_nodes } from '@/flow/frontend_flow';
    import { backend_edges, backend_nodes } from '@/flow/backend_flow';
    import { design_edges, design_nodes } from '@/flow/design_flow';

    const FirstNode = ({ data }) => {
        const [direct, setDirect] = useState(null);

        return (
            <div className='first_node'>
                {data.label}

                <div className='select_group'>
                    <select
                        name="direction_select"
                        className='direction_select'
                        id="flow_select"
                        onChange={(e) => {setDirect(e.target.value)}}
                        required
                    >
                        <option value="frontend"> Frontend   </option>
                        <option value="backend">  Backend    </option>
                        <option value="design">   Web-Design </option>  
                    </select>

                    <button onClick={ () => {data.onDirectChange(direct) } } className='first_node_btn'> Continue </button>
                </div>
            </div>
        )
    }

    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    };

    const nodeTypes = {
        first_node: FirstNode,
        link_node: LinkNode,
        default_node: DefaultNode
    }

    function Flow(){
        const { fitView } = useReactFlow();

        const onDirectChange = ( selected ) => {
            console.log(selected);

            if ( selected == 'frontend' ){
                setEdges(frontend_edges);
                setNodes(frontend_nodes);
            } else if ( selected == 'backend' ){
                setEdges(backend_edges);
                setNodes(backend_nodes);
            } else if ( selected == 'design' ){
                setEdges(design_edges);
                setNodes(design_nodes);
            }

            requestAnimationFrame(() => {
                fitView({ padding: 0.2, duration: 300 });
            });
        };

        const [ nodes, setNodes ] = useState([
            {
                id: '1',
                position: {x: -200, y: 0},
                data: { 
                    label: "Choose your direction:",
                    onDirectChange
                },
                type: 'first_node',
                ...nodeDefaults 
            }
        ]);
        const [ edges, setEdges ] = useState([]);


        return (
            <div className='main_flow' style={{height: '100%', width: '100%'}}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}   
                    nodeTypes={nodeTypes}
                    colorMode='dark'
                    panOnDrag={false}
                    panOnScroll={false}
                    fitView
                >
                    <Background 
                        bgColor='#ffffff'
                    />
                    <Controls position='right bottom'/>
                </ReactFlow>
            </div>
        );
    };

    export default function SkillMapFlow(){
        return (
            <ReactFlowProvider>
                <Flow />
            </ReactFlowProvider>
        )
    }
