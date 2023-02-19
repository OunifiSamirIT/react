import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../components/Inputs";
import { LoginAction } from "../redux/actions/authActions";
import illustrationsLight from "../assets/login-v2.svg";
import logo from "../assets/logo192.png";
import "../pages/login.css"
import {
  Row,
  Col, 
  CardText,
  CardTitle, 
} from "reactstrap";

function Login() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state=>state.errors)
  const navigate = useNavigate()
  const onChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e)=>{
  e.preventDefault();
  dispatch(LoginAction(form, navigate))
  }
  return (
    <Fragment>
  
     <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <img
         // className="link"
            src={logo}
            alt="logo"
            style={{ height: 50 }}
          />
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={illustrationsLight} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome to our site ! 👋
            </CardTitle>
            <CardText className="mb-2">Please sign-in to your account</CardText>
      
            <form onSubmit={onSubmit}>
              <Inputs
                name="email"
                label="Email"
                type="text"
                icon="fa-solid fa-at"
                onChangeHandler={onChangeHandler}
                errors={errors.email}
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-key"
                onChangeHandler={onChangeHandler}
                errors={errors.password}
              />
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">
                  Connect <i className="fa-solid fa-floppy-disk"></i>
                </button>
                <Link to="/register">I don't have account</Link>
              </div>
            </form>
              
           
            
          </Col>
        </Col>
      </Row>
    </div>





 </Fragment>




  );



}

export default Login;
