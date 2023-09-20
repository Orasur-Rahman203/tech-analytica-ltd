import { t } from 'i18next';
import React, { useContext} from 'react';
import { AuthContext } from '../../Layout/Context/Context';
import TAL from '../../img/hero-img.png';



const Home = () => {
    const {t}=useContext(AuthContext);

    return (
         <div id='home' className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 my-32 sm:mx-16 md:mx-24 lg:mx-28 pt-5 lg:gap-6 md:gap-4 bg-White'>
         <div className='grid h-auto place-items-center grid-cols-row' style={{zIndex:1}}>
            <p className='font-semibold text-center  md:text-4xl lg:text-5xl my-6'>{t("home_title")}</p>
        </div>
        <div style={{webkitAnimation: 'slide-bottom 5000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate both',
    }}>
            <img style={{borderRadius: '30%',
        }} src={TAL} alt="Avatar"></img>
        </div>
       </div>
    );
};
 
export default Home;