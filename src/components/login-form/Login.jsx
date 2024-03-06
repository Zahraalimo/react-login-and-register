import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import { IoLogoInstagram,IoMdPaperPlane } from 'react-icons/io';
import { IoLogoWhatsapp,IoHomeOutline} from 'react-icons/io5';
import { FiYoutube } from 'react-icons/fi';
import logo from '../../assets/images/bamboo_c.png';
import styles from "./login.module.css";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();
  const registerClick = () => navigate('/register');
  const homeClick = () => navigate('/');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.registerContainer}>
        <div className={styles.left}>

            <div className={styles.textContainer}>
                <h1>آکادمی آموزشی بامبو</h1>
                <img src={logo} alt="logo" />
                
            </div>  


            <hr/>
            <div className={styles.logoContainer}>
                <IconContext.Provider value={{ className: `${styles.iconLogo}`, size: "2em"}}>  
                    <IoMdPaperPlane/> 
                    <IoLogoInstagram/> 
                    <FiYoutube/> 
                    <IoLogoWhatsapp/> 
                </IconContext.Provider>  
            </div>

       </div>


      <div className={styles.right}> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formTitle">
              <h1>ورود کاربر</h1>
            </div>
            <div className={styles.formControl}>
                <label>ایمیل :</label>
                <input
                    type="text"
                    name="email"
                    {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                    })}
                />
                {errors.email && errors.email.type === "required" && (
                    <p className={styles.errorMsg}>ایمیل ضروری است!</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                      <p className={styles.errorMsg}>ایمیل معتبر نیست!  </p>
                )}
            </div>
  
            <div className={styles.formControl}>
            <label>رمز عبور :</label>
            <input
                type="password"
                name="password"
                {...register("password", {
                required: true,
                minLength: 6
                })}
            />
            {errors.password && errors.password.type === "required" && (
                <p className={styles.errorMsg} >رمز عبور ضروری است!</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
                <p className={styles.errorMsg}>
                رمز عبور باید حداقل شامل 6 کاراکتر باشد!</p>
            )}
            </div>
            <div className={styles.formControlSubmit}>
                <button onClick={registerClick}>ثبت نام</button>
                <button type="submit">ورود</button>
            </div>
        </form>
      </div> 

      <div className={styles.homeLogoContainer}  onClick={homeClick}>
        <IconContext.Provider value={{ className: `${styles.iconLogo} ${styles.iconHome}`, size: "2em"}}>  
          <IoHomeOutline />
        </IconContext.Provider>  
      </div>

    </div>
  );
}
export default Login;