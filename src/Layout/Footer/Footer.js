import React from 'react';
import ecab from '../../img/ecab.png';
import basis from '../../img/basis.svg';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center px-8 bg-Neutral py-16">
      <div>
        <p className='font-black text-4xl mt-6 text-original'>{t("footer_title")}</p>
      </div>
      <div className='pt-5'>
        <p className='text-2xl '>{t("member_of")}</p>
        <div className='flex'>
          <p><img className='h-11' src={ecab}></img></p>
          <p><img className='h-10' src={basis}></img></p>
        </div>
        <div id='social-Media' className="grid grid-flow-col gap-4 pb-10 text-center">
          <a className='text-base bg-cayn ease-in duration-300 hover:bg-teal text-WhiteF hover:text-White w-10 h-9 pt-2 rounded' href='https://www.facebook.com/techanalyticaltd' target={'_blank'}><i class="fa-brands fa-facebook-f"></i></a>

          <a className='text-base bg-cayn ease-in duration-300 hover:bg-teal text-WhiteF hover:text-White w-10 h-9 pt-2 rounded' href='https://www.youtube.com/channel/UC3gJ3prQiT0rAPr_c9775DA' target={'_blank'}><i class="fa-brands fa-youtube"></i></a>

          <a className='text-base bg-cayn ease-in duration-300 hover:bg-teal text-WhiteF hover:text-White w-10 h-9 pt-2 rounded' href='https://twitter.com/AnalyticaTech' target={'_blank'}><i class="fa-brands fa-twitter"></i></a>

          <a className='text-base bg-cayn ease-in duration-300 hover:bg-teal text-WhiteF hover:text-White w-10 h-9 pt-2 rounded' href='https://www.linkedin.com/company/tech-analytica-limited/mycompany/' target={'_blank'}><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className=' text-original border-t w-full border-cayn'>
        <p className='pt-12'>{t("Copyright")}<strong><span>{t("Tech_Analytica_Limited")}</span></strong>({t("version_1")}) {t("All_Rights_Reserved")}</p>
      </div>
    </footer>
  );
};

export default Footer;