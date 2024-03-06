import DefaultLayout from "../layouts/Default";
import Register from "../components/register-form/Register";
import Login from "../components/login-form/Login";

const indexRoutes = [{ path: "*", component: DefaultLayout }];

const AppRoutes = [
  { path: "/", component: Register },
  {
    path: "/register",
    name: "ثبت نام",
    component: Register,
  },
  {
    path: "/login",
    name: "ورود",
    component: Login,
  },
  
];
export default AppRoutes;

export { indexRoutes };
