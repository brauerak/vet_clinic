import Form from "../../components/form/form"
import { PhotoContainer } from "../../styled/photo-container/photo-container"

const AppointmentsView: React.FC = () => {
    return <>
        <PhotoContainer direction="column" url="https://i.pinimg.com/564x/32/70/b0/3270b0eacbacfb52967406331ea75fa2.jpg">
        <h5 className="vetClinicLogo"> Całodobowa Klinika Weterynaryjna</h5>
    </PhotoContainer>
    <Form/>
    </>
}

export default AppointmentsView