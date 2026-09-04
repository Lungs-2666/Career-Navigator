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
                        Карта навыков {">>"} 
                    </Link>

                    <div className='skillmap_preview_text'>
                        <h3> Развивайте и совершенствуйте свои навыки! </h3>
                        <p>
                            Интерактивные визуальные карты для продвижения, которые направляют ваше обучение,
                            подсказывают следующие шаги
                            и помогают отслеживать прогресс по мере вашего роста
                        </p>
                    </div>
            </div>
        )
    }

    export default SkillmapPreview;