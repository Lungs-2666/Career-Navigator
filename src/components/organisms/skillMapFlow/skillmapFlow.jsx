    'use client'
    
    import './skillmapFlow.css';
    import { useState, useCallback, useEffect } from 'react';
    import { useRouter } from 'next/navigation';
    import { useAccount } from '@/context/accountProvider';
    import { 
        ReactFlow,
        Background,
        useNodesState,
        useEdgesState,
        Position,
        Controls,
        useReactFlow,
        ReactFlowProvider
    } from '@xyflow/react';
    import '@xyflow/react/dist/style.css';
    import LinkNode from './linkNode';
    import DefaultNode from './defaultNode';
    import SkillsNode from './skillsNode';

    import { frontend_edges, frontend_nodes } from '@/flow/frontend_flow';
    import { backend_edges, backend_nodes } from '@/flow/backend_flow';
    import { design_edges, design_nodes } from '@/flow/design_flow';
    import { devops_edges, devops_nodes } from '@/flow/devops_flow';

    const nodeDefaults = {
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    };

    const nodeTypes = {
        link_node: LinkNode,
        default_node: DefaultNode,
        skills_node: SkillsNode
    }

    function Flow(){
        const { user, loading } = useAccount();
        const { fitView } = useReactFlow();
        const router = useRouter();

        const [ nodes, setNodes, onNodesChange ] = useNodesState([]);
        const [ edges, setEdges, onEdgesChange ] = useEdgesState([]);

        useEffect(() => {
            if(loading || !user){
                return;
            }

            if(user.direction === 'frontend'){
                setNodes(frontend_nodes);
                setEdges(frontend_edges);
            }else if(user.direction === 'backend'){
                setNodes(backend_nodes);
                setEdges(backend_edges);
            }else if(user.direction === 'web-design'){
                setNodes(design_nodes);
                setEdges(design_edges);
            }else if(user.direction === 'devops'){
                setNodes(devops_nodes);
                setEdges(devops_edges);
            };
        }, [user, loading, setNodes, setEdges]);

        useEffect(() => {
            if (nodes.length === 0) {
                return;
            }

            requestAnimationFrame(() => {
                fitView({
                    padding: 0.2,
                    duration: 300,
                });
            });
        }, [nodes, fitView]);


        useEffect(() => {
            if(!loading && !user){
                router.push('/login');
            }
        }, [user, loading, router]);

        if (loading || !user) {
            return <div>Loading...</div>;
        }

        return (
            <div className='main_flow' style={{height: '100%', width: '100%'}}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}   
                    nodeTypes={nodeTypes}
                    colorMode='dark'
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodesDraggable={false}
                    // panOnDrag={false}
                    // panOnScroll={false}
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
