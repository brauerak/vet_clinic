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
    <PhotoContainer direction="column" url="https://i.pinimg.com/564x/c6/ad/fc/c6adfcce6f3c25bb55ab0c071188d8fd.jpg">
       {/* <h2 className="vetClinicLogo">VetClinic</h2> */}
       <h5 className="vetClinicLogo"> Całodobowa Klinika Weterynaryjna</h5>
    </PhotoContainer>
    <Outlet />
    </Container>
    <Footer direction = 'row'>
      Footer
    </Footer>
  </>;
};

export default MainView;
