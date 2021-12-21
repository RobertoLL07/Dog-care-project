import { FC } from "react";
import Input from "../../components/Input/component";
import "./styles.css";

const Urdog: FC = () => {
  return (
    <div className="urdog-container">
      <div className="urdog-top">
        <p className="urdog-title">Your Dog(s)</p>
        <p className="urdog-description">
          This is the Dog-Care log. Use it to fill information about your dog(s)
          and we will give you recomendations!
        </p>
      </div>
      <div className="urdog-barra"></div>
      <div className="urdog-inputs">
        <p>Name</p>
        <Input />
        <br />
        <p>Age</p>
        <Input />
        <br />
        <p>Weight</p>
        <Input />
        <br />
        <p>Breed</p>
        <Input />
        <br />
        <button type="button" className="button-black">
          Submit Information
        </button>
      </div>
    </div>
  );
};

export default Urdog;
