import { Button, Typography } from "@mui/material";
import { url } from "inspector";
import ContentContainer from "../../components/content-container/content-container";
import { Container } from "../../styled/container/container";
import { PhotoContainer } from "../../styled/photo-container/photo-container";
import Logo from "../../components/logo/logo";
import BootstrapButton from "../../styled/buttons/btn-boostrap";
import { Content } from "../../styled/content/content";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const HomeView: React.FC = () => {
  return (
    <Container>
      <PhotoContainer url="https://www.worldatlas.com/r/w960-q80/upload/8b/72/3e/shutterstock-690150508.jpg">
        <BootstrapButton href="http://localhost:3000/appointments">
          Umów wizytę
        </BootstrapButton>
        <Content marginTop="30px" marginBottom="10px">
        <Logo />
        </Content>
      </PhotoContainer>
      <ContentContainer />
    </Container>
  );
};

export default HomeView;
