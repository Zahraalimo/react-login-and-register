import "./assets/css/style.css";
import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import AppRoutes from './routes';

const App = () => (
  //this is app component
  <BrowserRouter>
        <Routes>
            {AppRoutes.map((prop, key) => {

              const MyComponent = prop.component;
              return (
                  <Route
                    path={prop.path}
                    key={key}
                    element={<MyComponent />}
                  />
              )
            })}
        </Routes>
  </BrowserRouter>
)

export default App
