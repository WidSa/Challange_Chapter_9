import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../services/firebase";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleLoginEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        alert("sign in email & password successfull");
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert("sign in failed");
      });
  };

  const handleLoginWithGoogle = (e) => {
    const providerGoogle = new GoogleAuthProvider();
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        alert("sign in with google account successfull");
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.error(errorCode, errorMessage);
        alert("Sign in with google account failed!");
      });
  };

  const handleLoginWithFacebook = (e) => {
    const providerFacebook = new FacebookAuthProvider();
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user)
        alert("sign in with facebook account successfull");
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
        alert("Sign in with facebook account failed!");
      });
  };

  return (
    <>
      <div className="body">
        <div className="split left">
          <h1>WELCOME!</h1>
          <h2>
            Play the game with all your courages, get the highest level and
            defeat all oppenent. Enjoy the game give all you've got.
          </h2>
        </div>

        <div className="split right">
          <div className="loginContent">
            <h1>Login to your account</h1>
            <h2>
              Don't have an account?{" "}
              <Link className="registerLink" to="/register">
                Register here
              </Link>
            </h2>
            <Form className="mt-5" onSubmit={handleLoginEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">EMAIL ADDRESS</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email ie: john.doe@place.com"
                  ref={email}
                  // onChange={this.handleChangeField}
                  name="email"
                  label="Email"
                  required
                />
              </Form.Group>

              <Form.Group className="" controlId="formPassword">
                <Form.Label className="text-white">PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  ref={password}
                  // onChange={this.handleChangeField}
                  name="password"
                  label="Password"
                  required
                />
              </Form.Group>

              <Link className="recoverPassword text-right" to="/forgot-password">
                Forgot password?
              </Link>
              <br></br>
              <style type="text/css">
                {`
.btn-login {
      background-color: #f8a201;
      color:white;
      font-size: 120%;
      font-weight: 800;
      letter-spacing: 0.05em;
      }

.btn-login:hover {
      background-color: #f8a201;
    }
.btn-facebook{
    background-color:  #3b5998;
    color:white;
    width:100%;
    font-size:25px;
    margin-top:-5px;
}
.btn-google{
    background-color:  #4285F4;
    color:white;
    width:100%;
    font-size:25px;
    margin-top:-5px;
}
    `}
              </style>
              <Button className="mt-3 text-white" variant="login" type="submit">
                Login
              </Button>
              <br></br>
              <br></br>
              <div className="otherChoice">
                <h3>Other login methods : </h3>
                <div className="facebook">
                  <Button onClick={handleLoginWithFacebook} variant="facebook">
                    Login with Facebook
                  </Button>
                </div>
                <div className="google">
                  <Button onClick={handleLoginWithGoogle} variant="google">
                    Login with Google
                  </Button>
                </div>
              </div>
            </Form>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
