import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/tallogo_low.png';
import { Link as SLink } from 'react-scroll';
// import { Link as SLink1 } from 'react-scroll'
import i18next, { t } from 'i18next';
import { AuthContext } from '../../Layout/Context/Context';
// import translation from "../../img/translationLogo22.jpg";
// import { current } from 'daisyui/src/colors';

//color code: light #143943


const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("bn");
  const { t, handleChange } = useContext(AuthContext);

  useEffect(() => {
    const setLang = localStorage.getItem("language");
  }, [lang]);

  // useEffect(() => {
  //   const urlHash = window.location.hash;
  //   console.log(urlHash);
  //   if (urlHash.length) {
  //     const element = document.getElementById(urlHash.substring(1));
  //     if (element) {
  //       element.scrollIntoView();
  //     }
  //   }
  // }, []);

  return (
    <div>
      {
        ('/' === pathname) ?
          <div className="navbar fixed top-0"  style={{background: 'linear-gradient(180deg, rgba(34,92,108,1) 5%, rgba(5,15,18,1) 94%)', zIndex:3}}>
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="lg:hidden text-White">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-20 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0}  className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-teal">
                  <li><SLink className='text-White' onClick={() => setOpen(!open)} to="home" smooth={true} offset={-100} duration={1000}>{t("headers_Home")}</SLink></li>
                  <li><SLink className='text-White' onClick={() => setOpen(!open)} to="about" smooth={true} offset={-100} duration={1000}>{t("headers_About")}</SLink></li>
                  <li><SLink className='text-White' onClick={() => setOpen(!open)} to="solution" smooth={true} offset={-100} duration={1000}>{t("headers_Solution")}</SLink></li>
                  <li><SLink className='text-White' onClick={() => setOpen(!open)} to="services" smooth={true} offset={-100} duration={1000}>{t("headers_Services")}</SLink></li>
                  <li><SLink className='text-White' onClick={() => setOpen(!open)} to="contact" smooth={true} offset={-100} duration={1000}>{t("headers_Contact")}</SLink></li>
                </ul>
              </div>
              <SLink to='home' smooth={true} offset={-100} duration={1000}><img className='rounded-5 lg:w-72 md:w-64 m-2 cursor-pointer sm:w-56' src={logo} alt='' /></SLink>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal pt-20 ml-52">
                <li><SLink className='text-White' onClick={() => setOpen(!open)} to="home" smooth={true} offset={-100} duration={1000}>{t("headers_Home")}</SLink></li>
                <li><SLink className='text-White' onClick={() => setOpen(!open)} to="about" smooth={true} offset={-100} duration={1000}>{t("headers_About")}</SLink></li>
                <li><SLink className='text-White' onClick={() => setOpen(!open)} to="solution" smooth={true} offset={-100} duration={1000}>{t("headers_Solution")}</SLink></li>
                <li><SLink className='text-White' onClick={() => setOpen(!open)} to="services" smooth={true} offset={-100} duration={1000}>{t("headers_Services")}</SLink></li>
                <li><SLink className='text-White' onClick={() => setOpen(!open)} to="contact" smooth={true} offset={-100} duration={1000}>{t("headers_Contact")}</SLink></li>
              </ul>
            </div>
            <div className='mx-10 navbar-end pt-20'>
              {
                (lang === "en") ?
                  <button
                    className='text-White'
                    onClick={() => {
                      handleChange("en");
                      setLang("bn");
                      localStorage.setItem("language", lang)
                    }}
                  >ENGLISH</button>
                  :
                  <button
                    className='text-White'
                    onClick={() => {
                      handleChange("bn");
                      setLang("en");
                      localStorage.setItem("language", lang)
                    }}
                  >বাংলা</button>
              }
            </div>
          </div>
          :
          <div className="navbar fixed top-0" style={{background: 'linear-gradient(180deg, rgba(34,92,108,1) 5%, rgba(5,15,18,1) 94%)', zIndex:3}}>
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="lg:hidden text-White">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-20 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal rounded-box w-52">

                  <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#home" smooth={true} offset={-100} duration={1000}>{t("headers_Home")}</Link></li>

                  <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#about" smooth={true} offset={-100} duration={1000}>{t("headers_About")}</Link></li>

                  <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#solution" smooth={true} offset={-100} duration={1000}>{t("headers_Solution")}</Link>
                  </li>

                  <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#services" smooth={true} offset={-100} duration={1000}>{t("headers_Services")}</Link></li>

                  <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#contact" smooth={true} offset={-100} duration={1000}>{t("headers_Contact")}</Link></li>
                </ul>
              </div>
              <Link to='/' smooth={true} offset={-100} duration={1000}><img className='rounded-5 lg:w-72 md:w-64 m-2 cursor-pointer sm:w-56' src={logo} alt='' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal  pt-20 ml-52">
                <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#home" smooth={true} offset={-100} duration={1000}>{t("headers_Home")}</Link></li>

                <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#about" smooth={true} offset={-100} duration={1000}>{t("headers_About")}</Link></li>

                <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#solution" smooth={true} offset={-100} duration={1000}>{t("headers_Solution")}</Link>
                </li>

                <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#services" smooth={true} offset={-100} duration={1000}>{t("headers_Services")}</Link></li>

                <li><Link className='text-White' onClick={() => setOpen(!open)} to="/#contact" smooth={true} offset={-100} duration={1000}>{t("headers_Contact")}</Link></li>
              </ul>
            </div>
            <div className='mx-10 navbar-end pt-20'>
              {
                (lang === "en") ?
                  <button
                    className='text-White'
                    onClick={() => {
                      handleChange("en");
                      setLang("bn");
                      localStorage.setItem("language", lang)
                    }}
                  >ENGLISH</button>
                  :
                  <button
                    className='text-White'
                    onClick={() => {
                      handleChange("bn");
                      setLang("en");
                      localStorage.setItem("language", lang)
                    }}
                  >বাংলা</button>
              }
            </div>
          </div>
      }
    </div>

    // <div className='shadow-md w-full fixed top-0 ' style={{zIndex:3}} >
    //   <div className='sm:flex  py-4 px-7 sm:px-10 items-center justify-between' style={{background: 'linear-gradient(180deg, rgba(34,92,108,1) 5%, rgba(5,15,18,1) 94%)',
    // }}>
    //     <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-White'>
    //       <SLink to='home' smooth={true} offset={-100} duration={1000}><img className='w-48 md:w-36 xl:w-48 rounded-5 ' src={logo} alt='' /></SLink>
    //     </div>
    //     <div onClick={() => setOpen(!open)} className='text-3xl text-White absolute left-6 bottom-2 cursor-pointer sm:hidden bg:hidden'>
    //       <ion-icon name={open ? "close" : "menu"}></ion-icon>
    //     </div>
    //     {
    //       ('/' === pathname) ?
    //         <ul className={`sm:flex sm:items-center sm:pb-0 absolute sm:static  sm:z-auto left-0 w-full sm:w-auto sm:pl-0 pl-8 transition-all duration-500 ease-in ${open ? 'top-28 opacity-100':'top-[-490px]'} sm:opacity-100 `} >
    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'> <SLink className='text-White hover:text-green cursor-pointer'   onClick={() => setOpen(!open)} to="home" smooth={true} offset={-100} duration={1000}>{t("headers_Home")}</SLink></li>
    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'> <SLink className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="about" smooth={true} offset={-100} duration={1000}>{t("headers_About")}</SLink></li>
    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'> <SLink className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="solution" smooth={true} offset={-100} duration={1000}>{t("headers_Solution")}</SLink></li>
    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'> <SLink className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="services" smooth={true} offset={-100} duration={1000}>{t("headers_Services")}</SLink></li>
    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'> <SLink className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="contact" smooth={true} offset={-100} duration={1000}>{t("headers_Contact")}</SLink></li>
    //         </ul>
    //         :
    //         <ul className={`sm:flex sm:items-center sm:pb-0  absolute sm:static  sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-8 transition-all duration-500 ease-in ${open ? `top-28 opacity-100`:'top-[-490px]'} sm:opacity-100 `}>
    //           {/* <li><a href='#home'>Homepage</a></li> */}

    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'>
    //             <Link className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="/#home" smooth={true} offset={-100} duration={1000}>{t("headers_Home")}</Link>
    //           </li>

    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'>
    //             <Link className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="/#about" smooth={true} offset={-100} duration={1000}>{t("headers_About")}</Link>
    //           </li>

    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'>
    //             <Link className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="/#solution" smooth={true} offset={-100} duration={1000}>{t("headers_Solution")}</Link>
    //           </li>

    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'>
    //             <Link className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="/#services" smooth={true} offset={-100} duration={1000}>{t("headers_Services")}</Link>
    //           </li>

    //           <li className='sm:ml-7 xl:text-xl sm:my-0 my-6'>
    //             <Link className='text-White hover:text-green cursor-pointer' onClick={() => setOpen(!open)} to="/#contact" smooth={true} offset={-100} duration={1000}>{t("headers_Contact")}</Link>
    //           </li>
    //         </ul>
    //    }
    //     {/* button one  */}
    //     {/* <select className="select select-ghost max-w-xs text-White ml-6" name="language" onChange={handleChange}>
    //   <option value="en">ENGLISH</option>
    //   <option value="bn">বাংলা</option>
    // </select> */}
    //     {/* button two  */}
    //     {/* <img src={translation} alt="" className='sm:w-4 md:w-8 xl:w-12  rounded-full '></img> */}
    //     <div className='mx-10'>
    //       {
    //         (lang === "en") ?
    //           <button
    //             className='text-White'
    //             onClick={() => {
    //               handleChange("en");
    //               setLang("bn");
    //               localStorage.setItem("language", lang)
    //             }}
    //           >ENGLISH</button>
    //           :
    //           <button
    //             className='text-White'
    //             onClick={() => {
    //               handleChange("bn");
    //               setLang("en");
    //               localStorage.setItem("language", lang)
    //             }}
    //           >বাংলা</button>
    //       }
    //     </div>

    //   </div>
    // </div>
  );
};

export default Header;