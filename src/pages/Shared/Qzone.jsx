import React from 'react';
import QzoneImg1 from '../../assets/qZone1.png'
import QzoneImg2 from '../../assets/qZone2.png'
import QzoneIm3 from '../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='py-5 rounded bg-secondary text-center my-5'>
            <img className='my-2' src={QzoneImg1} alt="" />
            <img className='my-2' src={QzoneImg2} alt="" />
            <img className='my-2' src={QzoneIm3} alt="" />
        </div>
    );
};

export default Qzone;