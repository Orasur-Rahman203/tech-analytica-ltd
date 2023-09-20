import i18n, { use } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tBn from "../../locales/bn/Translation.json";
import tEn from "../../locales/en/Translation.json";
// import ParticlesBackground from './Component/ParticlesBackground/ParticlesBackground';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: tEn
      },
      bn: {
        translation: tBn
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
  

const Context = ({ children }) => {
  const { t } = useTranslation();

  
  
  const handleChange = (event) => {
    // console.log(event.target.value);
    i18n.changeLanguage(event);
  }

  // const handleChangeSolution = (event) => {
  //   // console.log(event.target.value);
  //   i18n.changeLanguage(event);
  // }


  // const handleChangeServices = (event) => {
  //   // console.log(event.target.value);
  //   i18n.changeLanguage(event);
  // }
 
  // const onChange=(event)=>{
  // console.log(event);
  //   i18n.changeLanguage(event)
  // }
  // const AuthInfo={handleChange};

  return (
    <AuthContext.Provider value={{t, handleChange}}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;