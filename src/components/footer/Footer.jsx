import React from "react";
import { IoLogoInstagram,IoLogoYoutube,IoLogoWhatsapp,IoIosPaperPlane } from 'react-icons/io'

const Footer = () => {
  return (
  <>
  <footer>
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">

          <div className="footer-brand-text">
              <h1>درباره ما</h1>
              <p className="footer-text">
                بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
                است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
                دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد</p>
          </div>

          <div className="footer-input">
            <h1>خبرنامه</h1>
            <div className="footer-input-wrapper">
              <input type="text"  />
              <button>عضویت</button>
            </div>
          </div>
          
        </div>

        <hr />
        <div className="footer-link-box">

          <div className="social-list-wrapper">

            <h1>ارتباط با ما</h1>
            <p>iwillbemyvision@gmail.com</p>
            <p>amir.azhkan@yahoo.com</p>

            

            <ul className="social-list">
               <li>
                <a  className="social-link">
                 <IoLogoInstagram
                  color={'#fff'} 
                  height="25px"
                  width="25px"
                /> 
                </a>
              </li>

              <li>
                <a  className="social-link">
                   <IoLogoYoutube
                    color={'#fff'} 
                    height="25px"
                    width="25px"
                  /> 
                </a>
              </li>

              <li>
                <a  className="social-link">
                 <IoLogoWhatsapp
                  color={'#fff'} 
                  height="25px"
                  width="25px"
                /> 
                </a>
              </li>

              <li>
                <a  className="social-link">
                 <IoIosPaperPlane
                  color={'#fff'} 
                  height="25px"
                  width="25px"
                /> 
                </a>
              </li>

            </ul>

          </div>

          <ul className="footer-list">

            <li>
              <p className="footer-item-title">همراه باشید</p>
            </li>

            <li>
              <a  className="footer-link">سوالات رایج</a>
            </li>

            <li>
              <a  className="footer-link">قوانین</a>
            </li>

            <li>
              <a  className="footer-link">خدمات</a>
            </li>

          </ul>

         <div className="enamad-brands">
          <div className="enamad-brand-wrapper">
            <img src={require("../../assets/images/NoPath.png")} alt="" />
          </div>  

          <div className="enamad-brand-wrapper">
            <img src={require("../../assets/images/samandehi-pacharmi-logo-400x40.png")} alt="" />
          </div> 

          <div className="enamad-brand-wrapper">
            <img src={require("../../assets/images/enamad_icon_text_color_blue_10.png")} alt="" />
          </div> 
          
         </div>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
        کليه حقوق محصولات و محتوای اين سایت متعلق به <a>بامبو</a> می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
        </p>
      </div>
    </div>

  </footer>
  </>
  );
};

export default Footer;
