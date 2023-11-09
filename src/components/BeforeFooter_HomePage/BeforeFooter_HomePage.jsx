import { Container } from "react-bootstrap";
import { IoMdSend } from "react-icons/io"

import './BeforeFooter_HomePage.css'

const BeforeFooter_HomePage = () => {
    return (
        <Container className="beforeFooter_HomePage d-flex  justify-content-between  align-items-center mb-5 ">
            <h1 className=" text-white">Ready to get started</h1>
            <button className=" writeToUsBtn">
                Write To Us
                <IoMdSend style={{marginLeft:"20px", fontSize:"25px"}} ></IoMdSend>
            </button>
        </Container>
    );
};

export default BeforeFooter_HomePage;