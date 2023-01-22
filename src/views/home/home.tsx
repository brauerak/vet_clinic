import { url } from "inspector";
import ContentContainer from "../../components/content-container/content-container";
import { PhotoContainer } from "../../styled/photo-container/photo-container";

const HomeView: React.FC = () => {
  return (
    <>
      <PhotoContainer
        direction="column"
        url="https://i.pinimg.com/564x/c6/ad/fc/c6adfcce6f3c25bb55ab0c071188d8fd.jpg"
      >
        <h5 className="vetClinicLogo"> Całodobowa Klinika Weterynaryjna</h5>
      </PhotoContainer>

      <ContentContainer/>
    

    </>
  );
};

export default HomeView;
