import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { allSolution } from '../../AllData/SolutionAllInfo';
import { t } from 'i18next';
import { AuthContext } from '../../Layout/Context/Context';



const Solution = () => {
    // const {t}=useContext(AuthContext);

    return (
    <div id='solution' className='my-24 sm:mx-12 md:mx-16 lg:mx-20  pt-2 bg-White'>
    <h1 className='font-bold  my-6 text-center  md:text-4xl lg:text-5xl pt-6 text-slate1'>{t("solution")}</h1>   
    <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-5'>  
        {
            localStorage.getItem("language") === "en"
            ?
        allSolution.en.map(solution=><Cart
        key={solution.id}
        solution={solution}
        ></Cart>)
        :
        allSolution.bn.map(solution=><Cart
            key={solution.id}
            solution={solution}
            ></Cart>)
        }   
</div> 
</div>
);
};

export default Solution;