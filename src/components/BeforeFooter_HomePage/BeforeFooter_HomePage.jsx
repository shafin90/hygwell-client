import { Container } from "react-bootstrap";
import { IoMdSend } from "react-icons/io"

import './BeforeFooter_HomePage.css'
import { Slide } from "react-awesome-reveal";

const BeforeFooter_HomePage = () => {
    return (
        <Container className="beforeFooter_HomePage d-flex flex-column flex-md-row flex-lg-row justify-content-between  align-items-center mb-5 ">
            <Slide cascade>

                <h1 className=" text-white">Ready to get started</h1>
                <button className=" writeToUsBtn btn bg-white rounded-3 px-4">
                    Write To Us
                    <IoMdSend style={{ marginLeft: "20px", fontSize: "25px" }} ></IoMdSend>
                </button>
            </Slide>
        </Container>
    );
};

export default BeforeFooter_HomePage;