    // 'use client'
    import './skillmapFlow.css';
    import Link from 'next/link';

    import { Handle, Position } from '@xyflow/react';
    
    export default function LinkNode({ data }){
        return (
            <div className="link_node">
                <Handle type='target' position={Position.Left}/>

                <p className='link_node_label'> {data.label} </p>
                
                <Link href={data.link} className='link_node_link'> Watch {">"} </Link>

                <Handle type='source' position={Position.Right}/>
            </div>
        )
    };
