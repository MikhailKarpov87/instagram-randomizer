import React from "react";

import InputForm from "./main_page/input_form";
import ProfilesList from "./main_page/profiles_list";
import Header from "./header";
import Footer from "./footer";
import LanguageSwitch from "./main_page/language_switch";

const MainPage = () => {
  return (
    <div className="container">
      <LanguageSwitch />
      <Header />
      <InputForm />
      <ProfilesList />
      <Footer />
    </div>
  );
};

export default MainPage;
