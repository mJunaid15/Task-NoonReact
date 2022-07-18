import React from "react";
import "./Navbar.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import noon from "../../../Assets/noon.svg";
import sa from "../../../Assets/sa.svg";
import dropdownArrow from "../../../Assets/dropdownArrow.svg";
import user_thin from "../../../Assets/user_thin.svg";
import cart from "../../../Assets/cart.svg";

const Navbar = () => {
  return (
    <>
      {/* Header */}
      <div className="header hidden lg:block">
        {/* Top Header */}
        <div className="top-header p-2">
          {/* Logo */}
          <div className="logo1 inside ml-1">
            <img className="logo p-[10px]" src={noon} alt="logo" />
          </div>

          {/* Deliver to  */}
          <div className="res">
            <div className="drop-down mr-3 ml-3">
              <img src={sa} alt="logo" className="" />

              <p className="mr-2 ml-2 mb-0 text-sm" style={{ width: "70px" }}>
                Deliver to <br />
                   
                  <strong> Riyadh</strong>
               
              </p>

              <div className="dropArrow">
                <img src={dropdownArrow} alt="dropDown" />
              </div>
            </div>
          </div>

          {/* Search Bar */}

          <div className="flex-grow-1 align-items-center">
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Col sm="10" className="flex-grow-1  align-items-center mb-0 ">
                <Form.Control
                  className="shadow-none in text-sm "
                  type="text"
                  style={{ border:" 1px solid transparent"}}
                  placeholder="What are you looking for?"
                />
              </Col>
            </Form.Group>
          </div>

          {/* Buttons singin/singup/arabic */}

          <div className="buttons ">
            <div className="arbi inside">
              <button className="buttonsUsers ms-2 ">
                <span className="me-2 text-sm">العربية</span>
              </button>
            </div>

            <div className="signin inside">
              <button className="buttonsUsers ms-2 align-items-center ">
                <strong>
                  
                  <span className="me-2 text-sm">Sign In</span>
                </strong>
                <img
                  className="me-2"
                  style={{ width: "17px", height: "17px" }}
                  src={user_thin}
                  alt="user"
                />
              </button>
            </div>

            <div className="signup inside">
              <button className="buttonsUsers2 me-2">
                <strong>
                  
                  <span className="me-2 ms-2 text-sm">Cart</span>
                </strong>
                <img src={cart} alt="user" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
