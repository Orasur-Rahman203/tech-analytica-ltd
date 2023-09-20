import React, { useContext } from 'react';
import bgPhoto from '../../img/worldmap.png';
import visionPhoto from '../../img/about.png'
import vision from '../../img/18349.jpg'
import vision2 from '../../img/vision.png'
import { t } from 'i18next';
import { AuthContext } from '../../Layout/Context/Context';


const About = () => {
    const {t}=useContext(AuthContext);
    return (

         <div id='about' className='my-28 sm:mx-12 md:mx-16 lg:mx-20 pt-5 bg-White'>
         <div className="bg-contain bg-repeat my-6" style={{ backgroundImage: `url(${bgPhoto})` }}>
           <h1 className='font-bold sm:text-3xl md:text-4xl lg:text-5xl pt-6 text-center text-slate1'>{t("about")}</h1>
           <p className='p-4 sm:text-semibold md:text-lg lg:text-xl  text-justify'>{t("about_details1")}</p>
           <p className='p-4 sm:text-semibold md:text-lg lg:text-xl text-justify'>{t("about_details2")}</p>
           <p className='p-4 sm:text-semibold md:text-lg lg:text-xl text-justify'>{t("about_details3")}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mx-4 my-5 xl:my-12'>
            <div className='bg-logo'>
                 {/* <img src={visionPhoto}></img> */}
                 {/* <img className='w-full rounded-2xl'  src={vision2}></img> */}
                 <img src={vision2}></img>
                 
            </div>
            <div className='rounded-xl' style={{background:'linear-gradient(180deg, rgba(34,92,108,1) 5%, rgba(5,15,18,1) 94%)'}}>
                <h1 className='font-semibold sm:text-2xl md:text-3xl lg:text-4xl text-White pt-6 text-center'>{t("our_vision")}</h1>
            <p className='px-5 py-3 sm:text-semibold md:text-lg lg:text-xl text-justify text-Slate'>{t("our_vision_details")}</p>
            </div>
        </div>
       </div>
    );
};

export default About;