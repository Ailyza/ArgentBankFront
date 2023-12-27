import "../App.css";
import axios from "axios";
import Logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import IconChat from "../assets/icon-chat.png";
import IconMony from "../assets/icon-money.png";
import IconSecurity from "../assets/icon-security.png";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <div className="">
        {/* <Link to={"/signup"}>Sign up</Link>
          <Link to={"/login"}>Log in</Link> */}

        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
            <img src={IconChat} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <img src={IconMony} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <img src={IconSecurity} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
