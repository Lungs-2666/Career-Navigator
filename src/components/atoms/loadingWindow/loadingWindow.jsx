import './loadingWindow.css'
import { TailSpin } from 'react-loader-spinner';

const LoadingWindow = () => {


    return (
        <div className='loadingWindow'>
            <div className='spinContainer'>
                <TailSpin
                    height='80'
                    width='80'
                    color='#406354'
                    ariaLabel="tail-spin-loading"
                    visible={true}
                ></TailSpin>
            </div>
            <div className='loadingTxtContainer'>
                <p className='loadingTxt'>Загрузжаем данные...</p>
            </div>
        </div>
    )
}

export default LoadingWindow;