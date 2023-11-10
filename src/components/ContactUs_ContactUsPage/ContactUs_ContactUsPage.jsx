import { Col, Container, Row } from "react-bootstrap";
import './ContactUs_ContactUsPage.css'

const ContactUs_ContactUsPage = () => {
    return (
        <Container className="contactUs_ContactUsPage position-relative ">
            <h1 className=" text-center  fw-bold ">
                Contact Us
            </h1>

            < article className=" text-center ">
                Any question or remarks? Just write us a message!
            </article>


            {/* Form of this page */}
            <form className=" form shadow-lg">
                {/* Fisrt name , Last Name */}
                <Row className="mb-5  d-flex  justify-content-between  align-items-center ">
                    {/* First name */}
                    <Col md={5} className=" eachSectionOfForm px-0  d-flex  flex-column  justify-content-between  align-items-start ">
                        <label className="eachSectionOfFormLabel mb-2">
                            First Name
                        </label>
                        <input className="contactUsFormInput w-100 mb-2  " type="text" />
                    </Col>

                    {/* Last Name */}
                    <Col md={5} className=" eachSectionOfForm px-0  d-flex  flex-column  justify-content-between  align-items-start ">
                        <label className="eachSectionOfFormLabel mb-2">
                            Last Name
                        </label>
                        <input className="contactUsFormInput w-100 mb-2  " type="text" />
                    </Col>

                </Row>

                {/* Email, Phone Number */}
                <Row className="mb-5  d-flex  justify-content-between  align-items-center ">
                    {/* Email */}
                    <Col md={5} className=" eachSectionOfForm px-0  d-flex  flex-column  justify-content-between  align-items-start ">
                        <label className="eachSectionOfFormLabel mb-2">
                            Email Address
                        </label>
                        <input className="contactUsFormInput w-100 mb-2  " type="text" />
                    </Col>

                    {/* Phone Number */}
                    <Col md={5} className=" eachSectionOfForm px-0  d-flex  flex-column  justify-content-between  align-items-start ">
                        <label className="eachSectionOfFormLabel mb-2">
                            Phone Number
                        </label>
                        <input className="contactUsFormInput w-100 mb-2  " type="text" />
                    </Col>

                </Row>

                {/* Radio input ===select subject======= */}
                <h3 className=" selectSubject">Select Subject</h3>
                <Row className=" mb-5 ">
                    <Col md={3} className=" d-flex  justify-content-center align-items-center ">
                        <input type="radio" name="radio-group" id="radio-1" />
                        <label className="label" htmlFor="radio-1">General Inquary</label>
                    </Col>
                    <Col md={3} className=" d-flex  justify-content-center align-items-center ">
                        <input type="radio" name="radio-group" id="radio-2" />
                        <label className="label" htmlFor="radio-2">Prducts</label>
                    </Col>
                    <Col md={3} className=" d-flex  justify-content-center align-items-center ">
                        <input type="radio" name="radio-group" id="radio-3" />
                        <label className="label" htmlFor="radio-3">Exports</label>
                    </Col>
                    <Col md={3} className=" d-flex  justify-content-center align-items-center ">
                        <input type="radio" name="radio-group" id="radio-4" />
                        <label className="label" htmlFor="radio-4">Compliance</label>
                    </Col>
                </Row>

                {/* Message =============== */}
                <Row className=" mb-5 ">
                    <Col md={12} className=" d-flex  flex-column  justify-content-between  align-items-start">
                        <label className="messageLabel" >Message</label>
                        <input className=" messageInput" placeholder="Write your message.." type="text" />
                    </Col>
                </Row>

                {/* finalize terms and conditions and send the message */}
                <Row>
                    {/* Click to agree terms and conditions */}
                    <Col className=" d-flex  justify-content-between  align-items-start " md={7}>
                        <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions" />
                        <label className="termsAndCondition ms-2 " htmlFor="terms-and-conditions">
                            Send me updates about HYGWELL
                            products and services.
                            <span className=" text-danger ">
                                Privacy policy
                            </span>
                        </label>
                    </Col>

                    {/* Send Button message */}
                    <Col md={5}>
                        <button className=" sendMessages">
                            Send Message
                        </button>
                    </Col>
                </Row>

                {/* Image at the last */}
                <div style={{height:"10.677466863033873vw"}} className=" w-100  d-flex  justify-content-end  align-items-center ">
                    <img  className="lastImageOfTheContactUsForm" src="../../../public/assets/Images/letter_send 1.png" alt="" />
                </div>
            </form>

            <img className="rightSideBgImgContactPage" src="../../../public/assets/Images/Subtract (3).png" alt="" />
        </Container>
    );
};

export default ContactUs_ContactUsPage;