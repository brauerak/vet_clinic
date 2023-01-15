import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/home/home";
import MainView from "./views/main/main";
import AppointmentsView from "./views/appointments/appointments";
import ContactView from "./views/contact/contact";
import NotFound from "./views/not-found/not-found";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainView />}>
          <Route index path='home' element={<HomeView />}></Route>
          <Route path="appointments" element={<AppointmentsView />}></Route>
          <Route path="contact" element={<ContactView />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
