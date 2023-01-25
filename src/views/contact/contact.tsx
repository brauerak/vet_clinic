import Logo from "../../components/logo/logo";
import BootstrapButton from "../../styled/buttons/btn-boostrap";
import { Container } from "../../styled/container/container";
import { Content } from "../../styled/content/content";
import { ContentText } from "../../styled/content/contentText";
import { PhotoContainer } from "../../styled/photo-container/photo-container";

const ContactView: React.FC = () => {
  return (
    <>
      <PhotoContainer url="https://www.worldatlas.com/r/w960-q80/upload/8b/72/3e/shutterstock-690150508.jpg">
        <BootstrapButton>Skontaktuj się z nami</BootstrapButton>
        <Content marginTop="30px" marginBottom="10px">
          <Logo />
        </Content>
      </PhotoContainer>
      <Container>
      <ContentText fontSize="1.5rem" fontWeight="300" color="black">
        <ContentText fontSize="1.5rem" fontWeight="300" color="black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          aut dolor repellendus, accusantium optio magnam, numquam cupiditate
          quos sed expedita obcaecati omnis consequuntur nam. Soluta sed
          similique praesentium voluptatem deserunt?
        </ContentText>
        <ContentText fontSize="1.5rem" fontWeight="300" color="black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim velit
          ipsa nisi, pariatur corrupti nobis, tenetur cum optio laborum, fugiat
          maiores quaerat aliquid! Eveniet, in fugiat. Accusantium omnis
          asperiores voluptates!
        </ContentText>
      </ContentText>
      </Container>
    </>
  );
};

export default ContactView;
