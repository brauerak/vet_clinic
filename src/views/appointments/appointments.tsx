import { Typography } from "@mui/material";
import Form from "../../components/form/form";
import Logo from "../../components/logo/logo";
import BootstrapButton from "../../styled/buttons/btn-boostrap";
import { Content } from "../../styled/content/content";
import { PhotoContainer } from "../../styled/photo-container/photo-container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Container } from "../../styled/container/container";
import FormContainer from "../../components/form/form-container";

const AppointmentsView: React.FC = () => {
  return (
    <>
        <PhotoContainer url="https://www.worldatlas.com/r/w960-q80/upload/8b/72/3e/shutterstock-690150508.jpg">
          <BootstrapButton>
            Wypełnij formularz
            <KeyboardArrowDownIcon fontSize="large" />
          </BootstrapButton>
          <Content marginTop="30px" marginBottom="10px">
            <Logo />
          </Content>
        </PhotoContainer>
        <FormContainer/>
    </>
  );
};

export default AppointmentsView;
