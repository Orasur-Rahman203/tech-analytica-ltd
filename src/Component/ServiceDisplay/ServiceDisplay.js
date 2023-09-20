import React from 'react';
import { useParams } from 'react-router-dom';
import { ServicesAllData } from '../../AllData/ServicesAllInfo';


const ServiceDisplay = () => {
    const { id } = useParams();
    console.log(id);
    const servicesData = ServicesAllData[id];
    return (
        <div className='mt-40'>
            <h1>Every single services ServicesCart</h1>
            {servicesData.name}
        </div>
    );
};

export default ServiceDisplay;



