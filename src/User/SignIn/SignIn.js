import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Icon/images2.png";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import "../user.scss";
export default function SignIn() {
  return (
    <div className="login_form">
      <div class="rerun">
        <Link className="text-decoration-none" to="signup">
          SignUp
          <img  src={logo} alt="img"></img>
        </Link>
      </div>
      <div class="login_container mt-5">
        <div class="login_card"></div>
        <GoogleBtn />
        <div class="login_card bg-dark">
          <h1 class="title">Login</h1>
          <form>
            <div class="input-container">
              <input type="#{type}" id="#{label}" required="required" />
              <label for="#{label}">Username</label>
              <div class="bar"></div>
            </div>
            <div class="input-container">
              <input type="#{type}" id="#{label}" required="required" />
              <label for="#{label}">Password</label>
              <div class="bar"></div>
            </div>
            <div class="button-container">
              <button>
                <span>Go</span>
              </button>
            </div>
            <div class="footer">
              <a href="#">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
