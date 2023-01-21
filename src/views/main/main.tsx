import React from "react";
import { Outlet } from "react-router-dom";
import  { Container }  from "../../styled/container/container";
import ResponsiveAppBar from "../../components/app-bar/app-bar";
import { Footer } from "../../styled/footer/footer";
import { PhotoContainer } from "../../styled/photo-container/photo-container";

const MainView: React.FC = () => {
  return <>
    <ResponsiveAppBar/>
    <Container direction="column">
    <Outlet />
    </Container>
    <Footer direction = 'row'>
      Footer
    </Footer>
  </>;
};

export default MainView;
