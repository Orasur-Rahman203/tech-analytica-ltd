/* eslint-disable jsx-a11y/iframe-has-title */
import { t } from 'i18next';
import React, { useContext } from 'react';
import ReactPlayer from 'react-player'
import { AuthContext } from '../../Layout/Context/Context';
  
const Contact = () => {   
    // const {t}=useContext(AuthContext);
    return (
        <section id='contactpage'>
       <div id='contact' className='my-28 sm:mx-12 md:mx-16 lg:mx-20 pt-10 m-5 bg-White'>
            <h3 className='font-bold my-6 text-center sm:text-3xl md:text-4xl lg:text-5xl text-slate1'>{t("contact")}</h3>
            <div className='grid xl:grid-cols-9 gap-8'>
                <div className='xl:col-span-4 md:col-span-12 text-justify bg-contact border-y-4 border-teal'>
                <div className='flex m-5'>
                <div className='m-4'><i className="fa-solid fa-location-dot sm:text-2xl md:text-3xl lg:text-4xl"></i></div>
                <div>
                <h4 className='font-semibold sm:text-lg md:text-xl lg:text-2xl text-slate1'>{t("location")}</h4>
                <p className='sm:text-semibold md:text-lg lg:text-xl'>{t("location_details")}</p>
                </div>
                </div>
                <div className='flex m-5'>
                <div className='m-4'><i className="fa-solid fa-envelope sm:text-2xl md:text-3xl lg:text-4xl"></i></div>
                <div>
                <h4 className='font-semibold sm:text-lg md:text-1xl lg:text-2xl text-slate1'>{t("email")}</h4>
                <p className='sm:text-semibold md:text-lg lg:text-xl'><a href="mailto:info@techanalyticaltd.com">{t("email_details")}</a></p>
                </div>
                </div>
                <div className='flex m-5'>
                <div className='m-4'><i className="fa-solid fa-phone sm:text-2xl md:text-3xl lg:text-4xl"></i></div>
                <div>
                <h4 className='font-semibold sm:text-lg md:text-1xl lg:text-2xl text-slate1'>{t("call")}</h4>
                <p className='sm:text-semibold md:text-lg lg:text-xl'>+880248811161</p>
                <p className='sm:text-semibold md:text-lg lg:text-xl'>+880248811162</p>
                </div>
                </div>
                </div>
                <div className='xl:col-span-5 md:col-span-12'>

                    {/* <YoutubeEmbed
                    embedId={'mQPX0GPkes4'}
                    ></YoutubeEmbed> */}

                    <ReactPlayer width={`100%`}  url='https://www.youtube.com/watch?v=mQPX0GPkes4&t=1s' />
                </div>
            </div>
       </div>
       </section>
    );
};

export default Contact;