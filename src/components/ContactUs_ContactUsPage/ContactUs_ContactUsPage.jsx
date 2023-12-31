import { Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import './ContactUs_ContactUsPage.css'
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const ContactUs_ContactUsPage = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [termsAndCondition, setTermsAndCondition] = useState(false)
    const [reCaptcha, setRecaptcha] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const submitContactUsForm = (e) => {
        e.preventDefault();

        setIsLoading(true);

        fetch('https://sheetdb.io/api/v1/vnud67b9vm0ld', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'Name': firstName + ' ' + lastName,
                        'Email': email,
                        'Subject': subject,
                        'Message': message,
                        'Phone Number': phoneNumber,
                        'Terms And Conditions': termsAndCondition ? "checked" : "unChecked"
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => {
                // setfirstName('')
                // setlastName('')
                // setEmail('')
                // setphoneNumber('')
                // setSubject('')
                // setMessage('')
                // setTermsAndCondition(false)
                // setRecaptcha(null)
                window.location.reload()
            });
    }

    // set value of recaptcha===============
    const onChange = (event) => {
        setRecaptcha(event)
    }


    if (isLoading) {
        return (
            <div style={{height:"200vh"}} className=" d-flex  justify-content-center  align-items-center ">
                <Spinner animation="border" variant="success" />
            </div>
        )
    }
    else {
        return (
            <Container className="position-relative ">

                <h1 className="h1 text-center  fw-bold ">
                    Contact Us
                </h1>

                < article className=" text-center ">
                    Any question or remarks? Just write us a message!
                </article>


                {/* Form of this page */}
                <form className=" form shadow-lg">

                    {/* Fisrt name , Last Name */}
                    <Row className="mb-0 mb-md-5 mb-lg-5  d-flex  justify-content-between  align-items-center ">
                        {/* First name */}
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label className=" text-muted">First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                                className=" text-muted "
                                onChange={e => setfirstName(e.target.value)}
                                value={firstName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        {/* Last Name */}
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label className=" text-muted">Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                                className=" text-muted "
                                onChange={e => setlastName(e.target.value)}
                                value={lastName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    {/* Email, Phone Number */}
                    <Row className="mb-5  d-flex  justify-content-between  align-items-center ">
                        {/* Email */}
                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                            <Form.Label className=" text-muted">Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    className=" text-muted "
                                    type="text"
                                    placeholder="email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        {/* Phone Number */}
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label className=" text-muted">Phone Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Phone Number"
                                defaultValue=""
                                className=" text-muted"
                                onChange={e => setphoneNumber(e.target.value)}
                                value={phoneNumber}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    {/* Radio input ===select subject======= */}
                    <h3 className="h5 text-dark">Select Subject</h3>
                    <Row className=" mb-5 ">
                        <Col md={4} className=" d-flex justify-content-start justify-content-md-center  justify-content-lg-start   align-items-center">
                            <input onChange={e => setSubject(e.target.id)} className="me-2" type="radio" name="radio-group" id="Genaral Inquary" />
                            <label className=" text-muted" htmlFor="radio-1">General Inquary</label>
                        </Col>
                        <Col md={2} className=" d-flex justify-content-start justify-content-md-center  justify-content-lg-center  align-items-center ">
                            <input onChange={e => setSubject(e.target.id)} className="me-2" type="radio" name="radio-group" id="Prducts" />
                            <label htmlFor="radio-2">Prducts</label>
                        </Col>
                        <Col md={3} className=" d-flex justify-content-start justify-content-md-center  justify-content-lg-center  align-items-center ">
                            <input onChange={e => setSubject(e.target.id)} className="me-2" type="radio" name="radio-group" id="Exports" />
                            <label htmlFor="radio-3">Exports</label>
                        </Col>
                        <Col md={3} className=" d-flex justify-content-start justify-content-md-center  justify-content-lg-center  align-items-center ">
                            <input onChange={e => setSubject(e.target.id)} className="me-2" type="radio" name="radio-group" id="Compliance" />
                            <label htmlFor="radio-4">Compliance</label>
                        </Col>
                    </Row>

                    {/* Message =============== */}
                    <Row className="mb-5">
                        <Col md={12} className="d-flex flex-column justify-content-between  align-items-start">
                            <label className="text-muted mb-3" >Message</label>
                            <input onChange={e => setMessage(e.target.value)} value={message} className=" messageInput text-muted pb-1" placeholder="Write your message.." type="text" />
                        </Col>
                    </Row>

                    <ReCAPTCHA
                        sitekey="6LeW_D4pAAAAAHzZaB0LiIqlVxJWnnZ9GViV6HCH"
                        onChange={onChange}
                    />

                    {/* finalize terms and conditions and send the message */}
                    <Row className="mt-4">
                        {/* Click to agree terms and conditions */}
                        <Col className=" mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 d-flex  justify-content-between  align-items-start " md={7}>
                            <input className=" mt-2" type="checkbox" id="terms-and-conditions" name="terms-and-conditions" checked={termsAndCondition} onClick={() => setTermsAndCondition(!termsAndCondition)} />
                            <label className=" text-muted ms-2 " htmlFor="terms-and-conditions">
                                Send me updates about HYGWELL
                                products and services.
                                <span style={{ cursor: "pointer" }} className=" text-danger ms-4 ms-md-2 ms-lg-2  ">
                                    Privacy policy
                                </span>
                            </label>
                        </Col>


                        {/* Send Button message */}
                        <Col md={5} className=" d-flex justify-content-end align-items-center">
                            <button onClick={submitContactUsForm} className={reCaptcha ? "btn btn-success px-3 rounded-2" : "btn btn-success px-3 rounded-2 disabled"}  >
                                Send Message
                            </button>
                        </Col>
                    </Row>

                    {/* Image at the last */}
                    <div style={{ height: "10.677466863033873vw" }} className=" w-100  d-flex  justify-content-end  align-items-center ">
                        <img className="lastImageOfTheContactUsForm" src="/assets/Images/letter_send 1.png" alt="" />
                    </div>
                </form>

                <img className="rightSideBgImgContactPage" src="/assets/Images/Subtract (2).png" alt="" />
            </Container>
        );
    }


};

export default ContactUs_ContactUsPage;