import "../assets/css/forgotPassword.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/firebase";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const email = useRef();
    const navigate = useNavigate();

const handleForgotPassword = (e) => {

    sendPasswordResetEmail(auth, email.current.value)
      .then(() => {
        alert(`Berhasil mengirim reset link ke ${email.current.value}. silahkan login dengan password yang baru`);
navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert("Silahkan masukan email dengan benar");
      });
}
  return (
    <>
      <Container className="form-reset">
        <h1>Enter your email address to reset password</h1>
        <Form className="form-input">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email ie: john.doe@place.com"
              ref={email}
              name="email"
              label="Email"
              required
            />
          </Form.Group>
          <Button onClick={handleForgotPassword} variant="warning">
            Reset Password
          </Button>
        </Form>
        <h2>Reset link will sent to your email</h2>
      </Container>
    </>
  );
}
