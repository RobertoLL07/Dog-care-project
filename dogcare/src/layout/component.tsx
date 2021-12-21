import { FC } from "react";
import { useSelector } from "react-redux";
import images from "../assets";
import { loadingSelector } from "../redux/ui/selectors";
import { userTokenSelector } from "../redux/user/selectors";
import Lottie, { Options } from "react-lottie";
import doglick from "../assets/lottie/doglick.json";
import "./styles.css";
import { Link } from "react-router-dom";

const Layout: FC = ({ children }) => {
  const { TwitterLogo, FacebookLogo, InstagramLogo, DogLogo } = images;

  const loading = useSelector(loadingSelector);
  const tokenUser = useSelector(userTokenSelector);

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: doglick,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="dog-care-container">
      {loading ? (
        <div className="loader-container">
          <Lottie
            speed={2.2}
            options={defaultOptions}
            height={400}
            width={400}
          />
          <p>Petting a Dog ...</p>
        </div>
      ) : null}
      <header className="dog-care-header">
        <Link to="/">
          <DogLogo className="dog-care-logo" />
        </Link>
        <ul className="dog-care-firstMenu">
          <li className="clickable">
            <Link to="/Urdog">Your Dog(s)</Link>
          </li>
          <li className="clickable">
            <Link to="/Medical">Medical Care</Link>
          </li>
          <li className="clickable">
            <Link to="/Tips">Tips</Link>
          </li>
        </ul>
        <ul className="dog-care-secondMenu">
          <li className="clickable">
            <Link to="/Locations">Locations</Link>
          </li>
          <li className="clickable">Contact</li>
          {!tokenUser ? (
            <li className="clickable">
              <Link to="/Login">Log in/Sign in</Link>
            </li>
          ) : null}
        </ul>
      </header>
      <div className="dog-care-content">{children}</div>
      <footer className="dog-care-footer">
        <ul className="footer-greyList">
          <li className="clickable">About us</li>
          <li className="clickable">Community</li>
        </ul>
        <div>
          <img
            className="social-media-logo clickable"
            alt="TwitterLogo"
            src={TwitterLogo}
          />
          <img
            className="social-media-logo clickable"
            alt="FacebookLogo"
            src={FacebookLogo}
          />
          <img
            className="social-media-logo clickable"
            alt="InstagramLogo"
            src={InstagramLogo}
          />
          <div className="footer-rights">
            <p>© 2021 Dog-Care Co.</p>
            <p>All rights reserved</p>
          </div>
        </div>
        <ul className="footer-second-greyList">
          <li className="clickable">{"Terms & conditions"}</li>
          <li className="clickable">Privacy Policy</li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
