import { Container } from "../../styled/container/container";
import { ContentText } from "../../styled/content/contentText";
import Form from "./form";

const FormContainer: React.FC = () => {
  return (
    <Container>
      <ContentText fontSize="1rem" fontWeight="300" color="black">
        <Form/>
      </ContentText>
    </Container>
  );
};

export default FormContainer;
