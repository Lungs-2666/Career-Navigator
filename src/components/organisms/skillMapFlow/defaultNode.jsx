    //'use client'

    import './skillmapFlow.css';
    import { Handle, Position } from '@xyflow/react';

    export default function DefaultNode({ data }){
        return (
            <div className='default_node'>
                <Handle type='target' position={Position.Left}/>

                <p className='default_node_label'> {data.label} </p>

                <Handle type='source' position={Position.Right}/>
            </div>
        )
    }