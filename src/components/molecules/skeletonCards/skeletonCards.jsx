import './skeletonCard.css';

import { ThreeDots } from "react-loader-spinner";

const SkeletonCard = ({ loading }) => {


    return (
        <div className="skeletonDiv">

            <p className="skeletonP">Loading</p>
            <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ margin: '20px' }}
                wrapperClass="custom-loader"
                visible={loading}></ThreeDots>
        </div>
    )
}

export default SkeletonCard;