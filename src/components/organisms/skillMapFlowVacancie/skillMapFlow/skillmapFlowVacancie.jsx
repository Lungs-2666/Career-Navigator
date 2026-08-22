'use client'

import './skillmapFlow.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount } from '@/context/accountProvider';
import {
    ReactFlow,
    Background,
    useNodesState,
    useEdgesState,
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
};

function Flow({ vacancyId }) {
    const { user, loading } = useAccount();
    const { fitView } = useReactFlow();
    const router = useRouter();

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        console.log('--- ОТЛАДКА НА КЛИЕНТЕ ---');
        console.log('user:', !!user, 'loading:', loading, 'vacancyId:', vacancyId);
        if (loading || !user || !vacancyId) return;

        async function loadVacancyGraph() {
            try {
                const res = await fetch(`/api/vacancieGraph/${vacancyId}`);
                const data = await res.json();

                if (data.nodes && data.edges) {
                    setNodes(data.nodes);
                    setEdges(data.edges);
                }
            } catch (error) {
                console.log('Ошибка загрузки графа вакансии:', error);
            }
        }

        loadVacancyGraph();
    }, [user, loading, vacancyId, setNodes, setEdges]);

    // Центрирование камеры
    useEffect(() => {
        if (nodes.length === 0) return;
        requestAnimationFrame(() => {
            fitView({ padding: 0.2, duration: 300 });
        });
    }, [nodes, fitView]);

    // Защита роута
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
                fitView
            >
                <Background bgColor='#ffffff' />
                <Controls position='right bottom' />
            </ReactFlow>
        </div>
    );
}

export default function SkillMapFlow({ vacancyId }) {
    return (
        <ReactFlowProvider>
            <Flow vacancyId={vacancyId} />
        </ReactFlowProvider>
    );
}
