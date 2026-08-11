import GradientWaves from './wavesBg';

const WavesBgComponent = () => {
    return (
        <div className='gradient-waves-container'>
            <GradientWaves
                horizonColor="#35d891" //5227ff
                waveColor="#fff59f" //ff9ffc
                crestColor="#FFFFFF"
                speed={0.2}
                amplitude={2.5}
                waveScale={0.6}
                waveRatio={0.4}
                swell={35}
                turbulence={20}
                tilt={1.4}
                zoom={1}
                height={5.5}
                fogDepth={15}
                detail="medium"
                brightness={1}
                opacity={1}
                mouseInteraction={false}
                parallaxStrength={0.5}
                grain={false}
                grainIntensity={0.05}
            />
        </div>
    )
}

export default WavesBgComponent;