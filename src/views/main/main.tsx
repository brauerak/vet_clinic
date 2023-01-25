import React from "react";
import { Outlet } from "react-router-dom";
import  { Container }  from "../../styled/container/container";
import ResponsiveAppBar from "../../components/app-bar/app-bar";
import { Footer } from "../../styled/footer/footer";
import { PhotoContainer } from "../../styled/photo-container/photo-container";
import {ContentText } from "../../styled/content/contentText";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { StyledLink } from "../../components/link/link";

const pages = [ {
  label: <FacebookIcon fontSize="large"/>,
  URL: 'https://www.facebook.com',
  id: 1
},{
  label: <InstagramIcon fontSize="large"/>,
  URL: 'https://www.instagram.com',
  id: 2
},{
  label: <TwitterIcon fontSize="large"/>,
  URL: 'https://www.twitter.com',
  id: 3
}];

const MainView: React.FC = () => {
  return <>
    <ResponsiveAppBar/>
      <Outlet />
    <Footer>
      <ContentText fontSize="20px" fontWeight="700" color="white">
        <ContentText fontSize="20px" fontWeight="700" color="white">
        Lorem ipsum dolor, <br /> sit amet consectetur <br /> adipisicing elit.
        </ContentText>
        {pages.map((page) => (
        <ContentText fontSize="20px" fontWeight="700" color="white" key={page.id}>
                    <StyledLink color="white" to={page.URL}>{page.label}</StyledLink>
        </ContentText>
              ))}
      </ContentText>
    </Footer>
  </>;
};

export default MainView;

{/* <StyledLink><FacebookIcon fontSize="large"/></StyledLink>
<StyledLink><InstagramIcon fontSize="large"/></StyledLink>
<StyledLink><TwitterIcon fontSize="large"/></StyledLink> */}