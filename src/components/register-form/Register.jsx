import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import { IoLogoInstagram,IoMdPaperPlane } from 'react-icons/io';
import { IoLogoWhatsapp,IoHomeOutline} from 'react-icons/io5';
import { FiYoutube } from 'react-icons/fi';
import logo from '../../assets/images/bamboo_c.png';
import styles from "./register.module.css";

import {DatePicker} from "react-advance-jalaali-datepicker";

export class Date extends React.Component {
    change(unix, formatted) {
      console.log(unix); // returns timestamp of the selected value, for example.
      console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }
    DatePickerInput(props) {
      return <input className="popo" {...props} />;
    }
    render() {
      return (
        <div className="datePicker">
          <DatePicker
            inputComponent={this.DatePickerInput}
            placeholder="انتخاب تاریخ"
            format="jYYYY/jMM/jDD"
            onChange={this.change}
            id="datePicker"
            preSelected=""
          />
        </div>
      )
    }
}    


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();
  const loginClick = () => navigate('/login');
  const homeClick = () => navigate('/');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.right}> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formTitle}>
              <h1>ثبت نام</h1>
            </div>
            <div className={styles.formControl}>
                <label>نام کاربری :</label>
                <input
                    type="text"
                    name="name"
                    {...register("name", {
                    required: true,
                    })}
                />
                {errors.name && errors.name.type === "required" && (
                    <p className={styles.errorMsg}>نام کاربری ضروری است!</p>
                )}
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
                    <p className={styles.errorMsg} >ایمیل ضروری است!</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                    <p className={styles.errorMsg}>ایمیل معتبر نیست!</p>
                )}
            </div>
            <div className={styles.formControl}>
            <label>شماره تلفن :</label>
            <input
                type="tel"
                name="telephone"
                {...register("telephone", {
                required: true,
                minLength: 11
                })}
            />
            {errors.telephone && (
                <p className={styles.errorMsg}>شماره تلفن معتبر نیست!</p>
            )}
            {errors.telephone && errors.telephone.type === "required" && (
                <p className={styles.errorMsg}>شماره تلفن ضروری است!</p>
            )}
            {errors.telephone && errors.telephone.type === "minLength" && (
                <p className={styles.errorMsg}>
            شماره تلفن باید شامل حداقل 11 کاراکتر باشد!
                </p>
            )}
            </div>

            <div className={styles.formControl}>
                <label>تاریخ تولد :</label>
                <Date />
            </div>

            <div className={styles.formControl}>
            <label>شماره ملی :</label>
            <input
                type="number"
                name="uniqueID"
                {...register("uniqueID", {
                required: true,
                })}
            />
            {errors.uniqueID && (
                <p className={styles.errorMsg}>شماره ملی معتبر نیست!</p>
            )}
            {errors.uniqueID && errors.uniqueID.type === "required" && (
                <p className={styles.errorMsg}>شماره ملی ضروری است!</p>
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
                <p className={styles.errorMsg}>رمز عبور ضروری است!</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
                <p className={styles.errorMsg}>
                رمز عبور باید حداقل شامل 6 کاراکتر باشد!</p>
            )}
            </div>
            <div className={styles.formControlSubmit}>
                <button onClick={loginClick}>ورود</button>
                <button type="submit">ثبت نام</button>
            </div>
        </form>
      </div> 


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

      <div className={styles.homeLogoContainer} onClick={homeClick}>
        <IconContext.Provider value={{ className: `${styles.iconLogo} ${styles.iconHome}`, size: "2em"}}>  
          <IoHomeOutline />
        </IconContext.Provider>  
      </div>

    </div>
  );
}
export default Register;