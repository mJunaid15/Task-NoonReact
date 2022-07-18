import React from "react";
import "./Menu.css";
import dropdownArrow from "../../../Assets/dropdownArrow.svg";
import BottomNav from "./BottomNav";

const Menu = () => {
  const [category, setCat] = React.useState("");

  console.log(category);
  return (
    <>
      <div className="bg-white flex items-center p-4 lg:hidden block">
        <div className="">
          <img src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="logo" className="h-7" />
        </div>
        <div className="w-full ml-2">
          <input
            className=" form-control shadow-none in text-sm border"
            type="text"
            
            placeholder="What are you looking for?"
          />
        </div>
      </div>
      <div className="navbarmenu hidden lg:block ">
        <div className=" flex  ">
          <div className="menu-items ms-0 flex  ">
            <button className="ps-3  buttonsCat  " style={{ width: "220px" }}>
              <strong>
                {" "}
                <span className="ml-2 text-blue-700 text-sm">
                  ALL CATEGORIES
                </span>
              </strong>
              <img
                style={{ width: "17px", height: "17px" }}
                src={dropdownArrow}
                alt="user"
              />

              <div
                className=" megamenu bg-danger"
                style={{
                  position: "absolute",
                  background: "#000000a6",

                  top: "109px",
                  left: 0,

                  zIndex: 1060,
                }}
              >
                <div className=" d-flex " style={{ zIndex: 9999 }}>
                  <div className="sub-cat bg-light " style={{ width: "225px" }}>
                    {/* <hr /> */}
                    <li className="list-items mt-4">
                      <ul className="text-start cat  text-sm ">
                        Electronic & Mobile
                      </ul>
                      <ul
                        className="text-start text-sm cat mob"
                        onMouseEnter={() => setCat("mob")}
                        onMouseLeave={() => setCat("")}
                      >
                        Mobile
                      </ul>
                      <ul className="text-start cat  text-sm">
                        Beauty & fragrance
                      </ul>
                      <ul className="text-start cat  text-sm">Fashion</ul>
                      <ul className="text-start cat  text-sm">
                        Home & kitchen
                      </ul>
                      <ul className="text-start cat  text-sm">
                        Sport & outdoor
                      </ul>
                      <ul className="text-start cat  text-sm">Toys & games</ul>
                      <ul className="text-start cat  text-sm">Baby product</ul>
                      <ul className="text-start cat  text-sm">
                        Health & nutrition
                      </ul>
                      <ul className="text-start cat  text-sm">Automotive</ul>
                      <ul className="text-start cat  text-sm">
                        Tools & home imporvement
                      </ul>
                      <ul className="text-start cat  text-sm">Books</ul>
                      <ul className="text-start cat  text-sm">Grocery</ul>
                      <ul className="text-start cat  text-sm">Pet supplies</ul>
                    </li>
                  </div>

                  <div
                    className="sub-cat bg-white  pl-3 pt-2"
                    style={{ width: "500px" }}
                  >
                    {category === "mob" ? (
                      <h4 className="text-start text-base font-bold mt-3 pl-0">
                        Mobile
                      </h4>
                    ) : (
                      <h4 className="text-start text-base font-bold mt-3 pl-0">
                        Electronics and Mobile
                      </h4>
                    )}
                    <hr />

                    <div className="d-flex">
                      <li className="list-items mt-2">
                        {category === "mob" ? (
                          <>
                            <ul className="text-start cat text-sm font-bold pl-0 ">
                              {" "}
                              Most popular{" "}
                            </ul>
                            <ul className="text-start cat text-sm pl-0">mob</ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                          </>
                        ) : (
                          <>
                            <ul className="text-start cat text-sm font-bold pl-0 ">
                              {" "}
                              Most popular{" "}
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                          </>
                        )}
                      </li>

                      <li className="list-items mt-2 ml-20">
                        {category === "mob" ? (
                          <>
                            <ul className="text-start cat text-sm   font-bold pl-0">
                              Tops brand
                            </ul>

                            <ul className="text-start cat text-sm pl-0">mob</ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                          </>
                        ) : (
                          <>
                            <ul className="text-start cat text-sm  pl-0 font-bold">
                              Tops brand
                            </ul>

                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                            <ul className="text-start cat text-sm pl-0">
                              Electronic
                            </ul>
                          </>
                        )}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="categories d-flex resMenuRight ">
            <button className="text-sm  buttonsCat2 justify-content-space-center align-items-center">
              <strong>ELECTRONICS</strong>
              <div
                className="bg-white border-t submenuRight"
                style={{
                  position: "absolute",
                  background: "#000000a6",

                  top: "105px",
                  left: 0,
                  right: 0,

                  zIndex: 1060,
                }}
              >
                <div className="flex">
                  <div className=" w-[40%] ">
                    <li className="list-items mt-4">
                      <ul className="text-start cat  text-sm ">
                        Electronic & Mobile
                      </ul>
                      <ul className="text-start text-sm cat mob">Mobile</ul>
                      <ul className="text-start cat  text-sm">
                        Beauty & fragrance
                      </ul>
                      <ul className="text-start cat  text-sm">Fashion</ul>
                      <ul className="text-start cat  text-sm">
                        Home & kitchen
                      </ul>
                      <ul className="text-start cat  text-sm">
                        Sport & outdoor
                      </ul>
                      <ul className="text-start cat  text-sm">Toys & games</ul>
                      <ul className="text-start cat  text-sm">Baby product</ul>
                      <ul className="text-start cat  text-sm">
                        Health & nutrition
                      </ul>
                    </li>
                  </div>

                  <div className="  w-[100%] ">
                    <li className="list-items mt-4">
                      <ul className="text-start cat  text-sm font-bold ">
                        Top brands
                      </ul>
                      <div className="grid grid-cols-3 gap-y-2">
                        <div>
                          <img
                            src="https://via.placeholder.com/120"
                            alt="place"
                          />
                        </div>
                        <div>
                          <img
                            src="https://via.placeholder.com/120"
                            alt="place"
                          />
                        </div>
                        <div>
                          <img
                            src="https://via.placeholder.com/120"
                            alt="place"
                          />
                        </div>
                        <div>
                          <img
                            src="https://via.placeholder.com/120"
                            alt="place"
                          />
                        </div>
                        <div>
                          <img
                            src="https://via.placeholder.com/120"
                            alt="place"
                          />
                        </div>
                        <div>
                          <img
                            src="https://via.placeholder.com/120"
                            alt="place"
                          />
                        </div>
                      </div>
                    </li>
                  </div>

                  <div className="  w-[100%] ">
                    <li className="list-items mt-4">
                      <div className="grid grid-cols-2">
                        <div>
                          <img
                            src="https://via.placeholder.com/250"
                            alt="place"
                          />
                        </div>
                        <div>
                          <img
                            src="https://via.placeholder.com/250"
                            alt="place"
                          />
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </button>

            <button className=" text-sm buttonsCat2 justify-content-space-center align-items-center">
              <strong>MENS</strong>
            </button>

            <button className=" text-sm buttonsCat2 justify-content-space-center align-items-center">
              <strong>WOMEN</strong>
            </button>

            <button className=" text-sm  buttonsCat2 justify-content-space-center align-items-center">
              <strong>HOME</strong>
            </button>

            <button className=" text-sm  buttonsCat2 justify-content-space-center align-items-center">
              <strong>BEAUTY & FRAGRANCE</strong>
            </button>

            <button className=" text-sm  buttonsCat2 justify-content-space-center align-items-center">
              <strong>BABY & TOYS</strong>
            </button>
            <button className=" text-sm  buttonsCat2 justify-content-space-center align-items-center">
              <strong>SPORTS</strong>
            </button>
            <button className=" text-sm  buttonsCat2 justify-content-space-center align-items-center">
              <strong>GROCERY</strong>
            </button>
            <button className=" text-sm  buttonsCat2 justify-content-space-center align-items-center">
              <strong>BESTSELLERS</strong>
            </button>
            <button className=" text-sm  buttonsCat2 justify-content-space-center align-items-center">
              <strong>SELL ON NOON</strong>
            </button>
          </div>
        </div>
      </div>
      <div
        className="lg:hidden block bg-white"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "999999999",
        }}
      >
        <div className="flex justify-center">
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default Menu;
