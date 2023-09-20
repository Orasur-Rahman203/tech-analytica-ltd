import React from 'react';
import { useParams } from 'react-router-dom';
import { ServicesAllData } from '../AllData/ServicesAllInfo';
import { t } from 'i18next';


const Servicespage = () => {
    const { id } = useParams();
    // let data = ServicesAllData[id];

    let ENdata = ServicesAllData.en[id];
    let BNdata = ServicesAllData.bn[id];
    

    return (
        <section className='pt-32 m-20 bg-White'>
            {
                localStorage.getItem("language") ==="en"
                ?
                <div className='text-center'>
                <i className='text-9xl'>{ENdata.icon}</i>
                <h2 className='sm:text-lg md:text-xl xl:text-2xl font-bold'>{ENdata.name}</h2>
                <p className='px-5 py-3 sm:text-semibold md:text-lg lg:text-xl font-semibold text-justify '>{ENdata.description}</p>
            </div>
                :
                <div className='text-center'>
                <i className='text-9xl'>{BNdata.icon}</i>
                <h2 className='sm:text-lg md:text-xl xl:text-2xl font-bold'>{BNdata.name}</h2>
                <p className='px-5 py-3 sm:text-semibold md:text-lg lg:text-xl font-semibold text-justify '>{BNdata.description}</p>
            </div>
            }
        </section>
    );
};

export default Servicespage;