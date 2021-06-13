import "./Into.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import profile from '../../../assets/Image/profile-1.png'
import down from '../../../assets/Icon/arrow_dwon1.png'
import { Link } from "react-router-dom";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Content Creator"],
        });
    }, []);

    return (
        <div className="intro_section">

            <div className="intro container" id="intro">
                <div className="left">
                    <div class="circle"></div>
                    <div className="imgContainer">

                        <img src={profile} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>Hi There, I'm</h2>
                        <h1>Rezaul Karim</h1>
                        <h3>
                            Freelance <span ref={textRef}></span>
                        </h3>
                    </div>
                    <div className="arrow_down">
                        <Link to="/about">
                            <img src={down} alt="project" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
