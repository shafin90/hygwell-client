import { Container } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";


const Home = () => {
    return (
        <Container fluid className=" px-0 ">
            <CustomNavbar></CustomNavbar>
        </Container>
    );
};

export default Home;