    import './skillmapPrev.css';
    import Link from 'next/link';

    const SkillmapPreview= () => {
        return (
            <div className='skillmap_preview'>
                <div className='skillmap_preview_bg'></div>

                    <Link 
                        href='/skillmap'
                        className='skillmap_preview_link'
                    >
                        Skillmap {">>"} 
                    </Link>

                    <div className='skillmap_preview_text'>
                        <h3> Advance and improve your skills with our new skillmap system </h3>
                        <p>
                            Interactive visual roadmaps that guide your learning,
                            highlight your next steps,
                            and help you track progress as you grow.
                        </p>
                    </div>
            </div>
        )
    }

    export default SkillmapPreview;