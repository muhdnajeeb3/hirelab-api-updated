"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { REGISTER_URL } from "@/lib/apiEndPoints";
import { navigateSource } from "@/lib/action";
import { toast } from "react-toastify";

var bnr = require("./../../images/background/bg6.jpg");

function Register2(props) {
  const [loading, setLoading] = useState(false);
  const [authState, setAuthState] = useState({
    name: "",
    email: "",
    mobile_number: ""
  });
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    mobile_number: [],
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
      axios.post(REGISTER_URL, authState, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res?.data?.code == 200) {
          toast.success('Register Successfully!Please Login', { theme: "colored" });
          navigateSource('/login');
          
        }else if (res?.data?.code == 404) {
          setLoading(false);
          setErrors(res?.data?.data?.error);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div className="page-wraper">
      <div className="browse-job login-style3">
        <div
          className="bg-img-fix"
          style={{
            backgroundImage: `url(${bnr.default.src})`,
            height: "100vh",
          }}
        >
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
              <div className="login-form style-2" style={{ width: "100%" }}>
                <div className="logo-header text-center p-tb30">
                  <Link href={"./"}>
                    <img src={require("./../../images/logo.png")} alt="" />
                  </Link>
                </div>
                <div className="clearfix"></div>
                <div className="tab-content nav p-b30 tab">
                  <div
                    id="login"
                    className="tab-pane active"
                    style={{ marginBottom: "50px" }}
                  >
                    <form className="dez-form p-b30" method="post" onSubmit={handleSubmit}>
                      <div>
                        <div className="mb-3">
                          <img
                            src="/images/logo1__2_-removebg-preview.png"
                            alt="Logo 1"
                          />
                          <img
                            src="/images/logo2__2_-removebg-preview.png"
                            alt="Logo 2"
                          />
                        </div>
                      </div>
                      <h3
                        className="form-title m-t0 rubik-font"
                        style={{ fontWeight: "600" }}
                      >
                        Sign Up
                      </h3>
                      <div className="dez-separator-outer m-b5">
                        <div className="dez-separator bg-primary style-liner"></div>
                      </div>
                      <p className="lato-font" style={{ fontFamily: "Lato" }}>
                        Enter your Personal details below:
                      </p>
                      <div className="form-group">
                        <input
                          className="form-control w-full lato-font"
                          placeholder="Full Name"
                          name="name"
                          onChange={(e) =>
                            setAuthState({ ...authState, name: e.target.value })
                          }
                        />
                        <span className="text-red-500 text-danger">{errors?.name?.[0]}</span>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control w-full lato-font"
                          placeholder="Username"
                          name="email"
                          onChange={(e) =>
                            setAuthState({ ...authState, email: e.target.value })
                          }
                        />
                        <span className="text-red-500 text-danger">{errors?.email?.[0]}</span>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control w-full lato-font"
                          type="number"
                          name="mobile_number"
                          onChange={(e) =>
                            setAuthState({ ...authState, mobile_number: e.target.value })
                          }
                          placeholder="Mobile Number"
                        />
                        <span className="text-red-500 text-danger">{errors?.mobile_number?.[0]}</span>
                      </div>
                      <div className="form-group w-full d-flex justify-content-center">
                        <button
                          type="submit"
                          className="site-button dz-xs-flex m-r5 text-center lato-font"
                        >
                          Send OTP
                        </button>
                      </div>
                    </form>
                    <div
                      className="text-left lato-font"
                      style={{ marginTop: "35px" }}
                    >
                      <h5
                        className="lato-font"
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          fontFamily: "none",
                        }}
                      >
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="custom-checkbox"
                        />{" "}
                        I agree to the{" "}
                        <span style={{ color: "blue" }}>Terms of Service</span>{" "}
                        & <span style={{ color: "blue" }}>Privacy Policy</span>
                      </h5>
                      <Link
                        className="site-button outline gray button-md"
                        data-toggle="tab"
                        href="#login"
                        style={{ marginTop: "20px" }}
                      >
                        <p className="lato-font p-0 m-0">Back</p>
                      </Link>
                      <button
                        className="site-button pull-right button-md"
                        style={{ marginTop: "20px" }}
                      >
                        <p className="lato-font p-0 m-0">Submit</p>
                      </button>
                    </div>
                    <div className="text-center bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .width-form {
          width: 180%;
        }
        .otp-button-center {
          margin-left: 50%;
        }
        .account-button-center {
          margin-left: 30%;
        }
        .rubik-font {
          font-family: "Rubik", sans-serif !important;
        }
        .lato-font {
          font-family: "Lato", sans-serif !important;
          letter-spacing: 0.03em;
        }
        .custom-checkbox {
          appearance: none;
          background-color: rgba(46, 85, 250, 0.1);
          width: 16px;
          height: 16px;
          margin: 0 8px 0 0;
          border-radius: 4px;
          position: relative;
          cursor: pointer;
        }
        .custom-checkbox:checked {
          background-color: #000;
        }
        .custom-checkbox:checked::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 12px;
          border: solid #fff;
          border-width: 0 2px 2px 0;
          transform: translate(-50%, -50%) rotate(45deg);
        }
      `}</style>
    </div>
  );
}

export default Register2;
