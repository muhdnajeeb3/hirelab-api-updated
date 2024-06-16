"use client";
import React, { useState } from "react";
import Link from "next/link";
var bnr = require("./../../images/background/bg6.jpg");

function Register2(props) {
  return (
    <div className="page-wraper">
      <div className="browse-job login-style3">
        <div
          className="bg-img-fix"
          style={{
            backgroundImage: `url(${bnr.default.src})`,
            height: "100vh",
            width: "100vw",
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
                  <div id="login" className="tab-pane active ">
                    <form className=" dez-form p-b30 rubik-font">
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
                        style={{ fontWeight: "600" }}
                        className="form-title m-t0"
                      >
                        Login
                      </h3>
                      <div className="dez-separator-outer m-b5">
                        <div className="dez-separator bg-primary style-liner"></div>
                      </div>
                      <p className="lato-font">Enter your OTP</p>
                      <div
                        className="form-group w-full"
                        style={{ marginTop: "83px" }}
                      >
                        <input
                          type="number"
                          className="form-control w-full lato-font"
                          placeholder="Enter OTP"
                        />
                      </div>
                    </form>
                    <div className="text-center bottom">
                      <Link
                        style={{
                          fontWeight: "400",
                          width: "205px",
                        }}
                        href="/login"
                        className="site-button button-md btn-block text-white"
                      >
                        <p className="lato-font p-0 m-0">Login</p>
                      </Link>
                    </div>
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
          letter-spacing: 0.02em;
        }
      `}</style>
    </div>
  );
}

export default Register2;
