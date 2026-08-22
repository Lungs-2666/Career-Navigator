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



const nodeTypes = {
    link_node: LinkNode,
    default_node: DefaultNode,
    skills_node: SkillsNode
}

function Flow() {
    const { user, loading } = useAccount();
    const { fitView } = useReactFlow();
    const router = useRouter();

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);



    async function loadGraph() {
        try {
            const res = await fetch(`/api/graph?specialization=${user.direction}`);

            const data = await res.json();

            if (data.nodes && data.edges) {
                setNodes(data.nodes);
                setEdges(data.edges);
            }
        } catch (error) {
            console.log('ошибка загрузки файлов', error);
        }
    }

    useEffect(() => {
        if (loading || !user) {
            return;
        }
        loadGraph()


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
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='main_flow' style={{ height: '100%', width: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                colorMode='dark'
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                // panOnDrag={false}
                // panOnScroll={false}
                fitView
            >
                <Background
                    bgColor='#ffffff'
                />
                <Controls position='right bottom' />
            </ReactFlow>
        </div>
    );
};

export default function SkillMapFlow() {
    return (
        <ReactFlowProvider>
            <Flow />
        </ReactFlowProvider>
    )
}
