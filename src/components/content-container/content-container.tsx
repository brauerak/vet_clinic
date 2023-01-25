import { Container } from "../../styled/container/container";
import { ContentText } from "../../styled/content/contentText";

const ContentContainer: React.FC = () => {
  return (
    <Container>
      <ContentText fontSize="2rem" fontWeight="300" color="black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        praesentium quidem obcaecati inventore in, accusamus veniam, libero a
        hic sint sunt consectetur beatae tenetur eius deserunt! Ratione id nobis
        laboriosam.
      </ContentText>

      <ContentText fontSize="2rem" fontWeight="300" color="black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        praesentium quidem obcaecati inventore in, accusamus veniam, libero a
        hic sint sunt consectetur beatae tenetur eius deserunt! Ratione id nobis
        laboriosam.
      </ContentText>
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
  );
};

export default ContentContainer;
