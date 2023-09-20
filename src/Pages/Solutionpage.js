import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link as SLink } from 'react-scroll'
import { allSolution } from '../AllData/SolutionAllInfo';
import { t } from 'i18next';
// import { AuthContext } from '../Layout/Context/Context';
// import translation from "../img/translationLogo22.jpg";

const Solutionpage = () => {
    const { id } = useParams();
    let ENsolutionData = allSolution.en[id];
    let BNsolutionData = allSolution.bn[id];
    // const [open, setOpen] = useState(false);



    return (
        <section className='pt-32 m-20 bg-White'>
            {
                localStorage.getItem("language") === "en"
                    ?
                    <div className='text-center '>
                        <i className='text-9xl font-bold pt-16'>{ENsolutionData.icon}</i>
                        <h1 className='sm:text-lg md:text-xl xl:text-2xl font-bold'>{ENsolutionData.name}</h1>
                        <p className='px-5 py-3 sm:text-semibold md:text-lg lg:text-xl font-semibold text-justify'>{t(ENsolutionData.description)}</p>
                    </div>
                    :
                    <div className='text-center'>
                        <i className='text-9xl font-bold pt-16'>{BNsolutionData.icon}</i>
                        <h1 className='sm:text-lg md:text-xl xl:text-2xl font-bold'>{BNsolutionData.name}</h1>
                        <p className='px-5 py-3 sm:text-semibold md:text-lg lg:text-xl font-semibold text-justify'>{t(BNsolutionData.description)}</p>
                    </div>

            }

        </section>
    );
};

export default Solutionpage;