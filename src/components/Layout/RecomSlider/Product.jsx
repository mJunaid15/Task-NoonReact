import React from "react";
import { Card, Button } from "react-bootstrap";
import watch from "../../../Assets/watch.png";
import ex from "../../../Assets/ex.svg";
import { FaStar } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <Card.Img
          variant="top"
          src={watch}
          style={{ height: "200px", width: "200px" }}
        />
        <Card.Body>
          <p className="text-sm">Bluetooth Full Touch Call Smartwatch...</p>

          <h5 className="text-sm font-bold">AED 37.50</h5>
          <p className="text-sm">
            <strike> AED 89 </strike>{" "}
            <span style={{ color: "green" }}> 57% Off</span>
          </p>
          <p className="text-sm">
            Arrives <br /> <strong> Tommorow, June 14</strong>
          </p>

          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img src={ex} alt="express" />

            <p
              className="mb-0"
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="d-flex justify-content-center align-items-center text-sm">
                <FaStar color="orange" />
              </div>
              <span className="text-sm" style={{ color: "orange" }}>4.1</span>
              (950)
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
