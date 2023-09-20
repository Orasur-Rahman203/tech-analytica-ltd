import React from 'react';
import vision2 from '../../img/vision.png'

const OurProduct = () => {
    return (
        <div className='bg-our shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mx-4 my-5 xl:my-12'>
            <div className='text-center my-28 sm:mx-20 md:mx-32 lg:mx-36 pt-5'>
                <h1 className='p-3'><b>Download our Mobile App</b><br /> to take care of your mental health</h1>
            </div>

            <div className='place-self-center'>
                {/* <img src={visionPhoto}></img> */}
                {/* <img className='w-full rounded-2xl'  src={vision2}></img> */}
                <img src={vision2}></img>
           

            </div>
        </div>
    );
};

export default OurProduct;