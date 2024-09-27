import "./Home.css";
import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../../LottieFiles/SpaceBoy.json";
import Typed from "../Typed.js";
import { CgFileDocument } from "react-icons/cg";

export const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>
            <b>YONATHAN GASHU</b>
          </h1>
          <Typed />
          <a
            href="https://yonnigashu.github.io/resume/resume.pdf"
            target="_blank"
          >
            <button className="homebtn">
              <CgFileDocument /> Resume
            </button>
          </a>
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>
    </div>
  );
};
