import React from "react";
import { Outlet } from "react-router-dom";
import  { Container }  from "../../styled/container/container";

const MainView: React.FC = () => {
  return <>
    MainView
    <Container direction="column">
    <Outlet />
    </Container>
    Footer
  </>;
};

export default MainView;
