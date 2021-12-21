import { FC } from "react";
import "./styles.css";
import { MdLocationOn } from "react-icons/md";
import { GrFlagFill } from "react-icons/gr";
import images from "../../assets";

const Home: FC = () => {
  const { DogDoc, HappyDog } = images;

  return (
    <div className="home-container">
      <div className="section-section-1">
        <div className="section-1-content">
          <p className="section-title">DOG-CARE</p>
          <p className="section-subtitle">Calling all dog lovers and owners!</p>
        </div>
      </div>
      <div className="info-section-1">
        <div className="info-section-1-content-1">
          <MdLocationOn />
          <span>Dog Relocator</span>
        </div>
        <div className="info-section-1-content-2">
          <p>Do you want to give a dog a new home?</p>
          <p>
            Say no more, we are happy to help just contact us and change a life.
          </p>
        </div>
        <button className="info-section-1-content-3 button">Contact Us</button>
      </div>
      <div className="half-section-1">
        <img className="dog-care-half" alt="Dog not loading :c" src={DogDoc} />
        <div className="half-section-1-content">
          <div className="new-announcement">
            <p>New</p>
          </div>
          <p className="half-section-name">
            Dog <br />
            Hospital
          </p>
          <p className="half-section-description"></p>
          <a className="find-more link">Find out more</a>
        </div>
      </div>
      <div className="half-section-2">
        <p className="clubhouse-title">
          DOG CARE
          <br />
        </p>
        <p className="clubhouse-description">
          Are you a dog parent? We’re here to help you keep your pup happy and
          healthy. Read more for a wide range of dog health and behavior tips
          that will help you provide the best possible care for your canine
          companion.
        </p>
        <button className="button-join-club button">Join Us</button>
      </div>
      <div className="section-section-2">
        <div className="section-section-2-content">
          <p className="section-section-2-title">
            HELP US <br />
            HELP
            <br />
            HOMELESS <br />
            DOGS
          </p>
          <p className="section-section-2-description">
            By donating to the cause you can change a dogs life …
            <a className="find-more-ice-cream link">Find out more</a>
          </p>
        </div>
        <img
          className="ice-cream"
          alt="ice creams doesn't load :c"
          src={HappyDog}
        />
        <div className="section-section-2-noKid">
          <p>*to affiliate organizations</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
