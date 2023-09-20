import React, { useContext } from 'react';
import privacyProtection from '../../img/00000.png';
import ServicesCart from '../../Component/ServicesCart/ServicesCart';
import { ServicesAllData } from '../../AllData/ServicesAllInfo';
import { t } from 'i18next';

const Services = () => {

  return (
      <div id='services' className='my-24 sm:mx-12 md:mx-16 lg:mx-20  pt-2 bg-White'>
        <h3 className='font-bold my-6 text-center md:text-4xl lg:text-5xl pt-6 text-slate1'>{t("services")}</h3>
        {/* Services section start  */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-5'>

          {

            localStorage.getItem("language") === "en"
              ?
              ServicesAllData.en.map(services =>
                <ServicesCart
                  key={services.id}
                  services={services} />
              ) :
              ServicesAllData.bn.map(services =>
                <ServicesCart
                  key={services.id}
                  services={services} />
              )
          }
        </div>
        {/* Services section end */}


        {/* Privacy protection section start */}
        <div className="bg-contain bg-repeat mt-10 mx-4" style={{ backgroundImage: ` url(${privacyProtection})` }}>
          <h3 className='font-bold sm:text-2xl md:text-3xl lg:text-4xl mt-48 text-center pb-2 text-slate1'>{t("privacy_protection")}</h3>
          <div className='sm:text-semibold md:text-lg lg:text-xl text-justify'>
            <p>{t("privacy_protection_details")}</p><br />
            <div className='px-6'>
              <p> <i className="fa-regular fa-circle-check"></i>{t("privacy_protection_key1")}</p>
              <p> <i className="fa-regular fa-circle-check"></i>{t("privacy_protection_key2")}</p>
              <p> <i className="fa-regular fa-circle-check"></i>{t("privacy_protection_key3")}</p>
              <p> <i className="fa-regular fa-circle-check"></i>{t("privacy_protection_key4")}</p>
            </div>
          </div>
        </div>
        {/* Privacy protection section end */}
      </div>
  );
};

export default Services;