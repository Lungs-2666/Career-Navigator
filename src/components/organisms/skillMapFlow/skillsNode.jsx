    'use client'
    
    import { useState } from 'react';
    import './skillmapFlow.css';
    import Link from 'next/link';
    import { Handle, Position } from '@xyflow/react';

    const SkillsNode = ({ data }) => {
        const [ listItems, setListItems ] = useState(data.items);

        return (
            <div className='skills_node'>
                <Handle type='target' position={data?.handle_target || Position.Left}/>
                
                <p 
                    className='skills_node_label'
                    style={{color: `${data.label_color}`}}
                >
                    {data.label}
                </p>

                <ul className='skills_node_list'>
                    {listItems.map((item, index) => {
                        return (
                            <li key={index} className='node_list_item'>
                                {item}
                            </li>
                        )
                    })}
                </ul>

                <Handle type='source' position={ data?.handle_source || Position.Right}/>
            </div>
        );
    }

    export default SkillsNode;